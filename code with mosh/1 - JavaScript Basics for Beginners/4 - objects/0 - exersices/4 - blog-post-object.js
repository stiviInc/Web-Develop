/*
    Create a  post objects with the following properties:

    - title
    - body
    - author
    - views
    - comment -> {author,body}
    - isLive
*/

let post = {
    title : "Momazos",
    body : "Hope you enjoyed this memazos",
    author : "Chapu Nestor",
    view: 150,
    comments : [
        {author : "Stalin", body : "Grow up men"},
        {author : "Holly", body : "Pinche chamaco feo"}
    ],
    isLive : true
}
console.log(post);