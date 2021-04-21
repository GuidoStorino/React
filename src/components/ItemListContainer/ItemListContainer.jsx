import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from "../../firebase.js";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [itemsFiltered, setItemsFiltered] = useState(items);
  const { id } = useParams();

  const getAll = () => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection
      .get()
      .then((resp) => {
        let response = resp.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setItems(response);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  useEffect(() => {
    if (id !== undefined) {
      setItemsFiltered(items.filter((prod) => prod.Type === id));
    } else {
      setItemsFiltered(items);
    }
  }, [id, items]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="container">
      <ItemList items={itemsFiltered} />
    </div>
  );
};

export default ItemListContainer;
