import { setStoreContext } from "ajwah-store";
import { mockApi } from './services/__mocks__/Api'
import {
    ProductState,
    CartState,
    CustomerState,
    ProductEffect,
    DeliveryState,
    CartEffect,
    CategoryState,
    DepartmentState
} from "./store";


setStoreContext({
    states: [
        CategoryState,
        DepartmentState,
        ProductState,
        CartState,
        CustomerState,
        DeliveryState
    ],
    effects: [ProductEffect, CartEffect]
});

mockApi();