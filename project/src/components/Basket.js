import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BasketItem } from "./BasketItem";

export const Basket = () => {
  const [cartItems] = useState([]);
  const [totalSum] = useState(0);
  return (
    <div className="basket">
      <h3 className="basket_title">Ваша корзина</h3>
      <div className="basket_parametrs">
        <span className="basket_part">Название товара</span>
        <span className="basket_part">Количество</span>
        <span className="basket_part">Цена за шт.</span>
        <span className="basket_part">Итого</span>
        <span className="basket_part"></span>
      </div>
      <Link to="/">
        <i className="far fa-times-circle closeBtn"></i>
      </Link>

      {cartItems.map((cartItem, id) => {
        return <BasketItem key={id} {...cartItem} />;
      })}

      <div className="cart_summ">
        <span>
          Товаров в корзине на сумму:<span className="basket_summ"> {totalSum} </span> рублей
        </span>
      </div>
    </div>
  );
};
