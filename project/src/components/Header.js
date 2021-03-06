import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
export const Header = () => {
  const {basketProducts, counter} = useSelector((state => state.basket))
  console.log(counter)
  console.log(basketProducts)
  return (
    <div className="header">
      <ul className="header_menu">
        <li className="header_menu_el">
          <span>Для мужчин</span>
        </li>

        <li className="header_menu_el">
          <span>Для женщин</span>
        </li>
        <li className="header_menu_el">
          <span>Для детей</span>
        </li>
        <li className="header_menu_el">
          <span>
            <img src="img/logo.png" alt="logo" />
          </span>
        </li>
        <li className="header_menu_el">
          <span>Оплата</span>
        </li>
        <li className="header_menu_el">
          <span>Доставка</span>
        </li>
        <li className="header_menu_el">
          <Link
            to="/basket"
            className="header_menu_el_basket"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <svg
              width="20"
              height="26"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="header_menu_el_basket_svg"
                d="M22.2936 10.4909L16.2385 1.40831C15.9632 1.13308 15.5505 0.857849 15.1376 0.857849C14.7248 0.857849 14.3119 0.995464 14.0367 1.40831L7.98165 10.4909H1.37615C0.550459 10.4909 0 11.0413 0 11.867C0 12.0046 0 12.1423 0 12.2799L3.44037 25.078C3.7156 26.179 4.81651 27.1423 6.05505 27.1423H23.945C25.1835 27.1423 26.2844 26.3166 26.5596 25.078L30 12.2799C30 12.1423 30 12.0046 30 11.867C30 11.0413 29.4495 10.4909 28.6239 10.4909H22.2936ZM11.0092 10.4909L15.1376 4.43583L19.2661 10.4909H11.0092ZM15.1376 21.5001C13.6239 21.5001 12.3853 20.2615 12.3853 18.7478C12.3853 17.234 13.6239 15.9955 15.1376 15.9955C16.6514 15.9955 17.8899 17.234 17.8899 18.7478C17.8899 20.2615 16.6514 21.5001 15.1376 21.5001Z"
                fill="black"
              />
            </svg>
            <span className="counter">{counter}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
