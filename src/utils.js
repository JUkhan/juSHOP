
import { storeCtx } from 'ajwah-store';
import { useReducer } from 'react';
import { Subscription } from 'rxjs'

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

export function useSubscriptions(states) {
    const [state, dispatch] = useReducer((state, action) => {
        return action.type ? { ...state, [action.type]: action.payload } : state
    }, states.reduce((prev, next) => { prev[next] = storeCtx().store.states[next] ? storeCtx().store.states[next].initialState : {}; return prev; }, {}));
    return [state, [dispatch, states]]
}
export function cleanupSubscriptions([dispatch, arr]) {
    var subs = new Subscription();
    arr.forEach(stateName => {
        subs.add(storeCtx().select(stateName).subscribe(data => {
            dispatch({ type: stateName, payload: data })
        }));
    });
    return function () {
        subs.unsubscribe();
    };
}