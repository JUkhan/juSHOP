import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export class Api {

    static baseUrl = `https://backendapi.turing.com/`;

    static getProducts(pageNo = 1, limit = 20) {
        return ajax.get(Api.baseUrl + `products?page=${pageNo}&limit=${limit}`).pipe(
            map(res => res.response)
        )
    }
    static getAttributes(productid) {
        return ajax.get(Api.baseUrl + `attributes/inProduct/${productid}`).pipe(
            map(res => res.response)
        )
    }

    static searchProducts(pageNo = 1, limit = 20, searchText) {
        return searchText ?
            ajax.get(Api.baseUrl + `products/search?page=${pageNo}&limit=${limit}&query_string=${searchText}`).pipe(
                map(res => res.response)
            ) :
            Api.getProducts(pageNo, limit)
    }

    static register(data) {
        return ajax.post(Api.baseUrl + `customers`, data).pipe(
            map(res => res.response),
            map(data => ({ accessToken: data.accessToken, expires_in: data.expires_in, user: data.customer }))
        )
    }

    static login(data) {
        return ajax.post(Api.baseUrl + `customers/login`, data).pipe(
            map(res => res.response)
        )
    }

    static getCartId() {
        return ajax.get(Api.baseUrl + `shoppingcart/generateUniqueId`).pipe(
            map(res => res.response)
        )
    }

    static addToCart(data) {
        return ajax.post(Api.baseUrl + `shoppingcart/add`, data).pipe(
            map(res => res.response)
        )
    }
    static updateCartItem(data) {
        return ajax.put(Api.baseUrl + `shoppingcart/update/${data.item_id}`, data).pipe(
            map(res => res.response)
        )
    }
    static removeCartItem(id) {
        return ajax.delete(Api.baseUrl + `shoppingcart/removeProduct/${id}`).pipe(
            map(res => res.response)
        )
    }

    static getCartItems(cartId) {
        return ajax.get(Api.baseUrl + `shoppingcart/${cartId}`).pipe(
            map(res => res.response)
        )
    }

    static makeOrders(data, token) {
        return ajax.post(Api.baseUrl + `orders`, data, { 'user-key': token }).pipe(
            map(res => res.response)
        )
    }
    static makeCharge(data, token) {
        return ajax.post(Api.baseUrl + `stripe/charge`, data, { 'user-key': token }).pipe(
            map(res => res.response)
        )
    }
    static updateCustomerAddress(data, token) {
        return ajax.post(Api.baseUrl + `customers/address`, data, { 'user-key': token }).pipe(
            map(res => res.response)
        )
    }


}