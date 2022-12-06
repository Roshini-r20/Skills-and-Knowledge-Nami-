function calculateCost(seats) {
    var tc = seats * 9;
    return tc;
}

function calculateDiscount(seats) {
    var save = 0;
    for (var i = 1; i <= seats; i++) {
        var discount = (2 * i + 3);
        var cost = 9 - (discount / 100 * 9);
        save = save + cost;
    }

    return save;
}

function executeMe() {
    if(seats> 2 && seats <=5)
    alert("Amount Payable after discount is $ "+ calculateDiscount(seats));
    else
    alert("Sorry Booking is not possible ");
}

var seats = 3;
var perticket=9;
//document.write(seats + " seats are eligible for festive discount!!<br/>");
//document.write("<br/>");
document.write("Cost per ticket is: $"+perticket);
document.write("<br/>");
document.write("Total cost of the ticket before discount: $" + calculateCost(seats));
document.write("<br/>");
document.write("<br/>");

if (seats <= 2) {
    console.log(seats * 9);
}
else if (seats > 2 && seats < 5) {
    for (var i = 1; i <= seats; i++) {
        console.log((2 * i + 3) + " % discount! on Ticket " + i + "<br/>");
    }
    console.log("<br/>");
    console.log("Amount payable: $" + calculateDiscount(seats));
    console.log("<br/>");
    document.write("Congratulations!!"+ seats+" seats are eligible for discount.");
}
else {
    document.write("Booking is not allowed<br/>");
}

