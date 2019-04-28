import { updateObject } from '../../utils';


export class CartState {
    name = 'cart';
    initialState = { message: '', data: [], total: 0 };

    actionCartAddData(state, { payload, thumbnail }) {
        payload.forEach(item => {
            const pitem = state.data.find(_ => _.item_id === item.item_id);
            if (pitem) item.thumbnail = pitem.thumbnail
            else item.thumbnail = thumbnail

        })
        const total = payload.reduce((sum, item) => sum + item.quantity, 0)
        return updateObject(state, { data: payload, total })
    }

    actionChangeQuantity(state, { payload }) {
        payload.item.quantity += payload.quantity;
        if (payload.item.quantity < 0) payload.item.quantity = 0;
        state.total = state.data.reduce((sum, item) => sum + item.quantity, 0);

        return updateObject(state);
    }

    actionRemoveItem(state, { payload }) {
        const data = state.data.filter(item => item !== payload);
        const total = data.reduce((sum, item) => sum + item.quantity, 0);
        return updateObject(state, { data, total });
    }

    actionAllCartItems(state, { payload }) {
        return updateObject(state, { data: payload })
    }

    actionCartCleanup() {
        return updateObject({ data: [], total: 0 })
    }

    actionOrderId(state, { payload, charge }) {
        return updateObject(state, { orderId: payload, charge })
    }
    actionMakeOrders(state, { payload }) {
        return updateObject(state, { stripeToken: payload })
    }

}