
import { storeCtx } from 'ajwah-store';
import { AppState } from './store/model';

export function updateObject<S>(state: S, props?: S): S {
    return { ...state, ...(props || {}) };
}

export function persistState() {

    storeCtx<AppState>().exportState().subscribe(([action, state]) => {

        if (action.type === "@@INIT") {
            const data = localStorage.getItem('state');
            data && storeCtx().importState(JSON.parse(data))
        }
        else {
            state.product = undefined as any;
            state.category = undefined as any;
            state.department = undefined as any;
            localStorage.setItem('state', JSON.stringify(state));
        }
    });
}

