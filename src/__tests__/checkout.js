import * as Actions from '../store/actions'
import { take } from 'rxjs/operators';

describe('checkout', () => {
    let isFirst = true;
    beforeEach(() => {
        isFirst = true;
    })
    describe('Adding a product to the cart', () => {
        store.dispatch(Actions.AddToCart, {
            product_id: 2,
            name: "Chartres Cathedral",
            price: "16.95",
            discounted_price: "15.95",
            thumbnail: "chartres-cathedral-thumbnail.gif",
            image: "chartres-cathedral.gif",
            image2: "chartres-cathedral-2.gif",
            color: "Red",
            size: "M"
        });

        test('Very first time it makes a unique cart_id and add products using this cart_id and leave for subsequent times', done => {
            store.select('cart').pipe(
                take(2)
            ).subscribe(cart => {
                if (!isFirst) {
                    expect(cart.cartId).toBeTruthy();
                    expect(cart.data.length).toBe(1);
                    cart.grandTotal = 15.95;
                }
                isFirst = false;

            }, done, done);
        })


    })

    test('login', done => {
        store.dispatch(Actions.Login, { email: 'jasimuddinkhan@gmail.com', password: '123' })
        store.select('customer').pipe(
            take(2)
        ).subscribe(customer => {
            if (!isFirst) {
                expect(customer.accessToken).toBeTruthy();
            }
            isFirst = false;

        }, done, done);
    })

    test('make order', done => {

        store.dispatch(Actions.MakeOrders, 'tok_1EWEKm2eZvKYlo2CJYowkXkY')
        store.select('cart').pipe(
            take(2)
        ).subscribe(cart => {
            if (!isFirst) {
                expect(cart.orderId).toBeTruthy();
            }
            isFirst = false;

        }, done, done);

    })

})
