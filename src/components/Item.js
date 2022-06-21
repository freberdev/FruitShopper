import React from "react";

export function Item(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mt-5  mb-5">
    <div className="card">
      <div className="card-body item">
        <img className="card-img-top mx-auto d-block" loading="lazy" src={props.image} width="250" height="250" alt={props.name}></img>
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">
          {props.name} 
        </p>
        <p className="card-text">
          <b>Pris:</b> <i>{props.price}</i>
        </p>
        <button type="button" className="card-link btn btn-primary addButton" onClick={() => props.handleAdd(props)}>
          Add item
        </button>
        <button type="button" className="card-link btn btn-warning removeButton" onClick={() => props.handleRemove(props)}>
          Remove item
        </button>
      </div>
    </div>
    </div>
  );
}
