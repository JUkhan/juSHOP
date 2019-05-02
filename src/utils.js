
import { storeCtx } from 'ajwah-store';
import { useReducer, useEffect } from 'react';
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
            state.category = undefined;
            state.department = undefined;
            localStorage.setItem('state', JSON.stringify(state));
        }
    });
}

export function useSubscriptionsx(states) {
    const [state, dispatch] = useReducer((state, action) => {
        return action.type ? { ...state, [action.type]: action.payload } : state
    }, states.reduce((prev, next) => { prev[next] = storeCtx().store.states[next] ? storeCtx().store.states[next].initialState : {}; return prev; }, {}));
    useEffect(() => cleanupSubscriptions(dispatch, states), [])
    return state
}
function cleanupSubscriptions(dispatch, states) {
    var subs = new Subscription();
    states.forEach(stateName => {
        subs.add(storeCtx().select(stateName).subscribe(data => {
            dispatch({ type: stateName, payload: data })
        }));
    });
    return function () {
        subs.unsubscribe();
    };
}