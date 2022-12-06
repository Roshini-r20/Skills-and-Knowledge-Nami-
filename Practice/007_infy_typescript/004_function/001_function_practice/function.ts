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

function getMobileByManufacturer(manufacturer: string): string[] {
    let mobileList: string[];
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
 const manufacturers = [{ id: 'Samsung', price: 150 },
 { id: 'Microsoft', price: 200 },
 { id: 'Apple', price: 400  },
 { id: 'Micromax', price: 100  }
];

let test;
// Arrow function to populate the details of Array whose price is greater than 200
function myFunction(){
    test= manufacturers.filter((manufacturer)=> manufacturer.price >=200);
}

myFunction();
console.log('Details of Manufacturer array are : ');

// logic to populate the manufacturer array details based on id value
for (const item of test) {
    console.log(item.id);
}

//excercise
// declaring a function with optional parameter
function getMobByManufacturer(manufacturer:string = "Samsung", id?:number):string[]{

    let mobileList: string[];

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
      } else if (manufacturer === 'Apple') {
            mobileList = [' Apple iPhone 5s', ' Apple iPhone 6s', ' Apple iPhone 7'];
            return mobileList;
      } else {
            mobileList = [' Nokia 105', ' Nokia 230 Dual Sim'];
            return mobileList;
      }

  }

  // statement to invoke function with optional parameter
console.log('The available mobile list : ' + getMobByManufacturer('Apple'));

  // statement to invoke function with default parameter
console.log('The available mobile list : ' + getMobByManufacturer(undefined, 101));

// rest parameter

function getProdDetail(prodId: number, ...prodName:string[]):string{
    return "Product Name "+ prodName + " Product ID "+ prodId;
}
console.log(getProdDetail(100,"Apple","Samsung","Moto"));

// pushing item to  cart
//declaring empty string
const cart: string[] =[];
const pushtoCart= (item:string)=>{cart.push(item);}

function addtoCart(...productName: string[]): string[] {

    for (const item of productName) {
        pushtoCart(item);
    }
    return cart;
}
console.log('Cart Items are:' + addtoCart(' Moto G Play, 4th Gen', ' Apple iPhone 5s'));

function add(num1=10,num2?:number)
 {  
   if(num2)
   {  
   return num1+num2;
   } 
   return num1;
 } 
console.log(add(3,5)+add(5)+add(3));