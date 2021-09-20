"use strict";
//у нас есть API(путь к нашему ресурсу в интернете), из которого мы будем брать товары
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


//Создадим класс GoodsItem для товара, чтобы на его основе создавать другие однотипные товары
class GoodsItem {
    constructor(id_product, img, title, price) {
        this.id_product = id_product
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
            <button class="catalog_cart_button" data-productId="${this.id_product}">Добавить в корзину</button>
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
        fetch('https://raw.githubusercontent.com/YuliyaMikhaleva/clothing_store_api/master/response/catalogData.json')
            //метод fetch Всегда возвращает промис, поэтому после него настраиваем обработчики событий
            // (в случае успешного выполнения выполняется then, в случае ошибки - catch)
            .then((response) => {
                return response.json();//ищем данные в формате json
            })
            .then((data) => {
                // console.log(data);
                this.goods = [...data]; //распаковываем наш объект и записываем в массив товаров
                this.render();//отрисовываем на странице
                this.calculateSum();//считаем сумму товаров на странице
            })
            .catch(error => {//в случае ошибки в консоли выведется ошибка
                console.log(error);//выводим ошибку в консоль
            })

        // this.goods = [
        //     {id_product:1, img: "img/платье.png", title: 'Платье', price: 1900},
        //     {id_product:2, img: "img/штаны.png", title: 'Штаны', price: 1500},
        //     {id_product:3, img: "img/юбка.png", title: 'Юбка', price: 1000},
        //     {id_product:4, img: "img/флиска.png", title: 'Флисовая кофта', price: 2000},
        //     {id_product:5, img: "img/футболка.png", title: 'Футболка', price: 600},
        //     {id_product:6, img: "img/шорты.png", title: 'Шорты', price: 800},
        //     {id_product:7, img: "img/кепка.png", title: 'Кепка', price: 500},
        //     {id_product:8, img: "img/кроссовки.png", title: 'Кроссовки', price: 3200},
        // ];
    }
    calculateSum(){
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {//Если цена известна
                totalPrice += good.price;//то добавляем ее к итоговой сумме
            }
        })
        let totalAnswer = "Всего товаров на сумму " + totalPrice + " рублей";
        document.querySelector('.totalSumOnPage').innerHTML = totalAnswer;
        this.init();
    }

    //Метод для вывода списка товаров на страницу. Для каждого элемента массива goods будем создавать экземпляр класса GoodsItem и запрашивать его разметку
    render() {
        let listHtml = " ";//создаем пустую строку
        this.goods.forEach(good => {//перебираем товары и для каждого товара создаем на оснвое класса GoodsItem создаем goodItem
            const goodItem = new GoodsItem(good.id_product, good.img, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.catalog').innerHTML = listHtml;
    }

    init(){
        //перебираем все кнопки с атрибутом productId и каждой из них по нажатию кнопки назначаем метод addToCart
        document.querySelectorAll('button[data-productId]').forEach(function (button) {
            button.addEventListener('click', function (event) {
                basket.addToBasket(event);
            })
        });
    }
}

// Класс ЭЛЕМЕНТ КОРЗИНЫ (шаблон)
class BasketItem {
    constructor(id_product, title, price, img = "img/standart.jpg", ) {
        this.id_product = id_product; //id товара
        this.title = title; //название товара
        this.price = price; //цена товара
        this.img = img; //изображение товара
    }
    render(){
        return `
            <div class="basket_item"id="${this.id_product}" >
                <span class="basket_part">${this.title}</span>
                <span class="basket_part"><span id="${this.id_product}"class="product_number">1</span> шт.</span>
                <span class="basket_part"><span id="${this.id_product}"  class="product_price">${this.price}</span> руб.</span>
                <span class="basket_part"><span class = "summOfRow" id="${this.id_product}"  class="product_price">${this.price}</span> руб.</span>
                <button class="basket_item_delete" id="${this.id_product}" data-productId="${this.id_product}">Удалить товар</button>
            </div>
        `;
    }
}

//Добавим пустой класс для корзины товаров
class Basket{
    constructor() {
        this.basketGoods = []; //пустой массив товаров корзины:здесь будет храниться количество каждого товара и цены
    }

    /**
     * Открыть/скрыть корзину на странице
     */
    init(){
        let buttonOpenBasket = document.querySelector('.header_menu_el_basket');
        let basket = document.querySelector('.basket');
        buttonOpenBasket.addEventListener('click', () => {
            basket.classList.toggle('hidden')
        })
    }

    /**
     * Добавить товар в корзину
     * @param event
     */
    addToBasket(event){
        let productId = event.currentTarget.getAttribute('data-productId');//Значение атрибута у элемента по которому мы кликнули
        this.changeOfCounter();//увеличим счетчик товаров в корзине на 1
        this.changeButtonStyle(event);//изменить стиль кнопки
        this.addInObject(productId);//добавляем конкретный товар в объект корзины
        this.renderProductsInCard(productId);//отрисовываем объект корзины в виде списка с количеством, ценами и окончательной стоимостью
        this.calculateTotalSumm();//подсчитывает суммарную стоимость товаров в корзине
    }

    //увеличение счетчика товаров корзина на 1 (справа вверху)
    changeOfCounter() {
        let counter = document.querySelector('.counter'); //объект счетчика товаров в верхнем правом углу
        counter.textContent++;
    }
    //изменение стиля кнопки
    changeButtonStyle(event){//принимает событие
        event.target.style.backgroundColor = "green";//на элемент, который нажали, применяется новый стиль
        event.target.textContent = "Товар добавлен, добавить ещё?";//и новый текст
    }

    addInObject(productId){
        let basketCart; //создаем объект basketCart
        list.goods.forEach(function (item) {//перебираем массив товаров каталога и для каждого товара применяем функцию
            if(productId == item.id_product){//если id товара, по которому мы нажали, и id товара каталога в цикле совпадет
                basketCart = { //записываем в объект данный товар со всеми свойствами ниже
                    id_product: item.id_product,
                    img: item.img,
                    title: item.title,
                    price: item.price
                }
            }
        });
        this.basketGoods.push(basketCart);//добавляем в массив корзины этот объект товара
        console.log(this.basketGoods);//выводим в консоль объект корзины товаров
    }

    //отрисовывание корзины на странице
    renderProductsInCard(productId){//в параметре указываем id товара, чтобы знать, что отрисовывать
        //ищем элемент на странице, отвечающий за количество товара с этим id
        let renderProduct = document.querySelector(`.product_number[id = "${productId}"]`);
        if (renderProduct){//если количество не равно 0
            this.increaseProductsCount(productId);//увеличиваем количество товара с этим id в корзине
            this.recalculateCartSum(productId);//пересчитываем сумму всех товаров этого вида, с этим id в корзине
        } else {
            this.render();//отрисовываем его на странице
        }
    }

    //увеличивание количества товара с выбранным id на 1
    increaseProductsCount(productId){
        let productsCount = document.querySelector(`.product_number[id = "${productId}"]`);
        productsCount.textContent++;
    }

    //пересчитывание суммы за товар с выбранным id
    recalculateCartSum(productId){
        let sumOfKind = document.querySelector(`.summOfRow[id = "${productId}"]`);
        let productsCount = document.querySelector(`.product_number[id = "${productId}"]`);
        let productPrice = document.querySelector(`.product_price[id = "${productId}"]`);
        let sum = productsCount.textContent * productPrice.textContent;
        sumOfKind.textContent = sum;
    }
    //удаление товара с выбранным id
    deleteProduct(productId){
        this.changeNumber();//уменьшить счетчик товаров корзины на 1
        this.deleteFromObject(productId);//удаляем товар из объекта
        this.renderProductsInCardAfterDelete(productId);//отрисовываем объект после удаления
    }

    //уменьшение счетчика товаров корзины на 1
    changeNumber(){
        let counter = document.querySelector('.counter'); //объект счетчика товаров в верхнем правом углу
        if (+counter.textContent > 0){ //если значение счетчика >0
            counter.textContent--;// то уменьшаем значение на 1
        } else {
            counter.textContent = "0";//иначе значение равно 0
        }
    }

    //удаление товара из объекта с выбранным id
    deleteFromObject(productId) {
        let basketDelete;//создаем новую переменную
        //перебираем массив корзины. и к каждому элементу корзины применяем функцию (на
        this.basketGoods.forEach(function (item, i) {//2 параметра: элемент корзины и число
            let thisId = item.id_product; //создаем новую переменную = это значение id у элемента
            if (productId == thisId){// если выбранное id(на которое мы нажали) равно id элемента корзины
                basketDelete = i;//новая переменная будет равна порядковому числу
            }
        });
        //удаляем из корзины товаров 1 товар c порядкового номера товара с выбранным id
        this.basketGoods.splice(basketDelete, 1);
        console.log(this.basketGoods);//выводим в консоль объект товаров
    }

    //отрисовывание объекта корзины после удаления товара
    renderProductsInCardAfterDelete(productId){
        //ищем элемент количество товара с выбранным id
        let renderProduct = document.querySelector(`.product_number[id = "${productId}"]`);
        if (renderProduct){// если количество товара с выбранным id не равно 0
            this.calculateTotalSumm();//подсчитываем суммарную стоимость товаров в корзине
            this.reduceProductsCount(productId);//уменьшаем количество товара с выбранным id
            this.recalculateCartSum(productId);//пересчитываем сумму за вид товара
        } else {
            this.render();//отрисовываем на странице
        }
    }

    //уменьшение количества товара с выбранным id
    reduceProductsCount(productId){
        let productsCount = document.querySelector(`.product_number[id = "${productId}"]`);
        productsCount.textContent--;
        if (productsCount.textContent == "0"){//если количество товаров с выбранным id = 0
            this.clearItem(productId);//очистить блок того товара, где количество = 0
        }
    }

    //удаление элементов с выбранным id в корзине
    clearItem(productId){
        let basketHtml = ""; // объявляем basketHTML как пустую строку
        let basketItem = document.querySelector(`.basket-item[id = "${productId}"]`);
        basketItem.innerHTML = basketHtml;
    }

    //подсчет итоговой суммы всех товаров
    calculateTotalSumm(){
        let totalSumm = 0; //изначально сумма = 0
        this.basketGoods.forEach((basket) =>{//перебираем корзину товаров
            totalSumm += basket.price;//и для каждого элемента добавляем к сумме цену
        })
        let basketSumm = document.querySelector('.basket_summ');
        basketSumm.textContent = totalSumm; //записываем итоговую сумму в блоке с классом "basket_summ"
    }

    //вывод всех товаров в корзине
    render(){
        let basketHtml = ""; // объявляем basketHTML как пустую строку
        this.basketGoods.forEach((basket) => {//перебираем весь массив наших товаров в корзине и для каждого товара
            //создаем goodItem на основе класса GoodsItem: то есть у каждого элемента будет id,название, цена, изображение
            let basketElement = new BasketItem(basket.id_product, basket.title, basket.price, basket.img)
            basketHtml = basketElement.render();//отрисованный каждый товар добавляем в basketHtml
        });

        // вставляем полученный массив в блок с классом newProducts
        document.querySelector('.newProducts').insertAdjacentHTML('afterbegin', basketHtml);

        // назначение обработчика события клика по кнопке "удалить товар"
        document.querySelectorAll('.basket_item_delete').forEach(function (button) {
            button.addEventListener('click', function (event) {
                let productId = event.currentTarget.getAttribute('data-productId')
                basket.deleteProduct(productId); //удалить товар
            })
        })
    }
}


const list = new GoodsList();  //создаем каталог товаров на основе класса GoodsList. Здесь же подсчитывается сумма всех товаров
list.fetchGoods(); //вызываем метод заполнения товаров
list.render();//отрисовываем каталог на странице
list.calculateSum(); //считаем сумму всех товаров каталога

const basket = new Basket();//создаем корзину товаров на основе класса Basket.
basket.init();//показать корзину или скрыть корзину

