import React, { Component } from "react";

// Define a CSS class for styling
const containerStyle = {
  width: "80%",
  margin: "0 auto",
  paddingTop: "20px",
  background: "linear-gradient(to bottom, #4e54c8, #8f94fb)", // Example gradient colors
  padding: "20px",
  borderRadius: "10px", // Rounded corners
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)", // Box shadow for a subtle effect
};

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [], // Initialize an empty array to store posts
    };
  }

  componentDidMount() {
    // Make an API request to fetch posts when the component mounts
    fetch("http://localhost:8000/api/posts/")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div style={containerStyle}>
        <h1>Post List</h1>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
