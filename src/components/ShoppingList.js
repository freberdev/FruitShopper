import React from "react";

export function ShoppingList(props) {
  //ToDo change to local storage
  const shoppingList2 = props.list.map((x) => <li className="list-group-item" key={x.id}>{x.name} - {x.price}kr</li>);
  console.log(shoppingList2);

  // Calculate total price
  const TotalPrice = props.list.reduce((total, currentValue) => total = total + currentValue.price, 0);

  // return shoppligst as a complete element
  const shoppingListPrice = shoppingList2.map((x) => x.price);

  return <ul className="list-group"> <li className="list-group-item active">Shop</li>{shoppingList2} <li className="list-group-item">Total kostnad: {TotalPrice}kr</li></ul>;

}

