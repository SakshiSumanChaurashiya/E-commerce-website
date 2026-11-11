// // import "./Profile.css";
// // import { 
// //    FaUser, 
// //    FaBox,
// //    FaHeart, 
// //    FaEdit,
// //    FaSignOutAlt } from "react-icons/fa";

// // function Profile() {
// //   return (
// //   <div className="profile-counter">
// //     <div className="profile-card">
// //       <div className="profile-image">
// //         <FaUser size={50} />
// //       </div>
// //       <h2>Sakshi Suman</h2>
// //       <p className="email">sakshispj00@gmail.com</p>
// //       <div className="profile-options">
// //         <div className="profile-option">
// //           <FaBox />
// //           <span>My Orders</span>
// //         </div>
// //         <div className="profile-option">
// //           <FaHeart />
// //           <span>Wishlist</span>
// //         </div>
// //         <div className="profile-option">
// //           <FaSignOutAlt />
// //           <span>Logout</span>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// //   );
// // }

// // export default Profile;





// import "./Profile.css";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUser,
//   FaBox,
//   FaHeart,
//   FaSignOutAlt
// } from "react-icons/fa";

// function Profile() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="profile-counter">
//       <div className="profile-card">

//         <div className="profile-image">
//           <FaUser size={50} />
//         </div>

//         <h2>Sakshi Suman</h2>
//         <p className="email">sakshispj00@gmail.com</p>

//         <div className="profile-options">

//           <div
//             className="profile-option"
//             onClick={() => navigate("/orders")}
//           >
//             <FaBox />
//             <span>My Orders</span>
//           </div>

//           <div
//             className="profile-option"
//             onClick={() => navigate("/wishlist")}
//           >
//             <FaHeart />
//             <span>Wishlist</span>
//           </div>

//           <div
//             className="profile-option"
//             onClick={handleLogout}
//           >
//             <FaSignOutAlt />
//             <span>Logout</span>
//           </div>

//         </div>
//       </div>
//     </div>

    
//   );
// }

// export default Profile;





import "./Profile.css";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBox,
  FaHeart,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userEmail");
    navigate("/login", { replace: true });
  };

  return (
    <div className="profile-page">

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <FaUser />
        </div>

        <div className="profile-info">
          <h1>Sakshi Suman</h1>
          <p>sakshispj00@gmail.com</p>
          <span>My Account</span>
        </div>
      </div>

      {/* Account Section */}
      <div className="account-section">
        <h2>Account</h2>
        <p className="section-subtitle">
          Manage your orders, wishlist and account
        </p>

        <div className="account-options">

          {/* My Orders */}
          <div
            className="account-option"
            onClick={() => navigate("/orders")}
          >
            <div className="option-icon orders-icon">
              <FaBox />
            </div>

            <div className="option-content">
              <h3>My Orders</h3>
              <p>View and track your orders</p>
            </div>

            <FaChevronRight className="arrow-icon" />
          </div>

          {/* Wishlist */}
          <div
            className="account-option"
            onClick={() => navigate("/wishlist")}
          >
            <div className="option-icon wishlist-icon">
              <FaHeart />
            </div>

            <div className="option-content">
              <h3>Wishlist</h3>
              <p>View your saved products</p>
            </div>

            <FaChevronRight className="arrow-icon" />
          </div>

          {/* Logout */}
          <div
            className="account-option logout-option"
            onClick={handleLogout}
          >
            <div className="option-icon logout-icon">
              <FaSignOutAlt />
            </div>

            <div className="option-content">
              <h3>Logout</h3>
              <p>Sign out from your account</p>
            </div>

            <FaChevronRight className="arrow-icon" />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Profile;
