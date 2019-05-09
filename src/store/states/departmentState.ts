import { updateObject } from '../../utils'
import { Api } from '../../services/Api'
import { mergeMap, map } from 'rxjs/operators';
import { IDepartmentState } from '../model';
import { IAction, Actions } from 'ajwah-store';

export class DepartmentState {
    name = 'department'
    initialState = { data: [] }

    actionSetDepartmentData(state: IDepartmentState, { data }: IAction) {
        return updateObject(state, { data } as IDepartmentState)
    }
    actionSelectDepartment(state: IDepartmentState, { payload }: IAction) {
        return updateObject(state, { selectedDepartment: payload } as IDepartmentState)
    }
    effectForGetDepartments(action$: Actions) {
        return action$.pipe(
            mergeMap(() => Api.getDepartments()),
            map(data => ({ type: 'SetDepartmentData', data }))
        )
    }

}