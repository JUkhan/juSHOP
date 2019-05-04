import { of } from 'rxjs';

export class Api {

    static getProducts(pageNo = 1, limit = 20) {
        return of({ data: [], count: 102 })
    }
}