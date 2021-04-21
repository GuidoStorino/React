import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
//import productItems from '../../productItems.json';
import { getFirestore } from "../../firebase.js";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  let { id } = useParams();

  const getItem = (id) => {
    const db = getFirestore();
    db.collection("items")
      .doc(id)
      .get()
      .then((snapshot) => {
        setItem(snapshot.data());
      });
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
