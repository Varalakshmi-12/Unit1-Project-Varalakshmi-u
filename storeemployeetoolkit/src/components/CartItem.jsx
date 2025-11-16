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
      <tbody>
        {cart.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
        </tbody>
      </table>
  )}