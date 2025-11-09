import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./ShiftPage.css";

export default function ShiftPage() {
  const [message, setMessage] = useState("");

  const handlePunch = (type) => {
    const time = new Date().toLocaleTimeString();
    setMessage(`Your ${type} punch time is ${time}`);
  };

  return (
    <section>
      <h2>Shift Punch</h2>
      <div className="shift-buttons" >
      <Button label="Start Shift" onClick={() => handlePunch("Start")} />
      <Button label="Meal Shift" onClick={() => handlePunch("Meal")} />
      <Button label="End Shift" onClick={() => handlePunch("End")} />
        </div>
      
      {message && <p className="shift-message">{message}</p>}
      
      <nav className="nav-home">
      <Link to="/">Go Back to Home</Link>
      </nav>
    </section>
  );
}