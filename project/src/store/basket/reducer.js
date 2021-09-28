import {GET_BASKET_START, GET_BASKET_SUCCESS, GET_BASKET_ERROR, DELETE_PRODUCT, ADD_PRODUCT} from "./types";


//2. Создадим тут объект, а у него будет свойство count = 0
//это значение приравниваем к state
const initialState = {
    basketProducts: [],
    basketPending:false,
    basketError:null,
    totalSumm:0,
    counter:0,
}

//1. создадим редюссер - чистая функция,
// которая вычисляет наше следующее состояние.
export const basketReducer = (state = initialState, action) => {
    //мы посмотрим что action у нас пришел с типом
    switch(action.type){
        case DELETE_PRODUCT://если этот тип
            return (state.basketProducts.find(el => el.id_product == action.payload.id_product).count>1)? {
                basketProducts:state.basketProducts.map(product => {
                    return (product.id_product === action.payload.id_product) ?
                        {
                            ...product,
                            count: product.count-=1,
                            finishprice: product.price *= product.count
                        }
                        : product
                }),
                totalSumm: state.totalSumm - action.payload.price,
                counter: state.counter - 1,
            } : {
                ...state,
                basketProducts: state.basketProducts.filter((product) => product.id_product !== action.payload.id_product),
                totalSumm: state.totalSumm - action.payload.price,
                counter: state.counter - 1,
            }

        case ADD_PRODUCT://если этот тип
            return (state.basketProducts.find(el => el.id_product == action.payload.id_product)) ? {
                basketProducts:state.basketProducts.map(product => {
                        return (product.id_product === action.payload.id_product) ?
                            {
                                ...product,
                                count: product.count+=1,
                                finishprice: product.price *= product.count
                            }
                            : product
                    }),
                totalSumm: state.totalSumm + action.payload.price,
                counter: state.counter + 1,
            } : {
                ...state,
                basketProducts: [...state.basketProducts, {
                    id_product: action.payload.id_product,
                    title:action.payload.title,
                    price:action.payload.price,
                    count:1,
                    finishprice:action.payload.price,

                }],
                totalSumm: state.totalSumm + action.payload.price,
                counter: state.counter + 1,
            }
        default://по умолчанию если у нас нету такого типа
            return state //мы вернем state
    }


};
