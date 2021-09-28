import {GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR} from "./types";
//action = { type: string, payload: нагрузка - любое значение}
//action creator

//эта функция - это action creator.
//объект, который возвращает эта функция - это наш action
export const get_products_start = () => ({type: GET_PRODUCTS_START})
export const get_products_success = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload:products
})
export const get_products_error = (error) => ({
    type: GET_PRODUCTS_ERROR,
    payload: error
})