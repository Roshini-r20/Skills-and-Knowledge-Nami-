var mob;
(function (mob) {
    mob["gold"] = "699";
    mob["pinkgold"] = "650";
    mob["silver"] = "712";
})(mob || (mob = {}));
var pName = 'Samsung Galaxy J7';
var pPrice = "699";
var pAvailable = "Available";
var pDiscount = "15%";
document.getElementById("pName").innerHTML = pName;
document.getElementById("pPrice").innerHTML = pPrice;
document.getElementById("pAvailable").innerHTML = pAvailable;
document.getElementById("pDiscount").innerHTML = pDiscount;
document.getElementById("gold").innerHTML = mob.gold;
document.getElementById("pinkgold").innerHTML = mob.pinkgold;
document.getElementById("silver").innerHTML = mob.silver;
