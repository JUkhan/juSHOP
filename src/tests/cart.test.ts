import * as Actions from '../store/actions'
import { take } from 'rxjs/operators'
import { storeCtx } from 'ajwah-store'

describe('cart', () => {

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
            size: "LG"
        });

        test('Very first time it makes a unique cart_id and add products using this cart_id and leave for subsequent times', done => {
            storeCtx().select('cart').pipe(
                take(1)
            ).subscribe(cart => {
                expect(cart.cartId).toBeTruthy();
                expect(cart.data.length).toBe(1);

            }, done, done);
        })


    })
})
