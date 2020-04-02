let listProduct = new Array();
let Manager = function () {
    this.add = function () {
        //a du lieu
        let name = document.getElementById("addname").value;
        let code = document.getElementById("addcode").value;
        let expiry = document.getElementById("addexpiry").value;
        let amount = document.getElementById("addamount").value;
        let price = document.getElementById("addprice").value;
        let image = document.getElementById("addimage").value;
        let info = document.getElementById("addinfo").value;

        let newProduct = new Product(name, code, expiry, amount, price,image,info);
        listProduct.push(newProduct);
    }
    this.display = function () {
        let t = "<table border='1'>";
        t = t + "<tr>";
        t = t + "<th>" + "Tên sản phẩm" + "</th>";
        t = t + "<th>" + "Mã sản phẩm" + "</th>";
        t = t + "<th>" + "Hạn sử dụng" + "</th>";
        t = t + "<th>" + "Số lượng" + "</th>";
        t = t + "<th>" + "Đơn giá" + "</th>";
        t = t + "<th  width='100px'>" + "Tùy chọn" + "</th>";
        t = t + "</tr>";
        for (let i = 0; i < listProduct.length; i++) {
            for(j=0;j<1;j++){
                t = t + "<tr>";
                t = t + "<td id='nameEdit" + i + "'>" +
                    listProduct[i].nameProduct +
                    "</td>"+
                    "<td id ='codeEdit"+i+"'>" + listProduct[i].codeProduct + "</td>" +
                    "<td id ='expiryEdit"+i+"'>" + listProduct[i].expiryDate + "</td>" +
                    "<td id = 'amountEdit"+i+"'>" + listProduct[i].amountProduct + "</td>" +
                    "<td id = 'priceEdit"+i+"'>" + listProduct[i].priceProduct+"</td>"+
                    "<td><img src='edit-png-6.png' width='30px'; height='30px' align='center' onclick='OptionList.editList("+i+")' title ='Sửa thông tin'>"+
                    " <img src='delete.png' width='30px'; height='30px' align='center' onclick='OptionList.deleteList("+i+")' title ='Xóa thông tin'>" +
                    "<img src='info.png' width='30px'; height='30px' align='center' onclick='OptionList.info("+i+")' title ='Xem chi tiết'></td>";
                t = t + "</tr>";
            }
        }
        t = t + "</table>";
        document.getElementById("result").innerHTML = t;
    }
}
let demo = new Manager();