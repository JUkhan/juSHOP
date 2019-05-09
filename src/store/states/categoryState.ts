import { updateObject } from '../../utils'
import { Api } from '../../services/Api'
import { mergeMap, map } from 'rxjs/operators';
import { ICategoryState } from '../model';
import { Actions } from 'ajwah-store';

export class CategoryState {
    name = 'category'
    initialState = { data: [] }

    actionSetCategoryData(state: ICategoryState, { data }: any) {
        return updateObject(state, { data } as ICategoryState)
    }
    actionSelectCategory(state: ICategoryState, { payload }: any) {
        return updateObject(state, { selectedCategory: payload } as ICategoryState)
    }
    effectForGetCategories(action$: Actions) {
        return action$.pipe(
            mergeMap(() => Api.getCategories()),
            map(data => ({ type: 'SetCategoryData', data: data.rows }))
        )
    }
    effectForSelectDepartment(action$: Actions) {
        return action$.pipe(
            mergeMap(action => Api.getCategoriesByDepartment(action.payload.department_id)),
            map(data => ({ type: 'SetCategoryData', data }))
        )
    }
}