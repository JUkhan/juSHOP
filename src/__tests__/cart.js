import * as Actions from '../store/actions'
import { take } from 'rxjs/operators';


describe('cart', () => {
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
                }
                isFirst = false;

            }, done, done);
        })


    })
})
