import React from "react";
import "./Button.css";


export default function Button({ label, image, alt, onClick }) {
  return (
    <button className="button" onClick={onClick}
      
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
    >
      {image && (
        <img
          src={image}
          alt={alt}
          
        />
      )}
      <span className="button-label">{label}</span>
    </button>
  );
}