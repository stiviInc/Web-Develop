/*
    Write a constructor function for the post object you wrote in exersice number 4, but the logic for this constructor sould be that the post is gonna be create, its a new post!
*/

function Post(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
    this.addNewComment = (authorComment, bodyComment,comments) =>{
        let comment = {
            author : authorComment,
            body : bodyComment
        }
        comments.push(comment);
    }
}

let momazo = new Post("Momazos","Hey madafakas","Stalin");

console.log(momazo);

momazo.addNewComment("Chapu","Hola perro",momazo.comments);
momazo.addNewComment("Humberto","Que onda pri",momazo.comments);
momazo.addNewComment("Holly","Pokemon :v",momazo.comments);

console.log(momazo);