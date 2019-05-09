import * as Actions from '../store/actions'
import { take } from 'rxjs/operators';
import { storeCtx } from 'ajwah-store'

describe('checkout', () => {

    describe('Adding a product to the cart', () => {
        storeCtx().dispatch(Actions.AddToCart, {
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
            storeCtx().select('cart').pipe(
                take(1)
            ).subscribe(cart => {
                expect(cart.cartId).toBeTruthy();
                expect(cart.data.length).toBe(1);
                cart.grandTotal = 15.95;
            }, done, done);
        })


    })

    test('login', done => {
        storeCtx().dispatch(Actions.Login, { email: 'jasimuddinkhan@gmail.com', password: '123' })
        storeCtx().select('customer').pipe(
            take(1)
        ).subscribe(customer => {
            expect(customer.accessToken).toBeTruthy();

        }, done, done);
    })

    test('make order', done => {

        storeCtx().dispatch(Actions.MakeOrders, 'tok_1EWEKm2eZvKYlo2CJYowkXkY')
        storeCtx().select('cart').pipe(
            take(1)
        ).subscribe(cart => {
            expect(cart.orderId).toBeTruthy();
        }, done, done);

    })

})
