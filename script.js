"use strict";
//Массив со списком товаров. Для каждого товара определим название и цену:
const goods = [
    { img: "img/платье.png",title: 'Платье', price: 1900 },
    { img: "img/штаны.png", title: 'Штаны', price: 1500 },
    { img: "img/юбка.png", title: 'Юбка', price: 1000 },
    { img: "img/флиска.png", title: 'Флисовая кофта', price: 2000 },
    { img: "img/футболка.png", title: 'Футболка', price: 600 },
    { img: "img/шорты.png", title: 'Шорты', price: 800 },
    { img: "img/кепка.png", title: 'Кепка', price: 500 },
    { img: "img/кроссовки.png" , title: 'Кроссовки', price: 3200 },

];

//Функция, которая будет возвращать разметку для конкретного товара, подставляя его название и цену.

const renderGoodsItem = (img="img/standart.jpg", title="товар на изображении", price) => {
    return `
        <div class="catalog_cart">
            <img class="catalog_cart_img" src=${img} width="250" height="270" alt="photo">
            <h3 class="catalog_cart_title">${title}</h3>
            <span class="catalog_cart_price"><span>${price}</span>рублей</span>
            <button class="catalog_cart_button">Добавить в корзину</button>
        </div>
  `;
};

//Функция, которая будет собирать все товары в один и записывать его в контейнер .catalog:
const renderGoodsList = list => {
    document.querySelector('.catalog').innerHTML = list.map(item => renderGoodsItem(item.img, item.title, item.price)).join("");//а затем вставляться в блок с классом main-products
}

renderGoodsList(goods);//так мы вызываем вышестоящую функцию