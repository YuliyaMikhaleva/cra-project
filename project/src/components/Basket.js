import "./style.css";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { BasketItem } from "./BasketItem";

export const Basket = () => {
    const {basketProducts, basketPending, basketError, totalSumm, counter} = useSelector((state => state.basket))
    console.log(basketProducts)
    console.log(basketPending)
    console.log(basketError)
    console.log(totalSumm)


    if (basketPending){
        return <h1>pending...</h1>
    }
    if (basketError){
        return <h1>ooooppss...</h1>
    }

  // const [cartItems] = useState([]);
  // const [totalSum] = useState(0);
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

      {basketProducts.map((cartItem, id) => {
        return <BasketItem key={id} {...cartItem} />;
      })}

        {counter<1 ? <p>Корзина пока пуста...</p> : <div></div>}

      <div className="cart_summ">
        <span>
          Товаров в корзине на сумму:<span className="basket_summ"> {totalSumm} </span> рублей
        </span>
      </div>
    </div>
  );
};
