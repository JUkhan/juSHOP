import { getStoreContext } from 'ajwah-store'

import { ProductState, CartState, CustomerState, ProductEffect, DeliveryState, CartEffect, CategoryState, DepartmentState } from '../store';


const store = getStoreContext({
    states: [CategoryState, DepartmentState, ProductState, CartState, CustomerState, DeliveryState],
    effects: [ProductEffect, CartEffect]
});

export default store;