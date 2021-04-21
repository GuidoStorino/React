import { useState, useEffect } from "react";
import deleteIcon from "../../assets/icons/eliminar.png";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import './Orders.css'
import returnIcon from '../../assets/icons/returnIcon.png'

function Orders() {
  const [orders, setOrders] = useState([]);
  const db = getFirestore();

  const getAll = () => {
    const itemsCollection = db.collection("orders");
    itemsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No orders yet");
        }
        let snapshot = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setOrders(snapshot);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        console.log("Orders Loaded");
      });
  };

  function formatDate(dateFirestore) {
    let timestamp =
      dateFirestore.seconds * 1000 + dateFirestore.nanoseconds / 1000000;
    let dateObj = new Date(timestamp);
    let date = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getUTCFullYear();
    let fullDate = `${date}/${month}/${year}`;
    return fullDate;
  }
  function deleteOrder(id) {
    const order = db.collection("orders").doc(id);
    order.delete();
    let updatedOrders = orders.filter((order) => {
      return id !== order.id;
    });
    setOrders(updatedOrders);
  }
  useEffect(() => {
    getAll();
  }, []);

  

  return (
    <div>
      <div className="container">
        <Link to="/cart" className="back-link">
           
           <img className="returnIcon" src= {returnIcon}  alt=""/>
        </Link>
      </div>
      {orders.length === 0 ? (
        <h2 className="appear"> No orders yet</h2>
      ) : (
        <div className="orders">
           
          {orders.map((order) => {
            return (
              <ul className="order" key={order.id}>
                <button
                  onClick={() => {
                    deleteOrder(order.id);
                  }}
                  className="order__delete"
                >
                  <img src={deleteIcon} className="deleteIcon" alt="" />
                </button>
                <h4>ORDER</h4>
                <p className="order__id">({order.id}) </p>
                <div className="finalorder">
                  <li>
                    <b>Name: </b> {order.buyer.name}
                  </li>
                  <li>
                    <b>Phone: </b> {order.buyer.phone}
                  </li>
                  <li>
                    <b>Email: </b> {order.buyer.email}
                  </li>
                  <li>
                    <b>Date: </b> {formatDate(order.date)}
                  </li>
                </div>
 
                {order.items.map((item) => {
                  return 
                })}
                <div className="order__total">
                  <span>Total: </span> <span> $ {order.total}</span>{" "}
                </div>
              </ul>
            );
          })}
          <button className={`btn4 ${orders.length > 0 ? "" : "disabled"}`}>
            {" "}
            PAY ORDERS{" "}
          </button>
        </div>
      )}
    </div>
  );
}
export default Orders;
