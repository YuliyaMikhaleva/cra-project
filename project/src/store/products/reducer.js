import {GET_PRODUCTS_ERROR, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS} from "./types";
//2. Создадим тут объект, а у него будет свойство count = 0
//это значение приравниваем к state
const initialState = {
    products: [],
    productsPending:false,
    productsError:null
}

//1. создадим редюссер - чистая функция,
// которая вычисляет наше следующее состояние.
export const productsReducer = (state = initialState, action) => {
    //мы посмотрим что action у нас пришел с типом
    switch(action.type){
        case GET_PRODUCTS_START://если этот тип  GET_PRODUCTS
            return {//мы что-то делаем со стоянием
                ...state,
                productsPending: true
            }
        case GET_PRODUCTS_SUCCESS://если этот тип  GET_PRODUCTS
            return {//мы что-то делаем со стоянием
                ...state,
                productsPending: false,
                products: action.payload
            }
        case GET_PRODUCTS_ERROR://если этот тип  GET_PRODUCTS
            return {//мы что-то делаем со стоянием
                ...state,
                productsPending: false,
                productsError: action.payload
            }
        default://по умолчанию если у нас нету такого типа
            return state //мы вернем state
    }


};
