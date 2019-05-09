import { updateObject } from '../../utils';
import { IProductState } from '../model';
import { IAction } from 'ajwah-store';

export class ProductState {
    name = 'product';
    initialState = { data: [], message: '', pageNo: 1, limit: 20 };

    actionProductsData(state: IProductState, { payload }: IAction) {
        return updateObject(state, { data: payload, message: '' } as IProductState)
    }

    actionLoadProducts(state: IProductState) {
        return updateObject(state, { message: 'loading products...' } as IProductState)
    }

    actionSearchProducts(state: IProductState) {
        return updateObject(state, { message: 'searching products...', pageNo: 1 } as IProductState)
    }

    actionPageChange(state: IProductState, { payload: { pageNo, limit } }: IAction) {
        return updateObject(state, { pageNo, limit, message: 'page changeing...' } as IProductState);
    }
    actionSelectCategory(state: IProductState) {
        return updateObject(state, { message: 'loading products...', pageNo: 1, } as IProductState)
    }
    actionSelectDepartment(state: IProductState) {
        return updateObject(state, { message: 'loading products...', pageNo: 1, } as IProductState)
    }
}