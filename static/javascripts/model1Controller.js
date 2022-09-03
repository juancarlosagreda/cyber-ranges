
// Add adiitional debugging and error messages
function isLocal() {
    return true;
}

// ------------------------- CONFIG GOOGLE CHARTS -------------------------------------

// Load the library and its callback function
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Set config for Google Charts
var data = new google.visualization.DataTable();
data.addColumn('number', 'Week');
data.addColumn('number', 'Vulnerabilities');
data.addColumn('number', 'Technology');
data.addColumn('number', 'Impact');
data.addColumn('number', 'Training');

// ------------------------- CONFIG INSIGHTMAKER --------------------------------------

// These variables will define the life cycle of the dynamic system
var simulateController = null;
var index = 0;

// The model is loaded with its prefered config
loadXML(myModel);
setPauseInterval(1);

// The desired primitives to be 
var infoSecurityPrimitive = findName("Information Security Investment");
var threatManagementPrimitive = findName("Threat and Vulnerability management investment");
var infoSharingPrimitive = findName("Information sharing investment");
var trainingPrimitive = findName("Training investment");
var businessContinuityPrimitive = findName("Business continuity management investment");


// Adding data to the chart
// function logUpdate(res) {

//     console.log("Index: " + index)

//     if (index === 0) {
//         // Asume that there will be no investment in week 0
//         setValue(infoSecurityPrimitive, 0);
//         setValue(threatManagementPrimitive, 0);
//         setValue(infoSharingPrimitive, 0);
//         setValue(trainingPrimitive, 0);
//         setValue(businessContinuityPrimitive, 0);
//         index++;
//     }

//     console.log("Index: " + index)


//     // // Set config for Google Charts
//     // var data = new google.visualization.DataTable();
//     // data.addColumn('number', 'Week');
//     // data.addColumn('number', 'Vulnerabilities');
//     // data.addColumn('number', 'Technology');
//     // data.addColumn('number', 'Impact');
//     // data.addColumn('number', 'Training');

//     // while (index < res.periods) {
//     // get my data to set the chart
//     var weeks = parseInt(res.times[index]);
//     var Vulnerabilities = parseInt(res.value(findName("Discovered Vulnerabilities"))[index]);
//     var Technology = parseInt(res.value(findName("Technology"))[index]);
//     var Impact = parseInt(res.value(findName("Impact"))[index]);
//     var Training = parseInt(res.value(findName("Training"))[index]);

//     data.addRows([[weeks, Vulnerabilities, Technology, Impact, Training]]);

//     // Set chart options
//     var options = {
//         'title': 'General Cyber Resilience',
//         'width': 500,
//         'height': 500
//     };

//     // Instantiate and draw our chart, passing in some options.
//     var chart = new google.visualization.LineChart(document.getElementById('chart'));
//     chart.draw(data, options);
//     index++
//     //}
// }

// function restartSimulation() {
//     // Clear the table 
//     initChart();

//     // Restart the index
//     index = 0;

//     runModel({
//         silent: true,
//         onPause: (res) => {
//             logUpdate(res);
//             simulateController = res;
//         },
//         onSuccess: (res) => {
//             logUpdate(res);
//             simulateController = null;
//         }
//     });
// }

// function updateSimulation() {
//     if (simulateController != null) {
//         setValue(infoSecurityPrimitive, parseInt(document.getElementById("infoSecurityId").value));
//         setValue(threatManagementPrimitive, parseInt(document.getElementById("threatManagementId").value));
//         setValue(infoSharingPrimitive, parseInt(document.getElementById("infoSharingId").value));
//         setValue(trainingPrimitive, parseInt(document.getElementById("trainingId").value));
//         setValue(businessContinuityPrimitive, parseInt(document.getElementById("businessContinuityId").value));
//     } else {
//         alert("Simulation is at its final step, you must restart")
//     }
// }

// callback function for google charts
function graphData() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
}

// draw chart function using insightmaker
function drawChart() {
    // load model and set interval for inputs
    loadXML(myModel);
    setPauseInterval(1);

    // get all the primitives from the model
    var infoSecurityPrimitive = findName("Information Security Investment");
    var threatManagementPrimitive = findName("Threat and Vulnerability management investment");
    var infoSharingPrimitive = findName("Information sharing investment");
    var trainingPrimitive = findName("Training investment");
    var businessContinuityPrimitive = findName("Business continuity management investment");

    // get all the values from each of the investments
    const TOTAL_MONEY = 10000
    var infoSecurityComponent = parseInt(document.getElementById('infoSecurityId').value) * TOTAL_MONEY;
    var threatManagemetComponent = parseInt(document.getElementById('threatManagementId').value) * TOTAL_MONEY;
    var infoSharingComponent = parseInt(document.getElementById('infoSharingId').value) * TOTAL_MONEY;
    var trainingComponent = parseInt(document.getElementById('trainingId').value) * TOTAL_MONEY;
    var businessContinuityComponent = parseInt(document.getElementById('businessContinuityId').value) * TOTAL_MONEY;


    // set the values to the primitives
    setValue(infoSecurityPrimitive, infoSecurityComponent);
    setValue(threatManagementPrimitive, threatManagemetComponent);
    setValue(infoSharingPrimitive, infoSharingComponent);
    setValue(trainingPrimitive, trainingComponent);
    setValue(businessContinuityPrimitive, businessContinuityComponent);

    // run dynamic system model
    var res = runModel(true);

    // Upload JSON object init
    var dataToUpload = {};
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    dataToUpload.Date = today;
    dataToUpload.Vulnerabilities = [];
    dataToUpload.Technology = [];
    dataToUpload.Impact = [];
    dataToUpload.Training = [];

    // Google charts data init
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Week');
    data.addColumn('number', 'Vulnerabilities');
    data.addColumn('number', 'Technology');
    data.addColumn('number', 'Impact');
    data.addColumn('number', 'Training');

    var i = 0;
    while (i < res.periods) {
        // get my data to set the chart
        var weeks = parseInt(res.times[i]);
        var Vulnerabilities = parseInt(res.value(findName("Discovered Vulnerabilities"))[i]);
        var Technology = parseInt(res.value(findName("Technology"))[i]);
        var Impact = parseInt(res.value(findName("Impact"))[i]);
        var Training = parseInt(res.value(findName("Training"))[i]);

        data.addRows([[weeks, Vulnerabilities, Technology, Impact, Training]]);
        dataToUpload.Vulnerabilities.push(Vulnerabilities);
        dataToUpload.Technology.push(Technology);
        dataToUpload.Impact.push(Impact);
        dataToUpload.Training.push(Training);

        // Set chart options
        var options = {
            'title': 'General Cyber Resilience',
            'width': 585,
            'height': 450,
            'hAxis': {
                title: 'Week'
            },
            'vAxis': {
                title: 'Money'
            }
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart'));
        chart.draw(data, options);
        i++
    }
    const model = document.getElementById('model').innerHTML;
    console.log(model)

    if (model === 'Model 1' || model === 'Model 2' || model === 'Model 3' || model === 'Model 4') {
        // get results first before sending data as a whole.
        const scores = getResults(dataToUpload);
        sendData(dataToUpload, scores, model)
    } else {
        console.log('The model is undefined, upload nothing')
    }
}

// score system function
function getResults(data) {
    // the number divided is the maximum I see when the chart scales investing on the maximum of each component
    const scoreVulnerabilities = ((data['Vulnerabilities'].reduce((a, b) => a + b, 0) / data['Vulnerabilities'].length) / 200000).toFixed(2);
    const scoreTechnology = ((data['Technology'].reduce((a, b) => a + b, 0) / data['Technology'].length) / 100000).toFixed(2);
    const scoreImpact = ((data['Impact'].reduce((a, b) => a + b, 0) / data['Impact'].length) / 1000).toFixed(2);
    const scoreTraining = ((data['Training'].reduce((a, b) => a + b, 0) / data['Training'].length) / 50000).toFixed(2);

    // return JSON object
    return { 'Vulnerabilities': scoreVulnerabilities, 'Training': scoreTraining, 'Impact': scoreImpact, 'Technology': scoreTechnology }

}

// one function to structure and send the data, using AJAX
async function sendData(data, scores, model) {
    // set data to send in JSON format
    var currentDateTime = new Date();
    var modelData = { "model": model, "results": data, "scores": scores, "date": currentDateTime };

    // create new xhr object
    var xhr = new XMLHttpRequest();

    //open new request
    xhr.open("POST", '/upload', true)
    // set headers
    xhr.setRequestHeader("Content-Type", "application/json");
    // send data
    xhr.send(JSON.stringify(modelData))
}

