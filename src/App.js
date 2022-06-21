import "./App.css";
import React, { useState } from "react";

// Import "routes"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { ShoppingList } from "./components/ShoppingList";
import { Header, NavBar } from "./components/Header";
import { Item } from "./components/Item";

function App() {

  const [shoppingList, setShoppingList] = useState([]);

  // Create a array of objects / items
  const [items, setItems] = useState([
    {
      image: 'assets/img/ananas.jpg',
      name: 'Ananas',
      price: 10
    },
    {
      image: 'assets/img/apelsin.jpg',
      name: 'Apelsin',
      price: 11
    },
    {
      image: 'assets/img/aprikos.jpg',
      name: 'Aprikos',
      price: 20
    },
    {
      image: 'assets/img/bannan.jpg',
      name: 'Banan',
      price: 21
    },
    {
      image: 'assets/img/carambola.jpg',
      name: 'Carambola',
      price: 22
    },
    {

      image: 'assets/img/cherimoya.jpg',
      name: 'Cherimoya',
      price: 23
    },
    {
      image: 'assets/img/citron.jpg',
      name: 'Citron',
      price: 24
    },
    {
      image: 'assets/img/clementin.jpg',
      name: 'Clementin',
      price: 25
    },
    {
      image: 'assets/img/granatapple.jpg',
      name: 'Granatäpple',
      price: 26
    },
    {
      image: 'assets/img/grapefrukt.jpg',
      name: 'Grapefrukt',
      price: 27
    },
    {
      image: 'assets/img/apple.jpg',
      name: 'Äpple',
      price: 27
    }
  ])

  const itemsElement = items.map(item =>
    <Item
      key={item.name}
      image={item.image}
      name={item.name}
      price={item.price}
      handleAdd={addItem}
      handleRemove={removeItem}
    />
  );

  function removeItem(item) {

    // ToDo improve logic

    // make a separate copy of the array
    var array = [...shoppingList];

    // Find last item of item type
    let idToRemove = array.filter(i => i.name === item.name).slice(-1)[0];
    idToRemove = idToRemove ? idToRemove.id : null;

    // If not found, abort
    if (idToRemove == null) {
      return;
    }
 
    // Check if it exists
    var index = array.indexOf(array.filter(i => i.id === idToRemove)[0])

    // If found create a new array without
    if (index !== -1) {
      array.splice(index, 1);
      setShoppingList(array);
    }

  }
  function addItem(item) {
    //ToDo improve generation of keys
    //console.log("Add: " + item);
    setShoppingList((prevState) => [
      ...prevState,
      { id: prevState.length + 1, name: item.name, price: item.price }
      //item.name + " " + item.price
    ]);
  }
  function ClearCart(){setShoppingList([]);}
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar  totalItems={shoppingList.length} />
        <div className="container-fluid">
          <Routes>

             {/* Index  /  */}
            <Route path="/" element={
              <div className="row">
               
                  {/* Output items/fruits */}
                  {itemsElement}
               
              </div>
            }/>

            {/* Cart  / Корзина покупателя */}
            <Route path="/cart" element={
              <div className="row">
                <div className="col-sm-12 col-md-12 mt-5 pt-5">
                  <ShoppingList list={shoppingList} />
                  <button type="button" className="btn btn-warning mt-2 mb-2" onClick={ClearCart}>Clear</button>
                </div>
              </div>
            }/>

            {/* Checkout */}
            <Route path="/checkout" element={
              <div className="row">
                <div className="col-sm-12 col-md-12 mt-0 pt-5">
                  <img className="rounded mx-auto d-block img-fluid" src="assets/img/qr-payment.svg" width="500"></img>
                  <p className="text-center">Total kostnad: {shoppingList.reduce((total, currentValue) => total = total + currentValue.price, 0)}kr</p>

                </div>
              </div>
            }/>
          </Routes>
          <a href="#Top"><button type="button" className="btn btn-primary mt-5 mb-2">Top</button></a>
        </div>
      </div>
    </Router>
  );
}

export default App;
