// ----------- DEPENDENCIES -------------

// environment variables
require('dotenv').config()

// express
const express = require('express');
const app = express();

// cookie parser
const cookieParser = require('cookie-parser');

// Hashing function
const hash = require('./static/javascripts/hash');

// Google Auth
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

// Firebase
require("firebase/firestore");
const serviceAccount = require('./key/admin.json');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASEURL,
    apiKey: process.env.APIKEY,
    authDomain: process.env.PROJECTID,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGINGSENDERID,
    appId: process.env.APPID
});

const db = admin.firestore();

// set port for development
const PORT = 4000;

// ----------- MIDDLEWARE -------------

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use("/static", express.static(__dirname + '/static'));

// ------------ INDEX [ LANDING PAGE ] -----------------

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', (req, res) => {
    let token = req.body.token;

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
    }
    verify()
        .then(() => {
            res.cookie('session-token', token);
            res.send('success')
        })
        .catch(console.error);

})

// --------------- DASHBOARD --------------------

// format data object
class dataController {
    constructor(id, score, results, date, model) {
        this.id = id;
        this.score = score;
        this.results = results;
        this.date = date;
        this.model = model;
    }
    getScores = () => {
        return this.score;
    }
}

// base case input
const emptyScores = {
    "Vulnerabilities": "0",
    "Impact": "0",
    "Technology": "0",
    "Training": "0"
}
const newDate = new Date()
// base case array
const emptyController = [
    new dataController(0, emptyScores, 0, newDate.toString(), 0),
    new dataController(0, emptyScores, 0, newDate.toString(), 0),
    new dataController(0, emptyScores, 0, newDate.toString(), 0),
    new dataController(0, emptyScores, 0, newDate.toString(), 0)
]


app.get('/dashboard', checkAuthenticated, async (req, res, next) => {
    try {
        // init data array and flag
        const arr = []
        var dataFound = true;
        const user = req.user;

        // start iterating over 4 models
        for (var i = 1; i < 5; i++) {
            const modelKey = 'Model ' + i.toString();
            const user_hash = hash(req.user.email).toString();

            // get data from database, sorted by date and limit 1
            const modelData = await db.collection('users')
                .doc(user_hash)
                .collection(modelKey)
                .orderBy('date', 'desc')
                .limit(1);
            const data = await modelData.get();

            // if data is empty set the flag, else get the data
            if (data.empty) {
                dataFound = false;
            } else {
                console.log('Records found!');
                let total = 0;
                data.forEach((item) => {
                    const controller = new dataController(
                        user_hash,
                        item.data().scores,
                        item.data().results,
                        item.data().date,
                        modelKey
                    );
                    arr.push(controller);
                    total = total + 1;
                });
            }
        }
        // set the base case if there is no data for every model
        if (dataFound === true) {
            res.render('dashboard', { user: user, data: arr });
        } else {
            res.render('dashboard', { user: user, message: "No records found.", data: emptyController });
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message, errorType: err.name })
    }
})


// --------------- MODELS --------------------

app.get('/model1', checkAuthenticated, (req, res) => {
    let user = req.user;
    res.render('model1', { user });
})

app.get('/model2', checkAuthenticated, (req, res) => {
    let user = req.user;
    console.log(hash(user))
    res.render('model2', { user });
})

app.get('/model3', checkAuthenticated, (req, res) => {
    let user = req.user;
    res.render('model3', { user });
})

app.get('/model4', checkAuthenticated, (req, res) => {
    let user = req.user;
    res.render('model4', { user });
})

// --------------- MISC ROUTES --------------------

// try out a protected route within authentication realm
app.get('/protectedRoute', checkAuthenticated, (req, res) => {
    res.send('This route is protected')
})

// erase cookies and send to landing page when logged out
app.get('/logout', (req, res) => {
    res.clearCookie('session-token');
    res.redirect('/')
})

// --------------- DATABASE UPLOADS --------------------

app.post('/upload', checkAuthenticated, async (req, res) => {
    // requests sent to the endpoint
    let results = req.body;
    let model = req.body['model'];
    let user = hash(req.user.email).toString();

    // if there is no model, dont upload data
    if (model === 'Model 1' || model === 'Model 2' || model === 'Model 3' || model === 'Model 4') {
        // upload model
        const response = await db.collection("users").doc(user).collection(model).add(results);
        console.log(response._path.segments[2] + ' successfully uploaded.')
    } else {
        console.log('The model is undefined, upload nothing')
    }
});


// ---------- AUTHENTICATION ----------------

function checkAuthenticated(req, res, next) {
    // get cookie if it exists
    let token = req.cookies['session-token'];

    let user = {};
    async function verify() {
        // token verificaiton
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
    }
    verify()
        .then(() => {
            req.user = user;
            next();
        })
        .catch(err => {
            res.redirect('/')
        })

}

// ---------- CONFIG -------------

// start express app.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})