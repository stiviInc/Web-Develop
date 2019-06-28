/*
    Write a JavaScript program to create a constructor function and make an array of objects...
    Show the books that are below the price usser select as a filter!

  
*/

function Book(title,author,libraryID,price){
  this.title = title;
  this.author = author;
  this.libraryID = libraryID;
  this.price = price;
}

var library = [
  new Book("The Road Ahead","Bill Gates",1254,250),
  new Book("Walter Isaacson","Steve Jobs",4264,300),
  new Book("Mockingjay: The Final Book of The Hunger Games","Suzanne Collins",3245,150)
];

function showBooksBelowAPrice(library,priceToFilter){
  for(let book of library){
    const{price : price} = book; //Destructuring the libraryID property...
    if(price < priceToFilter) console.log(`The book ${book.title} its price is ${price}`)
  }
}


showBooksBelowAPrice(library,275);
