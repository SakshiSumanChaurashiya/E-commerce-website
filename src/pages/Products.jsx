import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Products.css";

function Products() {
  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;