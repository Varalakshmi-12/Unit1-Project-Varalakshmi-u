import React, { useState } from "react";
import { mockItems} from "../testdata/mockData";
import Button from "../components/Button";
import { Link } from "react-router-dom";


export default function CartPage() {
  const [itemInput, setItemInput] = useState("");
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");


  // Adding item by name or ID
  const addItem = () => {
    if (!itemInput.trim()) return;

    const userInput = itemInput.toLowerCase();

    const found =
      mockItems.find(
        (item) =>
          item.name.toLowerCase() === userInput ||
          item.id.toString() === userInput
      );

    if (!found) {
      setMessage("❌ Invalid item entered");
      return;
    }

    // checking if the item is already exists in the cart
    const exists = cart.find((item) => item.id === found.id);

    if (exists) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === found.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...found, quantity: 1 }]);
    }

    setMessage("");
    setItemInput("");
  };


  const handlePayment = () => {
    if (cart.length === 0) {
      setMessage("Cart is empty!");
      return;
    }
    
    setMessage("processing.....");
    
    setTimeout(() => {
        
            
        
      setMessage("✅ Payment successful! Your change due is $0.00.");
      setCart([]); 
    }, 2000);
  };



return (
    <section>
    

      <h1>Customer Checkout</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter item name or ID"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />

        <Button label="Add Item" onClick={addItem} />
        <Button label="Pay Now" onClick={handlePayment} />
      </div>
      <nav className="nav-home">
      <Link to="/">Go Back to Home</Link>
      </nav>
      </section>
);
}