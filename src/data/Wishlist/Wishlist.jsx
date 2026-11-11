
import {
  FaHeart,
  FaShoppingBag,
  FaTrash,
  FaArrowLeft,
  FaCartPlus
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Load Wishlist products
  useEffect(() => {
    const loadWishlist = () => {
      const savedWishlist = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );

      setWishlist(savedWishlist);
    };

    loadWishlist();

    // Refresh Wishlist when browser gets focus
    window.addEventListener("focus", loadWishlist);

    return () => {
      window.removeEventListener("focus", loadWishlist);
    };
  }, []);

  // Remove product from Wishlist
  const removeItem = (id) => {
    const updatedWishlist = wishlist.filter(
      (item) => (item.id ?? item._id) !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  // Add product to Cart
  const addToCart = (product) => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const productId = product.id ?? product._id;

    const existingProduct = cart.find(
      (item) => (item.id ?? item._id) === productId
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        (item.id ?? item._id) === productId
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1
            }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          id: productId,
          quantity: 1
        }
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    alert("Product added to Cart!");

    navigate("/cart");
  };

  return (
    <div className="wishlist-page">

      {/* Wishlist Header */}
      <div className="wishlist-header">

        <div className="wishlist-icon">
          <FaHeart />
        </div>

        <h1>My Wishlist</h1>

        <p>
          Your favorite products, saved in one place.
        </p>

      </div>

      {wishlist.length > 0 ? (

        <div className="wishlist-container">

          {/* Saved Products Heading */}
          <div className="wishlist-top">

            <h2>Saved Products</h2>

            <span>
              {wishlist.length} Items
            </span>

          </div>

          {/* Wishlist Products */}
          <div className="wishlist-list">

            {wishlist.map((product) => (

              <div
                className="wishlist-card"
                key={product.id ?? product._id}
              >

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                />

                {/* Product Details */}
                <div className="wishlist-info">

                  <h3>{product.title}</h3>

                  <p className="wishlist-price">
                    ₹{Math.round(
                      product.price -
                      (product.price * (product.discount || 0)) / 100
                    )}
                  </p>

                  <span className="stock-status">
                    In Stock
                  </span>

                </div>

                {/* Product Actions */}
                <div className="wishlist-actions">

                  <button
                    className="add-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    <FaCartPlus />
                    Add to Cart
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(product.id ?? product._id)
                    }
                    title="Remove from Wishlist"
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Continue Shopping */}
          <button
            className="continue-shopping"
            onClick={() => navigate("/products")}
          >
            <FaArrowLeft />
            Continue Shopping
          </button>

        </div>

      ) : (

        /* Empty Wishlist */
        <div className="wishlist-content">

          <FaHeart className="empty-heart" />

          <h2>Your Wishlist is Empty</h2>

          <p>
            You haven't saved any products yet.
            Explore our collection and find your favorites!
          </p>

          <button
            onClick={() => navigate("/products")}
          >
            <FaShoppingBag />
            Explore Products
          </button>

        </div>

      )}

    </div>
  );
}

export default Wishlist;
