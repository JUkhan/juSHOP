import { any, number } from "prop-types";

export interface ICart {
    item_id: number;
    name: string;
    attributes: string;
    price: string;
    quantity: number;
    thumbnail: string;
    total: number;
}
export interface ICategory {
    category_id: number;
    name: string;
}
export interface IDepartment {
    department_id: number;
    name: string;
}
export interface ICartState {
    message?: string;
    data: ICart[],
    total?: number,
    orderId?: number;
    stripeToken?: string;
    charge?: any;
    cartId?: string;
}

export interface ICustomerState {
    customer: any;
    accessToken: string
}
export interface ICategoryState {
    data: ICategory[],
    selectedCategory: ICategory;
}
export interface IDepartmentState {
    data: IDepartment[],
    selectedDepartment: IDepartment;
}

export interface IPopup {
    visible: boolean;
    show: () => void;
    hide: () => void;
}
export interface IProduct {
    rows: any[];
    count: number;
}
export interface IProductState {
    data: IProduct;
    message: string;
    pageNo: number;
    limit: number;
}

export interface AppState {
    cart: ICartState;
    category: ICategoryState;
    product: IProductState;
    department: IDepartmentState;
    customer: ICustomerState
}