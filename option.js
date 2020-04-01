let Option = function () {
    this.deleteList = function (i) {
        listProduct.splice(i, 1);
        demo.display();
    }
    this.editList = function (i) {
        let editName = "<input id='productName" + i + "'/>"
        let editCode = "<input id='productCode" + i + "'/>";
        let editExpiry = "<input id='expiryDat" + i + "'/>";
        let editAmount = "<input id='productAmount" + i + "'/>";
        let editPrice = "<input id='productPrice" + i + "'/>" +
            "<button type='button' value='Save' onclick='saveNew(" + i + ")'>Save</button>"
        document.getElementById("nameEdit" + i + "").innerHTML = editName;
        document.getElementById("codeEdit" + i + "").innerHTML = editCode;
        document.getElementById("expiryEdit" + i + "").innerHTML = editExpiry;
        document.getElementById("amountEdit" + i + "").innerHTML = editAmount;
        document.getElementById("priceEdit" + i + "").innerHTML = editPrice;
    }
    this.info = function (i) {
        let x = "";
        x = x + "<br>";
        x = x + "<h2>Chi tiết sản phẩm</h2>";
        x = x + listProduct[i].infoProduct;
        document.getElementById("info").innerHTML= x;
        let y ="";
        y = y + '<img src="listProduct[i].imageProduct">';
        document.getElementById("imageinfo").innerHTML= y;
    }
}

function saveNew (i) {
    let newName = document.getElementById("productName"+i+"").value;
    let newCode = document.getElementById("productCode"+i+"").value;
    let newDate = document.getElementById("expiryDat"+i+"").value;
    let newAmount = document.getElementById("productAmount"+i+"").value;
    let newPrice = document.getElementById("productPrice"+i+"").value;
    listProduct[i].nameProduct = newName;
    listProduct[i].codeProduct = newCode;
    listProduct[i].expiryDate = newDate;
    listProduct[i].amountProduct = newAmount;
    listProduct[i].priceProduct = newPrice;
    demo.display();
}
let OptionList = new Option();