import { updateObject } from '../../utils'
import { Api } from '../../services/Api'
import { mergeMap, map } from 'rxjs/operators';

export class DepartmentState {
    name = 'department'
    initialState = { data: [] }

    actionSetDepartmentData(state, { data }) {
        return updateObject(state, { data })
    }
    actionSelectDepartment(state, { payload }) {
        return updateObject(state, { selectedDepartment: payload })
    }
    effectForGetDepartments(action$) {
        return action$.pipe(
            mergeMap(() => Api.getDepartments()),
            map(data => ({ type: 'SetDepartmentData', data }))
        )
    }

}