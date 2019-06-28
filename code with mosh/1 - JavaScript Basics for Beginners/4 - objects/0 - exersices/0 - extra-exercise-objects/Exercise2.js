/*
    Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 

    var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
*/

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];


function readingStatus(library){
    for(let book of library){
        for(let key in book){
            if(key === 'readingStatus')console.log(`The reading status of the book ${book['title']} is ${book[key]}`)
        }
    }
}


//display the reading status

readingStatus(library);

