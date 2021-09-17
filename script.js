function compute() {

    p = document.getElementById("principal");
    var principal = document.getElementById("principal").value;

    // Check that the input is correct
    checkValue(p);

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    
    // Prepare output string
    var output = "If you deposit <span class='highlight'>" + principal + '</span>,<br>'
        + "at an interest rate of <span class='highlight'>" + rate + '%</span>.<br>'
        + "You will receive an amount of <span class='highlight'>" + interest + '</span><br>'
        + "in the year <span class='highlight'>" + year + '<span>.';
    var result = document.getElementById("result");

    var p = document.createElement("p");
    p.innerHTML = output;
    result.appendChild(p);

    p.focus();
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function checkValue(element) {
    var input = element.value;
    if (parseInt(input) <= 0 || input == '') {
        alert("Enter a positive number");
        element.focus();
        // location = 'index.html';
        window.location.reload();
        element.focus();
    } else {
        return;
    }
}

