
// percentage and money left func
function updatePercentage(element) {

    // change element
    siblingSpan = element.previousElementSibling;
    console.log(siblingSpan)
    console.log('Span value: ' + element.value)
    siblingSpan.innerHTML = element.value + '%'

    // validate 
    var formInputLength = document.getElementsByTagName('input').length;
    var total = 0;

    // checking out the total 
    for (i = 0; i < formInputLength; i++) {
        total += parseInt(document.getElementsByTagName('input')[i].value);
    }

    // status of current, previous and total money
    const TOTAL_MONEY = 10000
    var currentMoneyObject = document.getElementById('splitLeft');
    var currentMoney = parseInt(currentMoneyObject.value);

    // get how much it is spent in this current operation
    var newPercentage = parseInt(element.value);
    var prevPercentage = parseInt(element.name);
    var percentageDiff = newPercentage - prevPercentage; // note that we use the name to store prev values
    var moneySpent = TOTAL_MONEY * (percentageDiff / 100);

    // get how much money is left
    var moneyLeft = currentMoney - moneySpent;
    console.log('Money left: $' + moneyLeft);

    // now let the user know how much money they have left
    var moneyLeftTitle = document.getElementById('moneyLeftTitle');
    console.log('Money Left Title: ' + moneyLeftTitle);
    moneyLeftTitle.innerHTML = 'Total investment split left: $' + moneyLeft;

    // re-assign params for next element change
    currentMoneyObject.value = moneyLeft.toString();
    element.name = element.value;

    // now enable/disable button for submission
    var submitButton = document.getElementById('submit');
    var warning = document.getElementById('warning');
    if (moneyLeft < 0) {
        // if there is no money left, send alert and disable send button
        submitButton.disabled = true;
        warning.innerText = 'Not enough money to spend.';
        warning.style.color = 'red';
    } else {
        // if there is money left, enable send button and make warning disappear
        submitButton.disabled = false;
        warning.innerText = '';
    }
}


// base case for google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(initChart);

function initChart() {

    // read user data before putting a 0 on everything

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Week')
    data.addColumn('number', 'Results')

    for (i = 1; i < 13; i++) {
        data.addRows([[i, 0]])
    }

    var options = {
        'title': 'General Cyber Resilience',
        'width': 500,
        'height': 500
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart'));
    chart.draw(data, options);
}

