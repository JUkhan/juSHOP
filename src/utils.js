
import { storeCtx } from 'ajwah-store';

export function updateObject(state, props = {}) {
    return { ...state, ...props };
}

export function persistState() {
    storeCtx().exportState().subscribe(([action, state]) => {
        if (action.type === "@@INIT") {
            const data = localStorage.getItem('state');
            data && storeCtx().importState(JSON.parse(data))
        }
        else {
            state.product = undefined;
            localStorage.setItem('state', JSON.stringify(state));
        }
    });
}