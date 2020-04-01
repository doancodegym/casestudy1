let Product = function(nameProduct,codeProduct,expiryDate,amountProduct,priceProduct,imageProduct,infoProduct) {

    this.nameProduct = nameProduct;
    this.codeProduct = codeProduct;
    this.expiryDate = expiryDate;
    this.amountProduct = amountProduct;
    this.priceProduct = priceProduct;
    this.imageProduct = imageProduct;
    this.infoProduct = infoProduct;
    this.getName = function () {
        return this.nameProduct;
    }
    this.getCode = function () {
        return this.codeProduct;
    }
    this.getExpiry = function () {
        return this.expiryDate;
    }
    this.getAmount = function () {
        return this.amountProduct;
    }
    this.getPrice = function () {
        return this.priceProduct;
    }
}

// "<td>" + this.add(manager[i][j]) + "</td>" +
// "<td>" + demo.expiryDate(manageExpiry[i][j]) + "</td>" +
// "<td>" + demo.amountProduct(manageAmount[i][j]) + "</td>" +
// "<td>"+ demo.priceProduct(managePrice[i][])+"</td>"+