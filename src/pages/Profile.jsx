// import "./Profile.css";
// import { 
//    FaUser, 
//    FaBox,
//    FaHeart, 
//    FaEdit,
//    FaSignOutAlt } from "react-icons/fa";

// function Profile() {
//   return (
//   <div className="profile-counter">
//     <div className="profile-card">
//       <div className="profile-image">
//         <FaUser size={50} />
//       </div>
//       <h2>Sakshi Suman</h2>
//       <p className="email">sakshispj00@gmail.com</p>
//       <div className="profile-options">
//         <div className="profile-option">
//           <FaBox />
//           <span>My Orders</span>
//         </div>
//         <div className="profile-option">
//           <FaHeart />
//           <span>Wishlist</span>
//         </div>
//         <div className="profile-option">
//           <FaSignOutAlt />
//           <span>Logout</span>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// }

// export default Profile;





import "./Profile.css";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBox,
  FaHeart,
  FaSignOutAlt
} from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile-counter">
      <div className="profile-card">

        <div className="profile-image">
          <FaUser size={50} />
        </div>

        <h2>Sakshi Suman</h2>
        <p className="email">sakshispj00@gmail.com</p>

        <div className="profile-options">

          <div
            className="profile-option"
            onClick={() => navigate("/orders")}
          >
            <FaBox />
            <span>My Orders</span>
          </div>

          <div
            className="profile-option"
            onClick={() => navigate("/wishlist")}
          >
            <FaHeart />
            <span>Wishlist</span>
          </div>

          <div
            className="profile-option"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </div>

        </div>
      </div>
    </div>

    
  );
}

export default Profile;