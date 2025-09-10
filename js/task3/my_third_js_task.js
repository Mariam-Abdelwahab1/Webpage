let product_1 = {
    name: "blue jeans",
    price: 75,
    inStook: true,
    category: "clothes"
};
let product_2 = {
    name: "black skirt",
    price: 150,
    inStook: false,
    category: "clothes"
};
let product_3 = {
    name: "white t-shirt",
    price: 45,
    inStook: true,
    category: "clothes"
};

let cart = [product_1, product_2, product_3];

let totalPrice = product_1.price + product_2.price + product_3.price;
document.writeln("Total price: " + totalPrice + "<br>");

if (totalPrice > 100) {
    document.writeln("You have a discount of 10%");
    let discount = totalPrice * 0.1;
    let priceWithDiscount = totalPrice - discount;
    document.writeln("<br>" + "Price with discount: " + priceWithDiscount + "<br>");
};

document.writeln("<br><br>");

document.writeln("Products in stock: <br>");

if (product_1.inStook) {
    document.writeln(product_1.name + " is in stock <br>");
} else {
    document.writeln(product_1.name + " is out of stock <br>");
}
if (product_2.inStook) {
    document.writeln(product_2.name + " is in stock <br>");
} else {
    document.writeln(product_2.name + " is out of stock <br>");
}
if (product_3.inStook) {
    document.writeln(product_3.name + " is in stock <br>");
} else {
    document.writeln(product_3.name + " is out of stock <br>");
}

document.writeln("<br><br>");


if (cart[0].inStook === true && cart[0].price < 50) {
    document.writeln(cart[0].name + " is in stock and price is less than 50 <br>");
    if (cart[0].inStook === true && cart[0].price < 25) {
        document.writeln(cart[0].name + " is in stock and price is less than 25 <br>");
    }
}
if (cart[1].inStook === true && cart[1].price < 50) {
    document.writeln(cart[1].name + " is in stock and price is less than 50 <br>");
    if (cart[1].inStook === true && cart[1].price < 25) {
        document.writeln(cart[1].name + " is in stock and price is less than 25 <br>");
    }
}
if (cart[2].inStook === true && cart[2].price < 50) {
    document.writeln(cart[2].name + " is in stock and price is less than 50 <br>");
    if (cart[2].inStook === true && cart[2].price < 25) {
        document.writeln(cart[2].name + " is in stock and price is less than 25 <br>");
    }
}

document.writeln("<br><br>");

document.writeln("Budget categories: <br>");

if (cart[0].price < 50) {
    document.writeln(cart[0].name + " Low Budget <br>");
} else if (cart[0].price > 50 && cart[0].price < 100) {
    document.writeln(cart[0].name + " Medium Budget <br>");
} else {
    document.writeln(cart[0].name + " High Budget <br>");
}

if (cart[1].price < 50) {
    document.writeln(cart[1].name + " Low Budget <br>");
} else if (cart[1].price > 50 && cart[1].price < 100) {
    document.writeln(cart[1].name + " Medium Budget <br>");
} else {
    document.writeln(cart[1].name + " High Budget <br>");
}

if (cart[2].price < 50) {
    document.writeln(cart[2].name + " Low Budget <br>");
} else if (cart[2].price > 50 && cart[2].price < 100) {
    document.writeln(cart[2].name + " Medium Budget <br>");
} else {
    document.writeln(cart[2].name + " High Budget <br>");
}

document.writeln("<br><br>");

let category = "clothes";

switch (category) {
    case "electronics":
        document.writeln("Take care of warranty!")
        break;
    case "clothes":
        document.writeln("Check size before buying!")
        break;
    case "food":
        document.writeln("Consume before expiray!")
        break;
    default:
        document.writeln("Unkown category")
        break;
};
