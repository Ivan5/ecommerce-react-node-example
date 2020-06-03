import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart">Cart</a>
            <a href="siging">Sign In</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>
            Shopping Categories
            <button className="sidebar-close-button" onClick={closeMenu}>
              X
            </button>
          </h3>
          <ul>
            <li>
              <a href="#">Pants</a>
              <a href="#">Shirts</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/" exact={true} component={HomePage} />
          </div>
        </main>
        <footer className="footer">All right reser</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
