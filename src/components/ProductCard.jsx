
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./ProductCard.css";

function getPrice(product) {
  const price = Number(product.price) || 0;
  const discount = Number(product.discount) || 0;

  return Math.round(price - (price * discount) / 100);
}

function ProductCard({ product }) {
  const navigate = useNavigate();
  const productId = product.id ?? product._id;

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    setIsSaved(
      wishlist.some(
        (item) => String(item.id ?? item._id) === String(productId)
      )
    );
  }, [productId]);

  const addToWishlist = () => {
    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    const alreadyAdded = wishlist.some(
      (item) => String(item.id ?? item._id) === String(productId)
    );

    let updatedWishlist;

    if (alreadyAdded) {
      updatedWishlist = wishlist.filter(
        (item) => String(item.id ?? item._id) !== String(productId)
      );
      setIsSaved(false);
    } else {
      updatedWishlist = [
        ...wishlist,
        {
          ...product,
          id: productId,
          sellingPrice: getPrice(product),
        },
      ];
      setIsSaved(true);
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const addToCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existing = cart.find(
      (item) => String(item.id ?? item._id) === String(productId)
    );

    let updatedCart;

    if (existing) {
      updatedCart = cart.map((item) =>
        String(item.id ?? item._id) === String(productId)
          ? { ...item, quantity: (Number(item.quantity) || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          id: productId,
          sellingPrice: getPrice(product),
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/cart");
  };

  const sellingPrice = getPrice(product);

  return (
    <div className="product-card">
      <button
        className={`wishlist-button ${isSaved ? "saved" : ""}`}
        onClick={addToWishlist}
        title={isSaved ? "Remove from Wishlist" : "Add to Wishlist"}
        aria-label="Toggle Wishlist"
      >
        <FaHeart />
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="product-image"
        onError={(e) => {
          e.currentTarget.style.visibility = "hidden";
        }}
      />

      <h3>{product.title}</h3>

      <div className="price-section">
        <span className="selling-price">
          ₹{sellingPrice}
        </span>

        <span className="original-price">
          ₹{Number(product.price)}
        </span>
      </div>

      <div className="discount-box">
        {product.discount}% OFF
      </div>

      <p className="category">{product.category}</p>

      <button className="cart-button" onClick={addToCart}>
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
