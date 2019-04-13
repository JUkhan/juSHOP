import * as ActionNames from '../actions';
import { mergeMap, map, withLatestFrom, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Api } from '../../services/Api';

export class ProductEffect {

    effectForLoadProductsOrPageChange(action$) {
        return action$.pipe(
            mergeMap(({ payload: { pageNo, limit } }) => Api.getProducts(pageNo, limit).pipe(
                map(data => ({ type: ActionNames.ProductsData, payload: data }))
            ))
        )
    }

    effectForSearchProducts(action$, store$) {
        return action$.pipe(
            debounceTime(550),
            distinctUntilChanged(),
            withLatestFrom(store$.select('product')),
            switchMap(([action, product]) => Api.searchProducts(product.pageNo, product.limit, action.payload).pipe(
                map(data => ({ type: ActionNames.ProductsData, payload: data }))
            ))
        )
    }
}