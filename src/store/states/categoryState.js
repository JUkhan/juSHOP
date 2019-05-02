import { updateObject } from '../../utils'
import { Api } from '../../services/Api'
import { mergeMap, map } from 'rxjs/operators';

export class CategoryState {
    name = 'category'
    initialState = { data: [] }

    actionSetCategoryData(state, { data }) {
        return updateObject(state, { data })
    }
    actionSelectCategory(state, { payload }) {
        return updateObject(state, { selectedCategory: payload })
    }
    effectForGetCategories(action$) {
        return action$.pipe(
            mergeMap(() => Api.getCategories()),
            map(data => ({ type: 'SetCategoryData', data: data.rows }))
        )
    }
    effectForSelectDepartment(action$) {
        return action$.pipe(
            mergeMap(action => Api.getCategoriesByDepartment(action.payload.department_id)),
            map(data => ({ type: 'SetCategoryData', data }))
        )
    }
}