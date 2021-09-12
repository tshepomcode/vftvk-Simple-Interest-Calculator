function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var output = "If you deposit <span class='highlight'>" + principal + '</span>,<br>'
                + "at an interest rate of <span class='highlight'>" + rate + '%</span>.<br>'
                + "You will receive an amount of <span class='highlight'>" + interest + '</span><br>'
                + "in the year <span class='highlight'>" + year + '<span>.';
    var result = document.getElementById("result");
    
    var p = document.createElement("p");
    p.innerHTML = output;
    result.appendChild(p);
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        