// // import { lazy, Suspense } from "react";
// // import { Routes, Route } from "react-router-dom";


// // // Lazy loaded pages
// // const Home = lazy(() => import("./pages/Home"));
// // const Products = lazy(() => import("./pages/Products"));
// // const ProductDetails = lazy(() => import("./pages/ProductDetails"));
// // const Cart = lazy(() => import("./pages/Cart"));
// // const Login = lazy(() => import("./pages/Login"));
// // const Signup = lazy(() => import("./pages/Signup"));
// // const Profile = lazy(() => import("./pages/Profile"));
// // const NotFound = lazy(() => import("./pages/NotFound"));

// // // Components
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import ProtectedRoute from "./components/ProtectedRoute";



// // function App() {
// //   return (
// //     <Suspense fallback={<h2>Loading...</h2>}>

// //       <Routes>

// //         {/* ================= PUBLIC PAGES ================= */}

// //         <Route path="/login" element={<Login />} />

// //         <Route path="/signup" element={<Signup />} />


// //         {/* ================= PROTECTED HOME ================= */}

// //         <Route
// //           path="/"
// //           element={
// //             <ProtectedRoute>
// //               <>
// //                 <Navbar />
// //                 <Home />
// //                 <Footer />
// //               </>
// //             </ProtectedRoute>
// //           }
// //         />


// //         {/* ================= PROTECTED PRODUCTS ================= */}

// //         <Route
// //           path="/products"
// //           element={
// //             <ProtectedRoute>
// //               <>
// //                 <Navbar />
// //                 <Products />
// //                 <Footer />
// //               </>
// //             </ProtectedRoute>
// //           }
// //         />


// //         {/* ================= PRODUCT DETAILS ================= */}

// //         <Route
// //           path="/product/:id"
// //           element={
// //             <ProtectedRoute>
// //               <>
// //                 <Navbar />
// //                 <ProductDetails />
// //                 <Footer />
// //               </>
// //             </ProtectedRoute>
// //           }
// //         />


// //         {/* ================= CART ================= */}

// //         <Route
// //           path="/cart"
// //           element={
// //             <ProtectedRoute>
// //               <>
// //                 <Navbar />
// //                 <Cart />
// //                 <Footer />
// //               </>
// //             </ProtectedRoute>
// //           }
// //         />


// //         {/* ================= PROFILE ================= */}

// //         <Route
// //           path="/profile"
// //           element={
// //             <ProtectedRoute>
// //               <>
// //                 <Navbar />
// //                 <Profile />
// //                 <Footer />
// //               </>
// //             </ProtectedRoute>
// //           }
// //         />


// //         {/* ================= NOT FOUND ================= */}

// //         <Route path="*" element={<NotFound />} />

// //       </Routes>

// //     </Suspense>
// //   );
// // }

// // export default App;



// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";

// // Lazy loaded pages
// const Home = lazy(() => import("./pages/Home"));
// const Products = lazy(() => import("./pages/Products"));
// const ProductDetails = lazy(() => import("./pages/ProductDetails"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Login = lazy(() => import("./pages/Login"));
// const Signup = lazy(() => import("./pages/Signup"));
// const Profile = lazy(() => import("./pages/Profile"));
// const NotFound = lazy(() => import("./pages/NotFound"));






// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <Routes>

//         {/* ================= PUBLIC PAGES ================= */}

//         <Route
//           path="/login"
//           element={<Login />}
//         />

//         <Route
//           path="/signup"
//           element={<Signup />}
//         />


//         {/* ================= PROTECTED HOME ================= */}

//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <>
//                 <Navbar />
//                 <Home />
//                 <Footer />
//               </>
//             </ProtectedRoute>
//           }
//         />


//         {/* ================= PROTECTED PRODUCTS ================= */}

//         <Route
//           path="/products"
//           element={
//             <ProtectedRoute>
//               <>
//                 <Navbar />
//                 <Products />
//                 <Footer />
//               </>
//             </ProtectedRoute>
//           }
//         />


//         {/* ================= PROTECTED PRODUCT DETAILS ================= */}

//         <Route
//           path="/product/:id"
//           element={
//             <ProtectedRoute>
//               <>
//                 <Navbar />
//                 <ProductDetails />
//                 <Footer />
//               </>
//             </ProtectedRoute>
//           }
//         />


//         {/* ================= PROTECTED CART ================= */}

//         <Route
//           path="/cart"
//           element={
//             <ProtectedRoute>
//               <>
//                 <Navbar />
//                 <Cart />
//                 <Footer />
//               </>
//             </ProtectedRoute>
//           }
//         />


//         {/* ================= PROTECTED PROFILE ================= */}

//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <>
//                 <Navbar />
//                 <Profile />
//                 <Footer />
//               </>
//             </ProtectedRoute>
//           }
//         />


//         {/* ================= PAGE NOT FOUND ================= */}

//         <Route
//           path="*"
//           element={<NotFound />}
//         />

//       </Routes>
//     </Suspense>
//   );
// }

// export default App;


import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// ================= LAZY LOADED PAGES =================

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));

// ================= ORDERS & WISHLIST =================

// These files are inside src/data/
const Orders = lazy(() => import("./data/Orders/Orders"));
const Wishlist = lazy(() => import("./data/Wishlist/Wishlist"));

// ================= COMPONENTS =================

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>

      <Routes>

        {/* =====================================================
            PUBLIC PAGES
        ===================================================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />


        {/* =====================================================
            PROTECTED HOME
        ===================================================== */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />


        {/* =====================================================
            PROTECTED PRODUCTS
        ===================================================== */}

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Products />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />


        {/* =====================================================
            PROTECTED PRODUCT DETAILS
        ===================================================== */}

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <ProductDetails />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />


        {/* =====================================================
            PROTECTED CART
        ===================================================== */}

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Cart />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />


        {/* =====================================================
            PROTECTED PROFILE
        ===================================================== */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Profile />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />


        {/* =====================================================
            PROTECTED MY ORDERS
        ===================================================== */}

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Orders />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />


        {/* =====================================================
            PROTECTED WISHLIST
        ===================================================== */}

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Wishlist />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />


        {/* =====================================================
            PAGE NOT FOUND
        ===================================================== */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </Suspense>
  );
}

export default App;