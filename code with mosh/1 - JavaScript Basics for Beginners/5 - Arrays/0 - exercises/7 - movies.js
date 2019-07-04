/*
    create a constructor function to make movies objects with properties: title, year and rating
    in an array, create 5 movies objects....
    
    show in the console the result of the following filters:
        1.- All the movies in 2018 with rating > 4
        2.- sort them by ther rating in descending order
        3.- Pick their title
    So, in console it only have to display the title of the movies that fulfil the above requirements
*/

function Movie(title, year, rating) {
  this.title = title;
  this.year = year;
  this.rating = rating;
}

const movies = [
  new Movie("a", 2018, 4.5),
  new Movie("b", 2018, 4.7),
  new Movie("c", 2018, 3),
  new Movie("d", 2017, 4.5)
];

function showMoviesAccordingTheRequirements(movies) {
  return movies
    .filter(movie => {
      if (movie.year === 2018 && movie.rating >= 4) return movie;
    })
    .sort(
      (movie1, movie2) =>
        //movie1.rating > movie2.rating ? -1 : movie1.rating < movie2.rating ? 1 : 0    //---> lot of code and such hard to read and understand
        movie1.rating - movie2.rating //Cleanest code and easiest to understand and read!
    )
    .reverse()
    .map(movie => movie.title);
}

console.log(showMoviesAccordingTheRequirements(movies));
