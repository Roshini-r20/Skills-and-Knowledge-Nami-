document.write("<b> Object Creation using Constructor method </b>");
class Pdt1 {
    constructor(PdtId, PdtName, Price, Qty, TotalAmount) {
        this.PdtId = PdtId,
            this.PdtName = PdtName,
            this.Price = Price,
            this.Qty = Qty,
            this.TotalAmount = TotalAmount,
            this.ChangeQty = function (newQty) {
                this.TotalAmount = newQty * this.Price;
                return this.TotalAmount;
            };
    }
}
let pdt1 =new Pdt1("P001","Furniture",850,0,0);
document.write("<br/>");
document.write(pdt1.PdtId);
document.write("<br/>");
document.write(pdt1["PdtName"]);
document.write("<br/>");
document.write(pdt1.TotalAmount);
pdt1.ChangeQty(10);
document.write("<br/>");
document.write(pdt1.TotalAmount);
document.write("<br/>");
document.write("-----------");
document.write("<br/>");
document.write(pdt1.PdtId);
document.write("<br/>");
document.write(pdt1["PdtName"]);
document.write("<br/>");
document.write(pdt1.TotalAmount);
pdt1.ChangeQty(25);
document.write("<br/>");
document.write(pdt1.TotalAmount);
document.write("<br/>");