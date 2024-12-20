"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FutureComponent = () => {
  const [isReady, setIsReady] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // Track button state
  const router = useRouter();

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  const handleAddToCart = () => {
    setIsAdding(true); // Set loading state

    // Define product
    const product = {
      name: "B&B Italian Sofa",
      price: 32,
      quantity: 1,
    };

    // Get the existing cart from localStorage or initialize it as an empty array
    let cart;
    try {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      console.error("Error reading from localStorage", error);
      cart = [];
    }

    // Add the product to the cart
    cart.push(product);

    // Save updated cart to localStorage
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }

    // Redirect to the cart page
    router.push("/cart");
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f3f4f6",
  };

  const leftStyle = {
    flex: 1,
    marginRight: "20px",
  };

  const rightStyle = {
    flex: 1,
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#E44CB9",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const productDetailsStyle = {
    marginTop: "20px",
    fontSize: "14px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <img
          src="/sofa1.jpg"
          alt="Future Visual"
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "auto",
            maxHeight: "400px",
            cursor: "pointer",
          }}
          onClick={handleAddToCart}
        />
      </div>

      <div style={rightStyle}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          Unique Features of Latest and Trending Product
        </h2>
        <ul style={{ color: "#4a4a4a", fontSize: "16px", listStyleType: "disc", paddingLeft: "20px" }}>
          <li>All frames constructed with hardwood solids and laminates</li>
          <li>Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails</li>
          <li>Arms, backs, and seats are structurally reinforced</li>
        </ul>

        <button
          style={buttonStyle}
          onClick={handleAddToCart}
          disabled={isAdding} // Disable button when adding to cart
        >
          {isAdding ? "Adding..." : "Add to Cart"}
        </button>

        <div style={productDetailsStyle}>
          <p>B&B Italian Sofa</p>
          <p style={{ color: "#0B076F" }}>$32</p>
        </div>
      </div>
    </div>
  );
};

export default FutureComponent;
