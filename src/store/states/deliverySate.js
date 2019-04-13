import { updateObject } from '../../utils';

export class DeliveryState {
    name = 'delivery';
    initialState = { firstName: 'jasim', lastName: 'khan', address: '', city: '', state: '', zipCode: '', isBiAsDelivery: true, deliveryOption: 1 };

    actionDeliveryData(state, { payload }) {
        return updateObject(state, payload);
    }

}