import React from "react";
import { Link } from "react-router-dom";

export function NavBar(props) {

  return (
    /* .sticky-top will not work if it is inside any container */
    /* For reference about 'Link': https://reactrouter.com/docs/en/v6/components/link */
    <div className="sticky-top">
      <nav id="myNav" className="navbar navbar-expand-sm navbar-dark justify-content-center">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><button type="button" className="btn btn-light">Home</button></Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart"><button type="button" className="btn btn-light">Cart {props.totalItems > 0 ? "(" + props.totalItems + ")" : null}</button></Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/checkout"><button type="button" className="btn btn-danger">Check Out</button></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export function Header() {
  return (
    <div id="Top" className="p-5 bg-success text-white text-center">
      <h1>Fruit Shopper 2000</h1>
      <p>-Färsk frukt året runt</p>
    </div>
  );
}
