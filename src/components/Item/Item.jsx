import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
  return (
    <div className="item">
      <h5 className="names">{item.name}</h5>
      <img className="item-picture" src={item.picture} alt={item.name} />
      <div className="card-body">
        
        <Link to={`/item/${item.id}`} className="productDetail">
          Product Detail
        </Link>
      </div>
    </div>
  );
}

export default Item;
