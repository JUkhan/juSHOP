import { Subscription } from "rxjs";
import { getStore } from 'ajwah-store';

export function updateObject(state, props = {}) {
    return { ...state, ...props };
}

export function subscribe(obj) {
    const subs = new Subscription();
    Object.keys(obj).forEach(stateName =>
        subs.add(
            getStore()
                .select(stateName)
                .subscribe(data => obj[stateName](data))
        )
    );
    return () => subs.unsubscribe();
}

export function persistState() {
    getStore().exportState().subscribe(([action, state]) => {
        if (action.type === "@@INIT") {
            const data = localStorage.getItem('state');
            data && getStore().importState(JSON.parse(data))
        }
        else {
            state = { ...state };
            state.product = undefined;
            localStorage.setItem('state', JSON.stringify(state));
        }
    });
}