import { of } from 'rxjs';
import { Api } from '../Api'

const _api = {
    getProducts(pageNo = 1, limit = 20) {
        return of({
            rows: [{
                "product_id": 2,
                "name": "Chartres Cathedral",
                "description": "\"The Fur Merchants\". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!",
                "price": "16.95",
                "discounted_price": "15.95",
                "thumbnail": "chartres-cathedral-thumbnail.gif"
            }], count: 101
        })

    },
    getProductsByCategory(category_id, pageNo = 1, limit = 20, descriptionLength = 120) {
        return of({
            rows: [{
                "product_id": 2,
                "name": "Chartres Cathedral",
                "description": "\"The Fur Merchants\". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!",
                "price": "16.95",
                "discounted_price": "15.95",
                "thumbnail": "chartres-cathedral-thumbnail.gif"
            }], count: 23
        })
    },
    getProductsByDepartment(department_id, pageNo = 1, limit = 20, descriptionLength = 120) {
        return of({
            rows: [{
                "product_id": 2,
                "name": "Chartres Cathedral",
                "description": "\"The Fur Merchants\". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!",
                "price": "16.95",
                "discounted_price": "15.95",
                "thumbnail": "chartres-cathedral-thumbnail.gif"
            }], count: 16
        })
    },
    getProductDetails(product_id) {
        return of({
            "product_id": 2,
            "name": "Chartres Cathedral",
            "description": "\"The Fur Merchants\". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!",
            "price": "16.95",
            "discounted_price": "15.95",
            "image": "chartres-cathedral.gif",
            "image2": "chartres-cathedral2.gif"
        })
    },
    getProductReviews(product_id) {
        return of([
            {
                "name": "Eder Taveira",
                "review": "That's a good product. The best for me.",
                "rating": 5,
                "created_on": "2019-02-17 13:57:29"
            }
        ])
    },
    AddProductReview(product_id, review, rating, token) {
        return of({})
    },

    getAttributes(productid) {
        return of([
            {
                "attribute_name": "Color",
                "attribute_value_id": 6,
                "attribute_value": "White"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 7,
                "attribute_value": "Black"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 8,
                "attribute_value": "Red"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 9,
                "attribute_value": "Orange"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 10,
                "attribute_value": "Yellow"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 11,
                "attribute_value": "Green"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 12,
                "attribute_value": "Blue"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 13,
                "attribute_value": "Indigo"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 14,
                "attribute_value": "Purple"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 1,
                "attribute_value": "S"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 2,
                "attribute_value": "M"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 3,
                "attribute_value": "L"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 4,
                "attribute_value": "XL"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 5,
                "attribute_value": "XXL"
            }
        ])
    },

    searchProducts(pageNo = 1, limit = 20, searchText) {
        return of({
            data: [{
                "product_id": 2,
                "name": "Chartres Cathedral",
                "description": "\"The Fur Merchants\". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!",
                "price": "16.95",
                "discounted_price": "15.95",
                "thumbnail": "chartres-cathedral-thumbnail.gif"
            }], count: 5
        })
    },

    register(data) {
        return of({
            "user": {
                "customer_id": 1,
                "name": "Lannucci",
                "email": "lannucci@hotmail.com",
                "address_1": "QI 19",
                "address_2": "",
                "city": "",
                "region": "",
                "postal_code": "",
                "country": "",
                "shipping_region_id": 1,
                "day_phone": "+351323213511235",
                "eve_phone": "+452436143246123",
                "mob_phone": "+351323213511235",
                "credit_card": "XXXXXXXX5100"
            },
            "accessToken": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA0MjQ0OTgsImV4cCI6MTU1MDUxMDg5OH0.aEFrNUPRWuRWx0IOEL-_A4J4Ti39iXEHAScm6GI61RR",
            "expires_in": "24h"
        })
    },

    login(data) {
        return of({
            "customer": {
                "customer_id": 1,
                "name": "Lannucci",
                "email": "lannucci@hotmail.com",
                "address_1": "QI 19",
                "address_2": "",
                "city": "",
                "region": "",
                "postal_code": "",
                "country": "",
                "shipping_region_id": 1,
                "day_phone": "+351323213511235",
                "eve_phone": "+452436143246123",
                "mob_phone": "+351323213511235",
                "credit_card": "XXXXXXXX5100"
            },
            "accessToken": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA0MjQ0OTgsImV4cCI6MTU1MDUxMDg5OH0.aEFrNUPRWuRWx0IOEL-_A4J4Ti39iXEHAScm6GI61RR",
            "expires_in": "24h"
        })
    },

    getCartId() {
        return of({ cart_id: 101 })
    },

    addToCart(data) {
        return of([
            {
                "item_id": 2,
                "name": "Chartres Cathedral",
                "attributes": "LG, Red",
                "price": "16.95",
                "quantity": 1,
                "product_id": 2,
                "subtotal": "16.95"
            }
        ])
    },
    updateCartItem(data) {
        return of({})
    },
    removeCartItem(id) {
        return of({})
    },

    getCartItems(cartId) {
        return of([
            {
                "item_id": 2,
                "name": "Arc d'Triomphe",
                "attributes": "LG, red",
                "price": "14.99",
                "quantity": 1,
                "subtotal": "14.99"
            }
        ])
    },

    makeOrders(data, token) {
        return of({ orderId: 505 })
    },
    makeCharge(data, token) {
        return of({
            "code": "USR_02",
            "message": "The field example is empty.",
            "field": "example"
        })
    },
    updateCustomerAddress(data, token) {
        return of(data)
    },
    getDepartments() {
        return of([
            {
                "department_id": 1,
                "name": "Regional",
                "description": "Proud of your country? Wear a T-shirt with a national symbol stamp!"
            },
            {
                "department_id": 2,
                "name": "Nature",
                "description": "Find beautiful T-shirts with animals and flowers in our Nature department!"
            },
            {
                "department_id": 3,
                "name": "Seasonal",
                "description": "Each time of the year has a special flavor. Our seasonal T-shirts express traditional symbols using unique postal stamp pictures."
            }
        ])
    },
    getCategories() {
        return of({
            "count": 7,
            "rows": [
                {
                    "category_id": 1,
                    "name": "French",
                    "description": "The French have always had an eye for beauty. One look at the T-shirts below and you'll see that same appreciation has been applied abundantly to their postage stamps. Below are some of our most beautiful and colorful T-shirts, so browse away! And don't forget to go all the way to the bottom - you don't want to miss any of them!",
                    "department_id": 1
                },
                {
                    "category_id": 2,
                    "name": "Italian",
                    "description": "The full and resplendent treasure chest of art, literature, music, and science that Italy has given the world is reflected splendidly in its postal stamps. If we could, we would dedicate hundreds of T-shirts to this amazing treasure of beautiful images, but for now we will have to live with what you see here. You don't have to be Italian to love these gorgeous T-shirts, just someone who appreciates the finer things in life!",
                    "department_id": 1
                },
                {
                    "category_id": 3,
                    "name": "Irish",
                    "description": "It was Churchill who remarked that he thought the Irish most curious because they didn't want to be English. How right he was! But then, he was half-American, wasn't he? If you have an Irish genealogy you will want these T-shirts! If you suddenly turn Irish on St. Patrick's Day, you too will want these T-shirts! Take a look at some of the coolest T-shirts we have!",
                    "department_id": 1
                },
                {
                    "category_id": 4,
                    "name": "Animal",
                    "description": " Our ever-growing selection of beautiful animal T-shirts represents critters from everywhere, both wild and domestic. If you don't see the T-shirt with the animal you're looking for, tell us and we'll find it!",
                    "department_id": 2
                },
                {
                    "category_id": 5,
                    "name": "Flower",
                    "description": "These unique and beautiful flower T-shirts are just the item for the gardener, flower arranger, florist, or general lover of things beautiful. Surprise the flower in your life with one of the beautiful botanical T-shirts or just get a few for yourself!",
                    "department_id": 2
                },
                {
                    "category_id": 6,
                    "name": "Christmas",
                    "description": " Because this is a unique Christmas T-shirt that you'll only wear a few times a year, it will probably last for decades (unless some grinch nabs it from you, of course). Far into the future, after you're gone, your grandkids will pull it out and argue over who gets to wear it. What great snapshots they'll make dressed in Grandpa or Grandma's incredibly tasteful and unique Christmas T-shirt! Yes, everyone will remember you forever and what a silly goof you were when you would wear only your Santa beard and cap so you wouldn't cover up your nifty T-shirt.",
                    "department_id": 3
                },
                {
                    "category_id": 7,
                    "name": "Valentine's",
                    "description": "For the more timid, all you have to do is wear your heartfelt message to get it across. Buy one for you and your sweetie(s) today!",
                    "department_id": 3
                }
            ]
        })
    },
    getCategoriesByDepartment(departmentId) {
        return of([
            {
                "category_id": 1,
                "name": "French",
                "description": "The French have always had an eye for beauty. One look at the T-shirts below and you'll see that same appreciation has been applied abundantly to their postage stamps. Below are some of our most beautiful and colorful T-shirts, so browse away! And don't forget to go all the way to the bottom - you don't want to miss any of them!",
                "department_id": 1
            },
            {
                "category_id": 2,
                "name": "Italian",
                "description": "The full and resplendent treasure chest of art, literature, music, and science that Italy has given the world is reflected splendidly in its postal stamps. If we could, we would dedicate hundreds of T-shirts to this amazing treasure of beautiful images, but for now we will have to live with what you see here. You don't have to be Italian to love these gorgeous T-shirts, just someone who appreciates the finer things in life!",
                "department_id": 1
            },
            {
                "category_id": 3,
                "name": "Irish",
                "description": "It was Churchill who remarked that he thought the Irish most curious because they didn't want to be English. How right he was! But then, he was half-American, wasn't he? If you have an Irish genealogy you will want these T-shirts! If you suddenly turn Irish on St. Patrick's Day, you too will want these T-shirts! Take a look at some of the coolest T-shirts we have!",
                "department_id": 1
            }
        ]
        )
    }
}

export function mockApi() {
    Object.keys(_api).forEach(_ => Api[_] = _api[_])
}