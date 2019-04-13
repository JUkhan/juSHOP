
import { getStore } from 'ajwah-store';

export function updateObject(state, props = {}) {
    return { ...state, ...props };
}

export function persistState() {
    getStore().exportState().subscribe(([action, state]) => {
        if (action.type === "@@INIT") {
            const data = localStorage.getItem('state');
            data && getStore().importState(JSON.parse(data))
        }
        else {
            state.product = undefined;
            localStorage.setItem('state', JSON.stringify(state));
        }
    });
}