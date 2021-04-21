import './App.css';
import CartProvider from './Context/CartProvider';
import RouterApp from './Routes/RouterApp';

function App() {
 

  return (
    <div className="App">
      <CartProvider>  
        <RouterApp />
      </CartProvider>
    
    </div>
  );
}

export default App;
