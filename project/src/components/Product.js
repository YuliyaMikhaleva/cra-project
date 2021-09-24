export const Product = ({img, title, price }) => {
    return (
        <div className="catalog_cart">
            <img className="catalog_cart_img" src={img} width="250" height="270" alt="product"/>
            <h3 className="catalog_cart_title">{title}</h3>
            <span className="catalog_cart_price">{price}</span>
            <button className="catalog_cart_button">Добавить в корзину</button>
        </div>
    )
}