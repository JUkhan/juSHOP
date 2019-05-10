import * as Actions from '../store/actions'
import { take } from 'rxjs/operators';
import { storeCtx } from 'ajwah-store'

describe('Departmeent and category', () => {



    test('Load all products(101)', (done) => {

        storeCtx().dispatch(Actions.LoadProducts, {})
        storeCtx().select('product').pipe(
            take(1)
        ).subscribe(product => {

            expect(product.data.count).toBe(101);

        }, done, done)

    })

    test('Load all departments(3)', (done) => {
        storeCtx().dispatch(Actions.GetDepartments)
        storeCtx().select('department').pipe(
            take(1)
        ).subscribe(res => {

            expect(res.data.length).toBe(3);

        }, done, done)

    })
    test('Load all Categories(7)', (done) => {

        storeCtx().dispatch(Actions.GetCategories)
        storeCtx().select('category').pipe(
            take(1)
        ).subscribe(res => {

            expect(res.data.length).toBe(7);

        }, done, done)

    })
})
