/*
    Create a constructor function for make products objects.
    cra
    create an inventory of the products that are sold in your store
    then create an array called shopping cart, in wich you will add some products.... and finally, get the total to pay of the shoping cart....
*/

function Product(name, price, stock = 0) {
  this.name = name;
  this.price = price;
  this.stock = stock;
  this.updateStock = (stockActual, numProductsToUpdate, flag) => {
    //when flag's value auxiliar is equal to 0, it means that was a sale, so, stock has to be reduced....
    //otherwise, the stock has to be incremented
    if (flag === 0) this.stock = stockActual -= numProductsToUpdate;
    else this.stock = stockActual += numProductsToUpdate;
  };
}

const inventory = [
  new Product("Cellphone Huaweii P30", 12500),
  new Product(`TV Samsung 32"`, 4500, 15),
  new Product("Claras de Huevo", 100, 50),
  new Product("Cajas de Leche de Avena", 185, 65),
  new Product("Gatorade Sabor Naranja 355ml", 19, 125)
];

function checkIfAvailableInInventory(product, times) {
  return inventory.filter(productFromInventory => {
    return (
      productFromInventory.name === product &&
      productFromInventory.stock - times > 0
    );
  });
}

function addNewProductToShoppingCart(nameProduct, times) {
  let productAvailable = checkIfAvailableInInventory(nameProduct, times);
  if (productAvailable.length === 0) {
    console.log(`The product ${nameProduct} its not available`);
    return {};
  } else {
    //Update the stock
    let index = inventory.findIndex(product => product.name === nameProduct);
    inventory[index].updateStock(inventory[index].stock, times, 0);
    //Returns the object that will be set in the cart!
    return {
      name: productAvailable[0].name,
      times,
      price: productAvailable[0].price,
      total: productAvailable[0].price * times
    };
  }
}

addProductsToStock("Claras de Huevo", 200);

function addProductsToStock(nameProduct, times) {
  if (checkIfProductExistInInventory(nameProduct)) {
    let index = inventory.findIndex(product => product.name === nameProduct);
    inventory[index].updateStock(inventory[index].stock, times, 1);
  } else
    console.log(`The product: ${nameProduct} doesnt exist in the inventory`);
}

function checkIfProductExistInInventory(nameProduct) {
  for (let productInInventory of inventory) {
    if (productInInventory.name === nameProduct) return true;
  }
  return false;
}

const shoppingCart = [
  addNewProductToShoppingCart("Claras de Huevo", 4),
  addNewProductToShoppingCart("Gatorade Sabor Naranja 355ml", 5),
  addNewProductToShoppingCart("Cellphone Huaweii P30", 2)
];

function getLengthOfObj(obj) {
  let aux = 0;
  for (let prop in obj) aux++;
  return aux;
}

function getTotalToPay(shopingCart) {
  return shopingCart
    .filter(product => getLengthOfObj(product) != 0)
    .map(product => product.total)
    .reduce(
      (subTotal, pricePerProductInCart) => subTotal + pricePerProductInCart
    );
}

console.log("--------------------------");
console.log(
  `Shopping Cart
`,
  shoppingCart
);
console.log("--------------------------");
console.log(
  `Inventory 
`,
  inventory
);
console.log("--------------------------");
console.log(`The total is: ${getTotalToPay(shoppingCart)}`);
