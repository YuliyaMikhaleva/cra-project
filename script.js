"use strict";
//Создадим класс GoodsItem для товара, чтобы на его основе создавать другие однотипные товары
class GoodsItem {
    constructor(img, title, price) {
        this.img = img;
        this.title = title;
        this.price = price;
    }
    render(){
        return `
        <div class="catalog_cart">
            <img class="catalog_cart_img" src=${this.img} width="250" height="270" alt="photo">
            <h3 class="catalog_cart_title">${this.title}</h3>
            <span class="catalog_cart_price"><span>${this.price}</span>рублей</span>
            <button class="catalog_cart_button">Добавить в корзину</button>
        </div>
        `
    }
}

//теперь создадим второй класс GoodsList. В качестве свойства ему добавим массив со списком товаров,
// изначально сделаем его пустым
//теперь создадидим второй класс GoodsList. В качестве свойства ему добавим массив со списком товаров,
// изначально сделаем его пустым
class GoodsList {
    constructor() {
        this.goods = [];//пустой массив товаров
    }
    fetchGoods() {//метод для заполнения этого списка товаров
        this.goods = [
            {img: "img/платье.png", title: 'Платье', price: 1900},
            {img: "img/штаны.png", title: 'Штаны', price: 1500},
            {img: "img/юбка.png", title: 'Юбка', price: 1000},
            {img: "img/флиска.png", title: 'Флисовая кофта', price: 2000},
            {img: "img/футболка.png", title: 'Футболка', price: 600},
            {img: "img/шорты.png", title: 'Шорты', price: 800},
            {img: "img/кепка.png", title: 'Кепка', price: 500},
            {img: "img/кроссовки.png", title: 'Кроссовки', price: 3200},
        ];
    }

    //Метод для вывода списка товаров на страницу. Для каждого элемента массива goods будем создавать экземпляр класса GoodsItem и запрашивать его разметку
    render() {
        let listHtml = " ";//создаем пустую строку
        this.goods.forEach(good => {//перебираем товары и для каждого товара создаем на оснвое класса GoodsItem создаем goodItem
            const goodItem = new GoodsItem(good.img, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.catalog').innerHTML = listHtml;
    }
}

const list = new GoodsList(); //создаем список на основе класса GoodsList
list.fetchGoods(); //вызываем метод заполнения товаров
list.render();//отрисовываем

//Добавим пустой класс для корзины товаров
class Basket {
    constructor() {
        this.BasketProducts = [];
    }
    renderNewProduct(){}//отрисовывание в корзине нового продукта в количестве 1 шт
    calculateSum(){}//Подсчитать итоговую сумму выбранных товаров для оплаты
    increaseProductsCount(){}//если данный товар уже добавлен, увеличить количество повторного товара
    recalculateSumOfProducts(){}//подсчет суммы за вид товара за указанное количество
    clearBasket(){}//очистить корзину
}

//Добавим пустой класс для элемента корзины товаров
class BasketProduct{
    constructor() {

    }
    render(){}  //отобразить элемент на странице
}

let buttonOpenBusket = document.querySelector('.header_menu_el_basket');
let basket = document.querySelector('.basket');

buttonOpenBusket.addEventListener('click', () => {
    basket.classList.toggle('hidden')
})
