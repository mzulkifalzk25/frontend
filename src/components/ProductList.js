import React, { Component } from "react";

const containerStyle = {
  width: "80%",
  margin: "0 auto",
  paddingTop: "20px",
  background: "linear-gradient(to bottom, #4e54c8, #8f94fb)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
};

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/posts/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div style={containerStyle}>
        <h1>Product List</h1>
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
              <img src={product.image} alt={product.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
