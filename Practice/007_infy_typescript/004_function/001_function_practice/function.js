// definition of function
/*
 function name(paramenter):return type{
    return ...
 }

 example
 function getProductDetail(productId: number):string{
    return "ProductID"+ productId;
 }
 getProductDetail("1000");
 */
function getMobileByManufacturer(manufacturer) {
    var mobileList;
    if (manufacturer == 'Samsung') {
        mobileList = ['Samsung Galaxy S6 Edge', 'Samsung Galaxy Note 7',
            'Samsung Galaxy J7 SM-J700F'];
        return mobileList;
    }
    else if (manufacturer == 'nokia') {
        mobileList = ['Nokia 105', 'Nokia 230 Dual Sim'];
        return mobileList;
    }
    else {
        mobileList = ['Apple iPhone 5s', 'Apple iPhone 6s ', 'Apple iPhone 7'];
        return mobileList;
    }
}
console.log('The available mobile list: ' + getMobileByManufacturer('Samsung'));
//Arrow function
/*
 (paramenter)=> function body

 example
 var getProductDetails(productId:number): string => { return "ProductID"+ productId;
 }
 }
 getProductDetail("1000");
 */
var manufacturers = [{ id: 'Samsung', price: 150 },
    { id: 'Microsoft', price: 200 },
    { id: 'Apple', price: 400 },
    { id: 'Micromax', price: 100 }
];
var test;
// Arrow function to populate the details of Array whose price is greater than 200
function myFunction() {
    test = manufacturers.filter(function (manufacturer) { return manufacturer.price >= 200; });
}
myFunction();
console.log('Details of Manufacturer array are : ');
// logic to populate the manufacturer array details based on id value
for (var _i = 0, test_1 = test; _i < test_1.length; _i++) {
    var item = test_1[_i];
    console.log(item.id);
}
//excercise
// declaring a function with optional parameter
function getMobByManufacturer(manufacturer, id) {
    if (manufacturer === void 0) { manufacturer = "Samsung"; }
    var mobileList;
    // logic to be evaluated if id parameter while invoking above declared function
    if (id) {
        if (id === 101) {
            mobileList = ['Moto G Play, 4th Gen', 'Moto Z Play with Style Mod'];
            return mobileList;
        }
    }
    // logic to return mobileList based on manufacturer category
    if (manufacturer === 'Samsung') {
        mobileList = [' Samsung Galaxy S6 Edge', ' Samsung Galaxy Note 7',
            ' Samsung Galaxy J7 SM-J700F'];
        return mobileList;
    }
    else if (manufacturer === 'Apple') {
        mobileList = [' Apple iPhone 5s', ' Apple iPhone 6s', ' Apple iPhone 7'];
        return mobileList;
    }
    else {
        mobileList = [' Nokia 105', ' Nokia 230 Dual Sim'];
        return mobileList;
    }
}
// statement to invoke function with optional parameter
console.log('The available mobile list : ' + getMobByManufacturer('Apple'));
// statement to invoke function with default parameter
console.log('The available mobile list : ' + getMobByManufacturer(undefined, 101));
// rest parameter
function getProdDetail(prodId) {
    var prodName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        prodName[_i - 1] = arguments[_i];
    }
    return "Product Name " + prodName + " Product ID " + prodId;
}
console.log(getProdDetail(100, "Apple", "Samsung", "Moto"));
// pushing item to  cart
//declaring empty string
var cart = [];
var pushtoCart = function (item) { cart.push(item); };
function addtoCart() {
    var productName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        productName[_i] = arguments[_i];
    }
    for (var _a = 0, productName_1 = productName; _a < productName_1.length; _a++) {
        var item = productName_1[_a];
        pushtoCart(item);
    }
    return cart;
}
console.log('Cart Items are:' + addtoCart(' Moto G Play, 4th Gen', ' Apple iPhone 5s'));
function add(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log(add(3, 5) + add(5) + add(3));
