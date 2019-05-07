import * as Actions from '../store/actions'
import { take } from 'rxjs/operators';
import { storeCtx } from 'ajwah-store'


describe('Product', () => {

    describe('If you select a department like "Regional" then category should be filtered as 3 categories and all the products(16) based on selected department should be loaded', () => {
        storeCtx().dispatch(Actions.SelectDepartment, { department_id: 1 })
        test('categories(3)', done => {
            storeCtx().select('category').pipe(
                take(1)
            ).subscribe(category => {

                expect(category.data.length).toBe(3);

            }, done, done);
        })

        test('products(16)', done => {
            storeCtx().select('product').pipe(
                take(1)
            ).subscribe(product => {

                expect(product.data.count).toBe(16);


            }, done, done);
        })

    })


})
