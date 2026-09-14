// import "./ProductCard.css";

// function ProductCard({ product }) {
//   const sellingPrice =
//     product.price - (product.price * product.discount) / 100;

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} />

//       <h3>{product.title}</h3>

//       <div className="price-section">
//         <span className="selling-price">
//           ₹{Math.round(sellingPrice)}
//         </span>

//         <span className="original-price">
//           ₹{product.price}
//         </span>
//       </div>

//       <div className="discount-box">
//         {product.discount}% OFF
//       </div>

//       <p className="category">
//         {product.category}
//       </p>

//       <button>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductCard;

import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const sellingPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="product-card">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      {/* Product Name */}
      <h3>{product.title}</h3>

      {/* Price */}
      <div className="price-section">
        <span className="selling-price">
          ₹{Math.round(sellingPrice)}
        </span>

        <span className="original-price">
          ₹{product.price}
        </span>
      </div>

      {/* Discount */}
      <div className="discount-box">
        {product.discount}% OFF
      </div>

      {/* Category */}
      <p className="category">
        {product.category}
      </p>

      {/* Add to Cart */}
      <button
        className="cart-button"
        onClick={() => navigate("/cart")}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;