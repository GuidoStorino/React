import firebase from 'firebase/app';
import 'firebase/firestore';




// Initialize Cloud Firestore thnrough Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBWXXtJUazD9U_sXLD0gHypsO3t5Egph28",
  authDomain: "naharacastillo-f5774.firebaseapp.com",
  projectId: "naharacastillo-f5774",
  storageBucket: "naharacastillo-f5774.appspot.com",
  messagingSenderId: "100026764005",
  appId: "1:100026764005:web:a4d3bcc66364f23967a20c"
});


let db = firebase.firestore();

let items = [
  
    
     {
      "id": "product-6",
      "name": "TEST ",
      "Type": "Notebook",
      "ram": "8GB",
      "core": "Ryzen 5",
      "screen_size": "15 inch",
      "price_USD": 850,
      "stock": 5,
      "picture": "https://i.blogs.es/ffc00c/acer-nitro-5-1-1/450_1000.jpg"
    }

   
  ];



 items.forEach(function (obj) {
  db.collection("items")
    .add({
      id: obj.id,
      name: obj.name,
      Tytle: obj.Type,
      ram: obj.ram,
      core: obj.core,
      screen_size: obj.screen_size,
      picture: obj.picture,
      price_USD: obj.price_USD,
      stock: obj.stock,
     
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});

