import "./style.css";
import { useEffect, useState } from "react";
import { Product } from "./Product";

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/YuliyaMikhaleva/clothing_store_api/master/response/catalogData.json",
    )
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);
  console.log(products);
  return (
    <div className="catalog container">
      {products.map((product, id) => {
        return <Product key={id} {...product} />;
      })}
    </div>
  );
}
