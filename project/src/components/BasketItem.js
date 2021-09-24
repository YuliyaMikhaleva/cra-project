export const BasketItem = ({ title, count, price, finishprice }) => {
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
        <button className="basket_item_delete">Удалить товар</button>
      </div>
    </div>
  );
};
