import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const initial = 0;
  const [itemsQty, setItemsQty] = useState(initial);

  const { cart, addItem } = useContext(CartContext);

  const addToCart = () => {
    console.log(`added to cart: ${itemsQty} items of the product ${item.id}`);
    item.stock -= itemsQty;
    setItemsQty(initial);

    addItem(item, itemsQty);
  };

  const onAdd = (e) => {
    e.preventDefault();
    setItemsQty(itemsQty < item.stock ? itemsQty + 1 : itemsQty);
  };

  const onSubstract = (e) => {
    e.preventDefault();
    setItemsQty(itemsQty > initial ? itemsQty - 1 : itemsQty);
  };

  return (
    <div className="item" id={item.id}>
      <img className="item-picture" src={item.picture} alt={item.name} />
      <ItemCount
        stock={item.stock}
        value={itemsQty}
        onAdd={onAdd}
        onSubstract={onSubstract}
      />
      <button
        type="button"
        className=" "
        hidden={!item.stock}
        onClick={() => addToCart()}
      >
        Add to cart
      </button>

      <div className=" ">
        <h5 className=" ">{item.name}</h5>
        <div className=" ">
 
          <p> Stock :{item.stock}</p>

          <p className="price">Price: {item.price}$</p>
        </div>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
      {cart.length > 0 && (
        <Link
          to="/cart"
          className="purchase"
          hidden={!item.stock}
        >
          Complete the purchase
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
