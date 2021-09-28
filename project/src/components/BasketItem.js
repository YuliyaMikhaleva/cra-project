import {useDispatch, useSelector} from "react-redux";
import {delete_product} from "../store/basket/actions";

export const BasketItem = ({ id_product, title, count=1, price, finishprice=price }) => {
  const cartItems = useSelector(state => state.basket.basketProducts)
  console.log(cartItems)
  const dispatch = useDispatch()
  return (
    <div className="newProducts">
      <div className="basket_item">
        <span className="basket_part">{title}</span>
        <span className="basket_part">
          <span className="product_number">{count}</span> шт.
        </span>
        <span className="basket_part">
          <span className="product_price">{price}</span> руб.
        </span>
        <span className="basket_part">
          <span className="summOfRow">{finishprice}</span>руб.
        </span>
        <button className="basket_item_delete" onClick={() => dispatch(delete_product({id_product, title, price}))}>Удалить товар</button>
      </div>
    </div>
  );
};
