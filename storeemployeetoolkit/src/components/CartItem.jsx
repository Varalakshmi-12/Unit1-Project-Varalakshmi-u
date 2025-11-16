import React from "react";
import Button from "../components/Button";

export default function CartItem({ cart, updateQuantity, deleteItem }) {
  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price ($)</th>
          <th>Qty</th>
          <th>Total ($)</th>
          <th>Delete</th>
        </tr>
      </thead>
      </table>
  )}