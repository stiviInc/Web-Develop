import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

export default class Movies extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    return (
      <React.Fragment>
        <h4>{this.showNumberMovies()}</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDeleteMovie(movie);
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

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

  showNumberMovies() {
    const totMovies = this.state.movies.length;
    return totMovies === 0 ? (
      <span>There are no movies in the database</span>
    ) : (
      <span>Showing {totMovies} movies in the database</span>
    );
  }
}
