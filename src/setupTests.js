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

import { configure } from 'enzyme'
import Adapte from 'enzyme-adapter-react-16'

configure({ adapter: new Adapte() })


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