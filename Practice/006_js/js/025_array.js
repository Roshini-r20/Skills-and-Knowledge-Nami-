function ExecuteMap(){
    let numArr = [2, 4, 6, 8];
    let result = numArr.map(num => num / 2);
    document.write(result);
}

function ExecuteJoin(){
    let myArray = ["Android", "iOS", "Windows"];
    document.write(myArray.join()+"<br/>");
    document.write(myArray.join('-'));
}

function ExecuteReduce() {
    const numArr = [1, 2, 3, 4];
    document.write(numArr.reduce((accumulator, currentVal) =>  
        accumulator + currentVal));
}

function ExecuteItr() {
    let Pdt_Price = [5000, 3000, 500];  
    let Pdt_sum=Pdt_Price.reduce((accumulator, currentVal) =>  
        accumulator + currentVal)
        document.write("Total Amount : " + Pdt_sum + "<br/>");     
            
            const [Pdt4,,Pdt5] = Pdt_Price; 
            document.write("Total Amount " + (Pdt4+Pdt5) + "<br/>");	 
            let [ProductId, ...ProductName] = [1001,"Mobiles","Furniture","Tablets","Books"];  
            document.write("Product Id : " + ProductId + "<br/>");   
            document.write("Product Name : " + ProductName +"<br/>");  
}