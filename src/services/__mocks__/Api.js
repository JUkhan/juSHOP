import { of } from 'rxjs';


export const Api = {
    getProducts: jest.fn(() => of({ data: [], count: 101 }))
}