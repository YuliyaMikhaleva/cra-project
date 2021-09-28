import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import {basketReducer} from "./basket";
import { productsReducer } from "./products";//импортируем productsReducer


export const reducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
})
export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk)
    ),

)//создали наше хранилище и передаем в него productsReducer
