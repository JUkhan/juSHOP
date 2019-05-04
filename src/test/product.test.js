import * as Actions from '../store/actions'
//import store from '../../testUtil'
import { take } from 'rxjs/operators';

describe('Product', () => {
    let isFirst = true;
    beforeEach(() => {
        isFirst = true;
    })
    describe('If you select a department like "Regional" then category should be filtered as 3 categories and all the products(16) based on selected department should be loaded', () => {
        store.dispatch(Actions.SelectDepartment, { department_id: 1 })
        test('categories(3)', done => {
            store.select('category').pipe(
                take(2)
            ).subscribe(category => {
                if (!isFirst) {
                    expect(category.data.length).toBe(3);

                }
                isFirst = false;

            }, done, done);
        })

        test('products(16)', done => {
            store.select('product').pipe(
                take(2)
            ).subscribe(product => {
                if (!isFirst) {
                    expect(product.data.count).toBe(16);
                }
                isFirst = false;

            }, done, done);
        })

    })


})
