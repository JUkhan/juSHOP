import { AppState, ICartState, ICategoryState, IDepartmentState, IProductState } from './../model';
import * as ActionNames from '../actions';
import { mergeMap, map, withLatestFrom, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Api } from '../../services/Api';
import { Actions, StoreContext } from 'ajwah-store';

export class ProductEffect {

    effectForLoadProductsOrPageChange(action$: Actions, store$: StoreContext) {

        return action$.pipe(
            withLatestFrom(store$.select<ICategoryState>('category')),
            withLatestFrom(store$.select<IDepartmentState>('department')),
            mergeMap(([[{ payload: { pageNo, limit } }, category], department]) => {
                if (category.selectedCategory)
                    return Api.getProductsByCategory(category.selectedCategory.category_id, pageNo, limit)
                else if (department.selectedDepartment)
                    return Api.getProductsByDepartment(department.selectedDepartment.department_id, pageNo, limit)
                return Api.getProducts(pageNo, limit)
            }),
            map(data => ({ type: ActionNames.ProductsData, payload: data }))
        )
    }

    effectForSearchProducts(action$: Actions, store$: StoreContext) {
        return action$.pipe(
            debounceTime(550),
            distinctUntilChanged(),
            withLatestFrom(store$.select<IProductState>('product')),
            switchMap(([action, product]) => Api.searchProducts(product.pageNo, product.limit, action.payload)),
            map(data => ({ type: ActionNames.ProductsData, payload: data }))
        )
    }

    effectForSelectCategory(action$: Actions, store$: StoreContext) {
        return action$.pipe(
            withLatestFrom(store$.select<IProductState>('product')),
            mergeMap(([action, product]) => Api.getProductsByCategory(action.payload.category_id, product.pageNo, product.limit)),
            map(data => ({ type: ActionNames.ProductsData, payload: data }))
        )
    }
    effectForSelectDepartment(action$: Actions, store$: StoreContext) {
        return action$.pipe(
            withLatestFrom(store$.select<IProductState>('product')),
            mergeMap(([action, product]) => Api.getProductsByDepartment(action.payload.department_id, product.pageNo, product.limit)),
            map(data => ({ type: ActionNames.ProductsData, payload: data }))
        )
    }
}