import React, { Component } from "react";
import NavBar from "./routing-practise/components/navbar";
import Products from "./routing-practise/components/products";
import Posts from "./routing-practise/components/posts";
import Home from "./routing-practise/components/home";
import Dashboard from "./routing-practise/components/admin/dashboard";
import ProductDetails from "./routing-practise/components/productDetails";
import NotFound from "./routing-practise/components/notFound";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
