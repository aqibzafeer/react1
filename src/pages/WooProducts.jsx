import React, { useEffect, useState } from "react";
import axios from "axios";

const WooProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const consumerKey = "ck_de3055cdc8a6391dcc2269e34597d8a2c688e24d";
      const consumerSecret = "cs_f670cc1795bf5993d68d15285d7b7182ff9b8b3a";

      const response = await axios.get(
        "https://foods.darwazypy.com/wp-json/wc/v3/products",
        {
          auth: {
            username: consumerKey,
            password: consumerSecret,
          },
        }
      );

      setProducts(response.data);
    };

    fetchProducts();
    console.log(fetchProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul className="bg-gray-100 p-5 rounded-lg shadow-md text-gray-900 w-100">
        {products.map((product) => (
          <li key={product.id}>
            ID: {product.id} <br />
            Product Name: {product.name}
            <br />
            Category: {product.categories[0]?.name || "Uncategorized"}
            <br />
            Rs: {product.price}
            <br />
            <img
              src={product.images[0].src}
              alt={product.images[0].alt || "Product Image"}
            />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WooProducts;
