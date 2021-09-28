import {get_products_start, get_products_success, get_products_error} from "./actions";

const API = "https://raw.githubusercontent.com/YuliyaMikhaleva/clothing_store_api/master/response/catalogData.json";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch(get_products_start())
        const response = await fetch(API)
        const result = await response.json()
        dispatch(get_products_success(result))
        console.log(result)
    } catch (e) {
        dispatch(get_products_error(e))
    }

}