import {useDispatch, useSelector} from "react-redux";
import {add_product} from "../store/basket/actions";

export const Product = ({id_product,img, title, price }) => {
    const cartItems = useSelector(state => state.basket.basketProducts)
    console.log(cartItems)
    const dispatch = useDispatch()
    return (
        <div className="catalog_cart">
            <img className="catalog_cart_img" src={img} width="250" height="270" alt="product"/>
            <h3 className="catalog_cart_title">{title}</h3>
            <span className="catalog_cart_price">{price}</span>
            <button className="catalog_cart_button" id={id_product} onClick={() => dispatch(add_product({id_product, img, title, price}))}>Добавить в корзину</button>
        </div>
    )
}