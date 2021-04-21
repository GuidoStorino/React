import { CartContext } from "../../Context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase";

function Checkout(props) {
  const context = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = () => {
    const db = getFirestore();

    let items = context.cart;

    const newOrder = {
      buyer,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: context.totalPrice,
    };

    const orders = db.collection("orders");
    orders
      .add(newOrder)
      .then((resp) => {
        console.log("Order created");

        let batch = db.batch();

        let itemsRef = db.collection("items");
        context.cart.forEach((item) => {
          batch.update(itemsRef.doc(item.id), { stock: item.stock });
        });

        batch.commit().then(() => {
          context.clear();
          setBuyer({ name: "", phone: "", email: "" });
        });
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  return (
    <div>
      <div className="container">
        <Link to="/cart" className="back-link">
          <span className="btn btn-primary ">BACK TO THE CART</span>
        </Link>
      </div>
      <div className="checkout appear" hidden={context.cart.length === 0}>
        <div className="check-order">BILLING ADDRESS</div>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          id="name"
          placeholder=" "
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="phone"
          onChange={handleInputChange}
          id="tel"
          placeholder=" "
        />
        <label htmlFor="tel">Phone</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          id="email"
          placeholder=" "
        />
        <label htmlFor="email">Email</label>

        <div className="check-order">CHECK YOUR ORDER</div>
        <ul className="checkout-order">
          <li className="checkout-order__head">
            <span>Title</span>
            <span>Qty</span>
            <span>Price </span>
            <span>Subtotal:</span>
          </li>
          {context.cart.map(({ item, quantity }) => {
            return (
              <li className="checkout-order__item" key={item}>
                <span> {item.name} </span>
                <span> {quantity}</span>
                <span> $ {item.price} </span>
                <span> $ {item.price * quantity}</span>
              </li>
            );
          })}
          <li className="checkout-order__total">
            <span>Total: </span> <span> $ {context.totalPrice} </span>{" "}
          </li>
        </ul>
        <Link
          to="/orders"
          className={`btn--big ${
            context.cart.length > 0 &&
            buyer.name !== "" &&
            buyer.phone !== "" &&
            buyer.email !== ""
              ? ""
              : "disabled"
          }`}
          onClick={createOrder}
        >
          <button className="btn btn-primary">PLACE YOUR ORDER</button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;