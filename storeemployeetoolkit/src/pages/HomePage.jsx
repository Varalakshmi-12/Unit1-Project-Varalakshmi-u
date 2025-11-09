import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section >
      <h1>Store Employee Toolkit</h1>

      <div className="button-display" >
        <Button
          label="Employee Clock"
          image="/images/clock.png"
          alt="Clock Icon"
          onClick={() => navigate("/clock")}
        />

        <Button
          label="Customer Cart"
          image="/images/cart.png"
          alt="Employee Shift Icon"
          onClick={() => navigate("/cart")}
        />

        <Button
          label="Credit Card"
          image="/images/creditcard.png"
          alt="Cart Icon"
          onClick={() => navigate("/creditcard")}
        />
      </div>
    </section>
  );
}