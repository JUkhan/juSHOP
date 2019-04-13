import { updateObject } from '../../utils';

export class ProductState {
    name = 'product';
    initialState = { data: [], message: '', pageNo: 1, limit: 20 };

    actionProductsData(state, { payload }) {
        return updateObject(state, { data: payload, message: '' })
    }

    actionLoadProducts(state) {
        return updateObject(state, { message: 'loading products...' })
    }

    actionSearchProducts(state) {
        return updateObject(state, { message: 'searching products...' })
    }

    actionPageChange(state, { payload: { pageNo, limit } }) {
        return updateObject(state, { pageNo, limit, message: 'page changeing...' });
    }
}