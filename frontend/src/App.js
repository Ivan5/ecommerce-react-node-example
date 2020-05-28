import React from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Amazona</a>
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
          <ul className="products">
            {data.products.map((product) => (
              <li>
                <div className="product">
                  <img className="product-image" src={product.image} alt="" />
                  <div className="product-name">
                    <a href="product">{product.name}</a>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-rating">
                    {product.rating} start ({product.numReviews})
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer">All right reser</footer>
    </div>
  );
}

export default App;
