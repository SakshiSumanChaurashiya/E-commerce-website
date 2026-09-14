import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

import {
  FaShoppingBag,
  FaHome,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";


function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove login status
    localStorage.removeItem("isLoggedIn");

    // Go to login page
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <FaShoppingBag className="logo-icon" />
        <span className="logo-text">MyShop</span>
      </div>

      <div className="navbar-links">

        <Link to="/" className="nav-link">
          <FaHome />
          Home
        </Link>

        <Link to="/products" className="nav-link">
          <FaShoppingCart />
          Products
        </Link>

        <Link to="/cart" className="nav-link">
          <FaShoppingBag />
          Cart
        </Link>

        <Link to="/profile" className="nav-link">
          <FaUser />
          Profile
        </Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;





// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// import {
//   FaShoppingBag,
//   FaHome,
//   FaShoppingCart,
//   FaUser,
//   FaSignOutAlt
// } from "react-icons/fa";

// function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Remove login status
//     localStorage.removeItem("isLoggedIn");

//     // Go to login page
//     navigate("/login", { replace: true });
//   };

//   return (
//     <nav className="navbar">

//       <div className="navbar-logo">
//         <FaShoppingBag className="logo-icon" />
//         <span className="logo-text">MyShop</span>
//       </div>

//       <div className="navbar-links">

//         <Link to="/" className="nav-link">
//           <FaHome />
//           Home
//         </Link>

//         <Link to="/products" className="nav-link">
//           <FaShoppingCart />
//           Products
//         </Link>

//         <Link to="/cart" className="nav-link">
//           <FaShoppingBag />
//           Cart
//         </Link>

//         <Link to="/profile" className="nav-link">
//           <FaUser />
//           Profile
//         </Link>

//         <button
//           className="logout-btn"
//           onClick={handleLogout}
//         >
//           <FaSignOutAlt />
//           Logout
//         </button>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;