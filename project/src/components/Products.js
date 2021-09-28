import "./style.css";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../store/products/thunks";
import { Product } from "./Product";



export function Products() {
  const {products, productsPending, productsError} = useSelector((state => state.products))
  console.log(products)
  console.log(productsPending)
  console.log(productsError)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  if (productsPending){
    return <h1>pending...</h1>
  }
  if (productsError){
    return <h1>ooooppss...</h1>
  }
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/YuliyaMikhaleva/clothing_store_api/master/response/catalogData.json",
  //   )
  //     .then((response) => response.json())
  //     .then((products) => setProducts(products));
  // }, []);
  // console.log(products);
  return (
    <div className="catalog container">
      {products.map((product, id) => {
        return <Product key={id} {...product} />;
      })}
    </div>
  );
}
