import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

export default class Movies extends Component {
  state = {
    movies: [],
    itemsPerPage: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: undefined,
    sortColumn: { columnName: "title", order: "asc" } //This will be the values for sort the table the first time the page is load!
  };

  //each time the the componentes are render this method is called after it!
  componentDidMount() {
    const genres = [{ _id: 0, name: "All Genres" }, ...getGenres()]; //For add a new genre that is not in fakeGenreService, we need to do it as if it were an object, because the genres store in fakeGenreService are objects {_id: value, name: "value"}

    this.setState({ movies: getMovies(), genres });
  }

  getPagedData = () => {
    const {
      itemsPerPage,
      currentPage,
      movies: originalMoviesArray,
      selectedGenre
    } = this.state; //Destructuring the state object

    const filteredMovies =
      selectedGenre && selectedGenre._id !== 0
        ? originalMoviesArray.filter(movie => {
            return movie.genre._id === selectedGenre._id;
          })
        : originalMoviesArray;

    const { columnName, order } = this.state.sortColumn;

    const sortedMovies = _.orderBy(filteredMovies, [columnName], [order]);

    const movies = paginate(sortedMovies, currentPage, itemsPerPage); //This array will be paginated and render... this is a local movies array, it wont affect the original!

    return { totalCount: sortedMovies.length, data: movies };
  };

  render() {
    const {
      handleLike,
      handleDeleteMovie,
      handlePageChange,
      handleSorting,
      handleGenreSelect
    } = this; //Destructuring this

    const {
      itemsPerPage,
      currentPage,
      movies: originalMoviesArray,
      genres,
      selectedGenre,
      sortColumn
    } = this.state; //Destructuring the state object

    if (originalMoviesArray.length === 0) return <p>There are no movies</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            //Due to in the ListGroup component we set default props, we dont need to send the prop's name of this array!
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelect}
          />
        </div>

        <div className="col">
          <h4>There are {totalCount} movies in the database</h4>
          <MoviesTable
            movies={movies}
            onLike={handleLike}
            onDelete={handleDeleteMovie}
            onSort={handleSorting}
            sortColumn={sortColumn}
          />
          <Pagination
            totItems={totalCount}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }

  //This method will receibe an object call sortColumn with 2 properties: nameColumn and order....
  handleSorting = sortColumn => {
    this.setState({ sortColumn });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleLike = movie => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDeleteMovie = movie => {
    this.setState({
      movies: this.state.movies.filter(
        actualMovie => actualMovie._id !== movie._id
      )
    });
  };
}
