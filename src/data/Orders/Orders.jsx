// import {
//   FaBoxOpen,
//   FaShoppingBag,
//   FaTrash,
//   FaCalendarAlt,
//   FaCheckCircle,
// } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// import products from "../products";

// import "./Orders.css";

// function Orders() {
//   const navigate = useNavigate();

//   const [orders, setOrders] = useState([]);

//   // ==============================
//   // LOAD ORDERS
//   // ==============================
//   useEffect(() => {
//     const savedOrders =
//       JSON.parse(localStorage.getItem("orders")) || [];

//     setOrders(savedOrders);
//   }, []);

//   // ==============================
//   // DELETE COMPLETE ORDER
//   // ==============================
//   const deleteOrder = (orderIndex) => {
//     const updatedOrders = orders.filter(
//       (_, index) => index !== orderIndex
//     );

//     localStorage.setItem(
//       "orders",
//       JSON.stringify(updatedOrders)
//     );

//     setOrders(updatedOrders);
//   };

//   // ==============================
//   // DELETE PRODUCT
//   // ==============================
//   const deleteProduct = (orderIndex, productIndex) => {
//     const updatedOrders = orders
//       .map((order, index) => {
//         if (index !== orderIndex) {
//           return order;
//         }

//         const updatedItems = (order.items || []).filter(
//           (_, index) => index !== productIndex
//         );

//         return {
//           ...order,
//           items: updatedItems,
//         };
//       })
//       .filter(
//         (order) =>
//           order.items && order.items.length > 0
//       );

//     localStorage.setItem(
//       "orders",
//       JSON.stringify(updatedOrders)
//     );

//     setOrders(updatedOrders);
//   };

//   return (
//     <div className="orders-page">

//       {/* =========================
//           HEADER
//       ========================== */}
//       <div className="orders-header">

//         <div>
//           <h1>My Orders</h1>

//           <p className="orders-subtitle">
//             Track and manage your purchased products.
//           </p>
//         </div>

//         {orders.length > 0 && (
//           <div className="orders-count">
//             {orders.length}{" "}
//             {orders.length === 1
//               ? "Order"
//               : "Orders"}
//           </div>
//         )}

//       </div>

//       {/* =========================
//           ORDERS
//       ========================== */}
//       {orders.length > 0 ? (

//         <div className="orders-list">

//           {orders.map((order, orderIndex) => {

//             const items = Array.isArray(order.items)
//               ? order.items
//               : [];

//             // ==========================
//             // TOTAL QUANTITY
//             // ==========================
//             const totalItems = items.reduce(
//               (total, item) => {
//                 return (
//                   total +
//                   (Number(item.quantity) || 1)
//                 );
//               },
//               0
//             );

//             // ==========================
//             // TOTAL PRICE
//             // ==========================
//             const totalAmount = items.reduce(
//               (total, item) => {

//                 const product =
//                   products.find(
//                     (p) =>
//                       p.id === Number(item.id)
//                   );

//                 if (!product) {
//                   return total;
//                 }

//                 const quantity =
//                   Number(item.quantity) || 1;

//                 return (
//                   total +
//                   product.price * quantity
//                 );
//               },
//               0
//             );

//             return (

//               <div
//                 className="order-card"
//                 key={order.id || orderIndex}
//               >

//                 {/* =========================
//                     ORDER HEADER
//                 ========================== */}
//                 <div className="order-top">

//                   <div className="order-details">

//                     <h3>
//                       Order #{orderIndex + 1}
//                     </h3>

//                     <div className="order-meta">

//                       <span>
//                         <FaCalendarAlt />

//                         {order.date ||
//                           new Date().toLocaleDateString()}
//                       </span>

//                       <span>
//                         {totalItems}{" "}
//                         {totalItems === 1
//                           ? "Item"
//                           : "Items"}
//                       </span>

//                     </div>

//                   </div>

//                   {/* STATUS */}
//                   <div className="order-status">

//                     <FaCheckCircle />

//                     Ordered

//                   </div>

//                 </div>

//                 {/* =========================
//                     PRODUCTS
//                 ========================== */}

//                 {items.length > 0 ? (

//                   <div className="order-products">

//                     {items.map(
//                       (item, productIndex) => {

//                         // Find product from products.js
//                         const product =
//                           products.find(
//                             (p) =>
//                               p.id ===
//                               Number(item.id)
//                           );

//                         // If product doesn't exist
//                         if (!product) {
//                           return null;
//                         }

//                         const quantity =
//                           Number(item.quantity) || 1;

//                         const price =
//                           Number(product.price) || 0;

//                         const productTotal =
//                           price * quantity;

//                         return (

//                           <div
//                             className="ordered-product"
//                             key={`${product.id}-${productIndex}`}
//                           >

//                             {/* =====================
//                                 IMAGE
//                             ====================== */}
//                             <div className="product-image">

//                               <img
//                                 src={product.image}
//                                 alt={product.title}
//                               />

//                             </div>

//                             {/* =====================
//                                 PRODUCT INFO
//                             ====================== */}
//                             <div className="product-info">

//                               <h4>
//                                 {product.title}
//                               </h4>

//                               <p>
//                                 Quantity: {quantity}
//                               </p>

//                               <strong>
//                                 ₹{price}
//                               </strong>

//                             </div>

//                             {/* =====================
//                                 PRODUCT TOTAL
//                             ====================== */}
//                             <div className="product-total">

//                               <span>
//                                 Total
//                               </span>

//                               <strong>
//                                 ₹{productTotal}
//                               </strong>

//                             </div>

//                             {/* =====================
//                                 DELETE PRODUCT
//                             ====================== */}
//                             <button
//                               type="button"
//                               className="delete-product-btn"
//                               onClick={() =>
//                                 deleteProduct(
//                                   orderIndex,
//                                   productIndex
//                                 )
//                               }
//                             >

//                               <FaTrash />

//                               <span>
//                                 Delete
//                               </span>

//                             </button>

//                           </div>

//                         );
//                       }
//                     )}

//                   </div>

//                 ) : (

//                   <div className="empty-order">
//                     No products found in this order.
//                   </div>

//                 )}

//                 {/* =========================
//                     ORDER FOOTER
//                 ========================== */}
//                 <div className="order-bottom">

//                   <div className="total-section">

//                     <span className="total-label">
//                       Order Total
//                     </span>

//                     <strong className="order-total">
//                       ₹{totalAmount}
//                     </strong>

//                   </div>

//                   {/* BUTTONS */}
//                   <div className="order-actions">

//                     {/* DELETE ORDER */}
//                     <button
//                       type="button"
//                       className="delete-order-btn"
//                       onClick={() =>
//                         deleteOrder(orderIndex)
//                       }
//                     >

//                       <FaTrash />

//                       Delete Order

//                     </button>

//                     {/* SHOP MORE */}
//                     <button
//                       type="button"
//                       className="shop-more-btn"
//                       onClick={() =>
//                         navigate("/products")
//                       }
//                     >

//                       <FaShoppingBag />

//                       Shop More

//                     </button>

//                   </div>

//                 </div>

//               </div>

//             );
//           })}

//         </div>

//       ) : (

//         /* =========================
//            EMPTY STATE
//         ========================== */

//         <div className="no-orders">

//           <div className="empty-icon">
//             <FaBoxOpen />
//           </div>

//           <h2>
//             No Orders Yet
//           </h2>

//           <p>
//             You haven't placed any orders yet.
//             Start shopping and your orders will
//             appear here.
//           </p>

//           <button
//             type="button"
//             onClick={() =>
//               navigate("/products")
//             }
//           >

//             <FaShoppingBag />

//             Start Shopping

//           </button>

//         </div>

//       )}

//     </div>
//   );
// }

// export default Orders;



import {
  FaBoxOpen,
  FaShoppingBag,
  FaTrash,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Orders.css";

function Orders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  // LOAD ORDERS
  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  }, []);

  // DELETE COMPLETE ORDER
  const deleteOrder = (orderIndex) => {
    const updatedOrders = orders.filter(
      (_, index) => index !== orderIndex
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);
  };

  // DELETE PRODUCT
  const deleteProduct = (
    orderIndex,
    productIndex
  ) => {
    const updatedOrders = orders
      .map((order, index) => {
        if (index !== orderIndex) {
          return order;
        }

        const updatedItems = (
          order.items || []
        ).filter(
          (_, index) => index !== productIndex
        );

        return {
          ...order,
          items: updatedItems,
        };
      })
      .filter(
        (order) =>
          order.items &&
          order.items.length > 0
      );

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);
  };

  return (
    <div className="orders-page">

      {/* HEADER */}
      <div className="orders-header">

        <div>
          <h1>My Orders</h1>

          <p className="orders-subtitle">
            Track and manage your purchased products.
          </p>
        </div>

        {orders.length > 0 && (
          <div className="orders-count">
            {orders.length}{" "}
            {orders.length === 1
              ? "Order"
              : "Orders"}
          </div>
        )}

      </div>

      {/* ORDERS */}
      {orders.length > 0 ? (

        <div className="orders-list">

          {orders.map(
            (order, orderIndex) => {

              const items = Array.isArray(
                order.items
              )
                ? order.items
                : [];

              // TOTAL ITEMS
              const totalItems =
                items.reduce(
                  (total, item) =>
                    total +
                    (Number(
                      item.quantity
                    ) || 1),
                  0
                );

              // TOTAL PRICE
              const totalAmount =
                items.reduce(
                  (total, item) => {

                    const price =
                      Number(
                        item.price
                      ) || 0;

                    const quantity =
                      Number(
                        item.quantity
                      ) || 1;

                    return (
                      total +
                      price * quantity
                    );
                  },
                  0
                );

              return (
                <div
                  className="order-card"
                  key={
                    order.id ||
                    orderIndex
                  }
                >

                  {/* ORDER HEADER */}
                  <div className="order-top">

                    <div className="order-details">

                      <h3>
                        Order #
                        {orderIndex + 1}
                      </h3>

                      <div className="order-meta">

                        <span>
                          <FaCalendarAlt />

                          {order.date}
                        </span>

                        <span>
                          {totalItems}{" "}
                          {totalItems === 1
                            ? "Item"
                            : "Items"}
                        </span>

                      </div>

                    </div>

                    <div className="order-status">

                      <FaCheckCircle />

                      Ordered

                    </div>

                  </div>

                  {/* PRODUCTS */}
                  {items.length > 0 ? (

                    <div className="order-products">

                      {items.map(
                        (
                          item,
                          productIndex
                        ) => {

                          const price =
                            Number(
                              item.price
                            ) || 0;

                          const quantity =
                            Number(
                              item.quantity
                            ) || 1;

                          const productTotal =
                            price *
                            quantity;

                          return (
                            <div
                              className="ordered-product"
                              key={`${item.id}-${productIndex}`}
                            >

                              {/* IMAGE */}
                              <div className="product-image">

                                <img
                                  src={
                                    item.image
                                  }
                                  alt={
                                    item.title
                                  }
                                />

                              </div>

                              {/* PRODUCT INFO */}
                              <div className="product-info">

                                <h4>
                                  {item.title}
                                </h4>

                                <p>
                                  Quantity:{" "}
                                  {quantity}
                                </p>

                                <strong>
                                  ₹{price}
                                </strong>

                              </div>

                              {/* PRODUCT TOTAL */}
                              <div className="product-total">

                                <span>
                                  Total
                                </span>

                                <strong>
                                  ₹
                                  {
                                    productTotal
                                  }
                                </strong>

                              </div>

                              {/* DELETE */}
                              <button
                                type="button"
                                className="delete-product-btn"
                                onClick={() =>
                                  deleteProduct(
                                    orderIndex,
                                    productIndex
                                  )
                                }
                              >

                                <FaTrash />

                                <span>
                                  Delete
                                </span>

                              </button>

                            </div>
                          );
                        }
                      )}

                    </div>

                  ) : (

                    <div className="empty-order">
                      No products found in this order.
                    </div>

                  )}

                  {/* FOOTER */}
                  <div className="order-bottom">

                    <div className="total-section">

                      <span className="total-label">
                        Order Total
                      </span>

                      <strong className="order-total">
                        ₹{totalAmount}
                      </strong>

                    </div>

                    <div className="order-actions">

                      <button
                        type="button"
                        className="delete-order-btn"
                        onClick={() =>
                          deleteOrder(
                            orderIndex
                          )
                        }
                      >
                        <FaTrash />

                        Delete Order
                      </button>

                      <button
                        type="button"
                        className="shop-more-btn"
                        onClick={() =>
                          navigate(
                            "/products"
                          )
                        }
                      >
                        <FaShoppingBag />

                        Shop More
                      </button>

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </div>

      ) : (

        <div className="no-orders">

          <div className="empty-icon">
            <FaBoxOpen />
          </div>

          <h2>No Orders Yet</h2>

          <p>
            You haven't placed any orders yet.
            Start shopping and your orders will
            appear here.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/products")
            }
          >
            <FaShoppingBag />

            Start Shopping
          </button>

        </div>

      )}

    </div>
  );
}

export default Orders;