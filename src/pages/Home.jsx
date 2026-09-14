import { Link } from "react-router-dom";
import products from "../data/products";
import "./Home.css";

import {
  FaShoppingBag,
  FaPumpSoap,
  FaCut,
  FaPalette,
  FaFire
} from "react-icons/fa";

import { GiFlowerPot, GiLipstick } from "react-icons/gi";
function Home() {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div>
          <p className="beauty-title">
              <GiLipstick /> BEAUTY & CARE
          </p>
          <h1>Look Good. Feel Good.</h1>
          <p>Shop your favourite beauty products at amazing prices.</p>

          <Link to="/products" className="shop-btn">
            Shop Now <FaShoppingBag />
          </Link>
        </div>

      </section>

      {/* Categories */}
      <h2>Shop By Category</h2>

      <div className="categories">

  <div>
    <FaPumpSoap />
    <br />
    Skin Care
  </div>

  <div>
    <FaCut />
    <br />
    Hair Care
  </div>

  <div>
    <FaPalette />
    <br />
    Makeup
  </div>

  <div>
    <GiFlowerPot />
    <br />
    Body Care
  </div>

</div>


      {/* Deals */}
      <h2><FaFire />
       Best Deals
      </h2>

      
      <div className="deals">
        {products.slice(0, 4).map((product) => (
          <div className="deal" key={product.id}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p>
              <del>₹{product.price}</del>{" "}
              <b>
                ₹
                {(
                  product.price -
                  (product.price * product.discount) / 100
                ).toFixed(0)}
              </b>
            </p>

            <span>{product.discount}% OFF</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;