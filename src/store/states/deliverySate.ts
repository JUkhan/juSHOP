import { updateObject } from '../../utils';
import { IAction } from 'ajwah-store';

export class DeliveryState {
    name = 'delivery';
    initialState = { firstName: 'jasim', lastName: 'khan', address: '', city: '', state: '', zipCode: '', isBiAsDelivery: true, deliveryOption: 1 };

    actionDeliveryData(state: any, { payload }: IAction) {
        return updateObject(state, payload);
    }

}