import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  return (
    <div className="wishlist-page">

      <div className="wishlist-header">
        <div className="wishlist-title-icon">
          <FaHeart />
        </div>

        <h1>My Wishlist</h1>

        <p>
          Save your favorite products and find them easily whenever you want.
        </p>
      </div>


      <div className="wishlist-content">

        <div className="wishlist-heart">
          <FaHeart />
        </div>

        <h2>Your Wishlist is Empty</h2>

        <p>
          You haven't saved any products yet. Explore our products
          and add your favorites to your wishlist.
        </p>

        <button onClick={() => navigate("/products")}>
          <FaShoppingBag />
          Explore Products
        </button>

      </div>

    </div>
  );
}

export default Wishlist;