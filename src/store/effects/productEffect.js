import * as ActionNames from '../actions';
import { mergeMap, map, withLatestFrom, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Api } from '../../services/Api';

export class ProductEffect {

    effectForLoadProductsOrPageChange(action$, store$) {
        return action$.pipe(
            withLatestFrom(store$.select('category')),
            withLatestFrom(store$.select('department')),
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

    effectForSearchProducts(action$, store$) {
        return action$.pipe(
            debounceTime(550),
            distinctUntilChanged(),
            withLatestFrom(store$.select('product')),
            switchMap(([action, product]) => Api.searchProducts(product.pageNo, product.limit, action.payload)),
            map(data => ({ type: ActionNames.ProductsData, payload: data }))
        )
    }

    effectForSelectCategory(action$, store$) {
        return action$.pipe(
            withLatestFrom(store$.select('product')),
            mergeMap(([action, product]) => Api.getProductsByCategory(action.payload.category_id, product.pageNo, product.limit)),
            map(data => ({ type: ActionNames.ProductsData, payload: data }))
        )
    }
    effectForSelectDepartment(action$, store$) {
        return action$.pipe(
            withLatestFrom(store$.select('product')),
            mergeMap(([action, product]) => Api.getProductsByDepartment(action.payload.department_id, product.pageNo, product.limit)),
            map(data => ({ type: ActionNames.ProductsData, payload: data }))
        )
    }
}