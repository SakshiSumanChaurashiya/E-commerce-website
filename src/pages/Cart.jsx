
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaShoppingBag } from "react-icons/fa";
import "./Cart.css";

const getPrice = (item) => {
  if (item.sellingPrice !== undefined) {
    return Number(item.sellingPrice) || 0;
  }

  const price = Number(item.price) || 0;
  const discount = Number(item.discount) || 0;

  return Math.round(price - (price * discount) / 100);
};

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() =>
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + getPrice(item) * (Number(item.quantity) || 1),
    0
  );

  const updateCart = (updated) => {
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const changeQuantity = (id, amount) => {
    const updated = cartItems
      .map((item) =>
        String(item.id) === String(id)
          ? { ...item, quantity: (Number(item.quantity) || 1) + amount }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updated);
  };

  const removeItem = (id) => {
    updateCart(
      cartItems.filter((item) => String(item.id) !== String(id))
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderItems = cartItems.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      price: getPrice(item),
      originalPrice: Number(item.price) || 0,
      quantity: Number(item.quantity) || 1,
    }));

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: orderItems,
      total: total,
      customer: formData,
    };

    const oldOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, newOrder])
    );

    localStorage.setItem("cart", "[]");
    setCartItems([]);
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
    });

    alert("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <p>Shopping Cart</p>
        <h1>My Cart 🛒</h1>
      </div>

      {success && <p className="success-message">Order placed successfully!</p>}

      <div className="cart-container">
        <div className="cart-box">
          <h2>Your Cart</h2>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h3>Your cart is empty</h3>
              <button onClick={() => navigate("/products")}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <strong>₹{getPrice(item)}</strong>

                    <div className="quantity-controls">
                      <button onClick={() => changeQuantity(item.id, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                    title="Remove"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}

              <div className="cart-total">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>
            </>
          )}

          <button className="continue-btn" onClick={() => navigate("/products")}>
            <FaShoppingBag /> Continue Shopping
          </button>
        </div>

        {cartItems.length > 0 && (
          <div className="checkout-box">
            <h2>Checkout Details</h2>

            <form onSubmit={handleOrder}>
              {Object.entries(formData).map(([name, value]) => (
                name === "address" ? (
                  <textarea
                    key={name}
                    name={name}
                    placeholder="Address"
                    value={value}
                    onChange={handleChange}
                    required
                  />
                ) : (
                  <input
                    key={name}
                    name={name}
                    type={name === "email" ? "email" : name === "phone" || name === "pincode" ? "tel" : "text"}
                    placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                    value={value}
                    onChange={handleChange}
                    required
                  />
                )
              ))}

              <button type="submit" className="place-order-btn">
                Place Order — ₹{total}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
