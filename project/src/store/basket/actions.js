import {DELETE_PRODUCT, ADD_PRODUCT} from "./types";
//action = { type: string, payload: нагрузка - любое значение}
//action creator

//эта функция - это action creator.
//объект, который возвращает эта функция - это наш action


export const delete_product = ({id_product, title, price}) => ({
    type: DELETE_PRODUCT,
    payload:{id_product, title, price}
})

export const add_product = ({id_product, title, price}) => ({
    type: ADD_PRODUCT,
    payload: {id_product, title,price}
})