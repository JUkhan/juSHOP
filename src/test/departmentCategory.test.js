import * as Actions from '../store/actions'
import { take } from 'rxjs/operators';
//import store from './testUtil'

describe('juSHOP', () => {
    let isFirst = true;
    beforeEach(() => {
        isFirst = true;
    })

    test('Load all products(101)', (done) => {
        store.dispatch(Actions.LoadProducts, {})
        store.select('product').pipe(
            take(2)
        ).subscribe(product => {
            if (!isFirst) {
                expect(product.data.count).toBe(101);
            }
            isFirst = false;

        }, done, done)

    })

    test('Load all departments(3)', (done) => {
        store.dispatch(Actions.GetDepartments)
        store.select('department').pipe(
            take(2)
        ).subscribe(res => {
            if (!isFirst) {
                expect(res.data.length).toBe(3);
            }
            isFirst = false;

        }, done, done)

    })
    test('Load all Categories(7)', (done) => {

        store.dispatch(Actions.GetCategories)
        store.select('category').pipe(
            take(2)
        ).subscribe(res => {
            if (!isFirst) {
                expect(res.data.length).toBe(7);
            }
            isFirst = false;

        }, done, done)

    })



})
