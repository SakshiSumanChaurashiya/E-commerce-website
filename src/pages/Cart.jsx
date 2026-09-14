import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

import {
  FaCheckCircle,
  FaShoppingCart,
  FaShoppingBag,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

function Cart() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);

    console.log("Order Details:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="cart-page">

      {/* Success Message */}
      {orderPlaced && (
        <div className="success-message">
          <h2>
            <FaCheckCircle />
            Order Placed Successfully!
          </h2>

          <p>Thank you for shopping with us.</p>
        </div>
      )}

      {/* Page Title */}
      <h1>
        My Cart <FaShoppingCart />
      </h1>

      <div className="cart-container">

        {/* CART ITEMS */}
        <div className="cart-items">

          <h2>Your Cart</h2>

          {/* Face Cream */}
          <div className="cart-product">

            <img
              src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=150&q=80"
              alt="Face Cream"
            />

            <div className="product-info">
              <h3>Face Cream</h3>
              <p>₹329</p>
            </div>

          </div>

          {/* Hair Oil */}
          <div className="cart-product">

            <img
              src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=150&q=80"
              alt="Hair Oil"
            />

            <div className="product-info">
              <h3>Hair Oil</h3>
              <p>₹299</p>
            </div>

          </div>

          {/* Total */}
          <div className="cart-total">
            <h3>Total: ₹628</h3>
          </div>

          {/* Continue Shopping */}
          <button
            className="continue-shopping"
            onClick={() => navigate("/products")}
          >
            <FaArrowLeft />
            Continue Shopping
          </button>


          <button 
            className="profile-button"
            onClick={() => navigate("/profile")}
          >
            Profile Page
            <FaArrowRight />

          </button>

        </div>

        {/* CHECKOUT FORM */}
        <div className="checkout-form">

          <h2>Checkout Details</h2>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            {/* Address */}
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            {/* City */}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />

            {/* Pincode */}
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />

            {/* Place Order */}
            <button
              type="submit"
              className="place-order"
            >
              Place Order
              <FaShoppingBag />
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Cart;