/*
    Write a JavaScript function to sort the following array of objects by title value.

    Sample object:

    var library = [ 
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

*/

function Book(author,title,libraryID){
    this.author = author;
    this.title = title;
    this.libraryID = libraryID;
}

let library = [
    new Book('Bill Gates','The Road Ahead',1254),
    new Book('Steve Jobs','Walter Isaacson',4264),
    new Book('Suzanne Collins','Mockingjay: The Final Book of The Hunger Games',3245)
]

library.sort((book1,book2) => {
    let auxTitleBook1 = book1.title.toLowerCase();
    let auxTitleBook2 = book2.title.toLowerCase();
    return (auxTitleBook1 > auxTitleBook2) ? 1 : (auxTitleBook1 < auxTitleBook2) ? -1 : 0;
});

console.log(library);