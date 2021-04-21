import { useContext } from "react";
import deleteIcon from "../../assets/icons/eliminar.png";
import { CartContext } from "../../Context/CartContext";
import './ItemCart.css';

const ItemCart = ({ item, quantity, id }) => {
  console.log(item);
  console.log(quantity);
  const { removeItem } = useContext(CartContext);

  return (
    <div className="row p-3">
       
      <div className="col-4">
        <h5>{`${item.Type} — ${item.name}`}</h5>
      </div>
      <div className="col-2">
        <h5>{`${quantity}`}</h5>
      </div>
      <div className="col-2">
        <h5>{`${item.price}`}</h5>
      </div>
      <div className="col-1">
        <button
          className="eliminar"
          onClick={() => removeItem(item.id)}
        >
          <img src={deleteIcon} className="delete-icon" alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
