import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

import http from "./services/httpServices";
import config from "./config.json";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    posts: []
  };

  handleAdd = async () => {
    const originalPosts = [...this.state.posts];

    //Creating a fake object just to simulate how it would be saved in a server!
    const obj = { title: "xdxd", body: "lencho malencho" };

    //Update the UI
    const posts = [obj, ...this.state.posts];
    this.setState({ posts });

    //Update the Server after the UI has been updated!
    try {
      const { data } = await http.post(config.url, obj);
    } catch (error) {
      alert(error);
      this.setState({ posts: originalPosts });
    }
  };

  handleUpdate = async post => {
    //Make the changes that it'll be sended to the server!
    post.title = "UPDATED";
    //Update the server
    try {
      const { status } = await http.put(config.url + "/" + post.id, post); //As you can see, in the config.url parameter we have to specify wich object will be udpated!
      if (status === 200) {
        //Update the UI
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = { ...post };
        this.setState({ posts });
      }
    } catch (error) {
      console.log("update catch");
      if (error && error.state === 404) alert("The resource was not found");
    }
  };

  handleDelete = async post => {
    const originalPosts = [...this.state.posts]; //If something goes wrong in the server, this object will be used to restore the UI to the state at this point!
    //Firstable update the UI
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    //After the UI has been updated, its time to call the server!
    try {
      await http.delete(config.url + "/" + post.id);
      //throw new Error("XDX");
    } catch (error) {
      /*
      if (error.response) {
        console.log(error.response.status);
      }
      */
      if (error && error.state === 404) alert("The resource was not found");
      this.setState({ posts: originalPosts }); //Reverting the UI to its previous state before this method was called!
    }
  };

  async componentDidMount() {
    const promise = await http.get(config.url);
    //Destructuring data property... in this property is stored the data of a promise!
    const { data } = promise;

    this.setState({ posts: data });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
