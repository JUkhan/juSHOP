import React from "react";
import { Categories } from '../components/product/categories'
import Enzyme, { mount } from 'enzyme'

import Adapte from 'enzyme-adapter-react-16'
import { storeCtx } from "ajwah-store";
import { take } from "rxjs/operators";


Enzyme.configure({ adapter: new Adapte() })


describe('categories', () => {

    test('categories - top menu should generate 7 li', async done => {
        const wrapper = mount(<Categories />)

        storeCtx().select('category').pipe(take(1)).subscribe(res => {
            expect(res.data.length).toBe(7)
            expect(wrapper.find('ul').text()).toBe(res.data.map(_ => _.name).join(''))
        }, done, done)

    })

})
