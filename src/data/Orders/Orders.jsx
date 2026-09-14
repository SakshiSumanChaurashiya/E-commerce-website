import { FaBoxOpen, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

function Orders() {
  const navigate = useNavigate();
  return (
    <div className="orders-page">
        <div className="orders-header">
          <h1>My Orders</h1>

          <p className="orders-subtitle">
            Track and manage all your orders in one place.
          </p>
        </div>


      <div className="order-summary">
        <div className="summary-icon">
          <FaShoppingBag />
        </div>
        <div>
        <h2>0</h2>
        <p>Total Orders</p>
      </div>
      </div>


      <div className="no-orders">
        <div className="empty-icon">
          <FaBoxOpen />
        </div>
        <h2>No Orders Yet</h2>

        <p>
          You haven't placed any orders yet. Start shopping and your orders will appear here.
        </p>
        <button onClick={() => navigate("/products")}>
          <FaShoppingBag />
          Start Shopping
        </button>
      </div>

    </div>
  );
}

export default Orders;