export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_block">
                <div className="footer_block_text">
                    <span><img src="/img/logo2.png" alt="logo2"/></span>
                    <span className="footer_block_text_txt"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit,
              at eleifend elit ornare ut.</span
                    >
                </div>
                <div className="footer_block_links">
                    <ul className="footer_block_list">
                        <span className="footer_block_title">Основные ссылки</span>
                        <li className="footer_block_list_el"><span>О компании</span></li>
                        <li className="footer_block_list_el"><span>Каталог</span></li>
                        <li className="footer_block_list_el"><span>Доставка</span></li>
                        <li className="footer_block_list_el"><span>Оплата</span></li>
                    </ul>
                    <ul className="footer_block_list">
                        <span className="footer_block_title">Категории</span>
                        <li className="footer_block_list_el"><span>Мужская одежда</span></li>
                        <li className="footer_block_list_el"><span>Женская одежда</span></li>
                        <li className="footer_block_list_el"><span>Детская одежда</span></li>
                        <li className="footer_block_list_el"><span>Для животных</span></li>
                    </ul>
                    <ul className="footer_block_list">
                        <span className="footer_block_title">Полезные ссылки</span>
                        <li className="footer_block_list_el"><span>Таблица размеров</span></li>
                        <li className="footer_block_list_el"><span>Блог о моде</span></li>
                        <li className="footer_block_list_el"><span>Наша миссия</span></li>
                    </ul>
                    <ul className="footer_block_list">
                        <span className="footer_block_title">Соц сети</span>
                        <li className="footer_block_list_el">
                            <span><i className="fab fa-vk footer_block_list_el_icon"></i> VK.com</span>
                        </li>
                        <li className="footer_block_list_el">
                            <span><i className="fab fa-facebook-square footer_block_list_el_icon"></i> Facebook</span>
                        </li>
                        <li className="footer_block_list_el">
                            <span><i className="fab fa-instagram footer_block_list_el_icon"></i> Instagram</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}