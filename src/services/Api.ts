import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export class Api {

    static baseUrl = `https://backendapi.turing.com/`;

    static getProducts(pageNo = 1, limit = 20) {
        return ajax.get(Api.baseUrl + `products?page=${pageNo}&limit=${limit}`).pipe(
            map(res => res.response)
        )
    }
    static getProductsByCategory(category_id: number, pageNo = 1, limit = 20, descriptionLength = 120) {
        return ajax.get(Api.baseUrl + `products/inCategory/${category_id}?page=${pageNo}&limit=${limit}&description_length=${descriptionLength}`).pipe(
            map(res => res.response)
        )
    }
    static getProductsByDepartment(department_id: number, pageNo = 1, limit = 20, descriptionLength = 120) {
        return ajax.get(Api.baseUrl + `products/inDepartment/${department_id}?page=${pageNo}&limit=${limit}&description_length=${descriptionLength}`).pipe(
            map(res => res.response)
        )
    }
    static getProductDetails(product_id: number) {
        return ajax.get(Api.baseUrl + `products/${product_id}/details`).pipe(
            map(res => res.response)
        )
    }
    static getProductReviews(product_id: number) {
        return ajax.get(Api.baseUrl + `products/${product_id}/reviews`).pipe(
            map(res => res.response)
        )
    }
    static AddProductReview(product_id: number, review: string, rating: number, token: string) {
        return ajax.post(Api.baseUrl + `products/${product_id}/reviews`, { review, rating }, { 'user-key': token }).pipe(
            map(res => res.response)
        )
    }

    static getAttributes(productid: number) {
        return ajax.get(Api.baseUrl + `attributes/inProduct/${productid}`).pipe(
            map(res => res.response)
        )
    }

    static searchProducts(pageNo = 1, limit = 20, searchText: string) {
        return searchText ?
            ajax.get(Api.baseUrl + `products/search?page=${pageNo}&limit=${limit}&query_string=${searchText}`).pipe(
                map(res => res.response)
            ) :
            Api.getProducts(pageNo, limit)
    }

    static register(data: any) {
        return ajax.post(Api.baseUrl + `customers`, data).pipe(
            map(res => res.response),
            map(data => ({ accessToken: data.accessToken, expires_in: data.expires_in, user: data.customer }))
        )
    }

    static login(data: any) {
        return ajax.post(Api.baseUrl + `customers/login`, data).pipe(
            map(res => res.response)
        )
    }

    static getCartId() {
        return ajax.get(Api.baseUrl + `shoppingcart/generateUniqueId`).pipe(
            map(res => res.response)
        )
    }

    static addToCart(data: any) {
        return ajax.post(Api.baseUrl + `shoppingcart/add`, data).pipe(
            map(res => res.response)
        )
    }
    static updateCartItem(data: any) {
        return ajax.put(Api.baseUrl + `shoppingcart/update/${data.item_id}`, data).pipe(
            map(res => res.response)
        )
    }
    static removeCartItem(id: number) {
        return ajax.delete(Api.baseUrl + `shoppingcart/removeProduct/${id}`).pipe(
            map(res => res.response)
        )
    }

    static getCartItems(cartId: number) {
        return ajax.get(Api.baseUrl + `shoppingcart/${cartId}`).pipe(
            map(res => res.response)
        )
    }

    static makeOrders(data: any, token: string) {
        return ajax.post(Api.baseUrl + `orders`, data, { 'user-key': token }).pipe(
            map(res => res.response)
        )
    }
    static makeCharge(data: any, token: string) {
        return ajax.post(Api.baseUrl + `stripe/charge`, data, { 'user-key': token }).pipe(
            map(res => res.response)
        )
    }
    static updateCustomerAddress(data: any, token: string) {
        return ajax.put(Api.baseUrl + `customers/address`, data, { 'user-key': token }).pipe(
            map(res => res.response)
        )
    }
    static getDepartments() {
        return ajax.get(Api.baseUrl + `departments`).pipe(
            map(res => res.response)
        )
    }
    static getCategories() {
        return ajax.get(Api.baseUrl + `categories`).pipe(
            map(res => res.response)
        )
    }
    static getCategoriesByDepartment(departmentId: number) {
        return ajax.get(Api.baseUrl + `categories/inDepartment/${departmentId}`).pipe(
            map(res => res.response)
        )
    }
}