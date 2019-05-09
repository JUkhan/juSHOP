
import { updateObject } from '../../utils';
import { ICartState, ICart } from '../model'
import { IAction } from 'ajwah-store';

export class CartState {
    name = 'cart';
    initialState: ICartState = { message: '', data: [], total: 0 };

    actionCartAddData(state: ICartState, { payload, thumbnail }: IAction<ICart[]>): ICartState {

        payload!.forEach((item: ICart) => {
            const pitem = state.data.find(_ => _.item_id === item.item_id);
            if (pitem) item.thumbnail = pitem.thumbnail
            else item.thumbnail = thumbnail

        })
        const total = payload!.reduce((sum: number, item: ICart) => sum + item.quantity, 0)
        return updateObject(state, { data: payload, total } as ICartState)
    }

    actionChangeQuantity(state: ICartState, { payload }: any): ICartState {
        payload.item.quantity += payload.quantity;
        if (payload.item.quantity < 0) payload.item.quantity = 0;
        state.total = state.data.reduce((sum, item) => sum + item.quantity, 0);

        return updateObject(state);
    }

    actionRemoveItem(state: ICartState, { payload }: any): ICartState {
        const data = state.data.filter(item => item !== payload);
        const total = data.reduce((sum, item) => sum + item.quantity, 0);
        return updateObject(state, { data, total });
    }

    actionAllCartItems(state: ICartState, { payload }: any): ICartState {
        return updateObject(state, { data: payload })
    }

    actionCartCleanup(): ICartState {
        return updateObject(this.initialState)
    }

    actionOrderId(state: ICartState, { payload, charge }: any): ICartState {
        return updateObject(state, { orderId: payload, charge } as ICartState)
    }
    actionMakeOrders(state: ICartState, { payload }: any) {
        return updateObject(state, { stripeToken: payload } as ICartState)
    }

}