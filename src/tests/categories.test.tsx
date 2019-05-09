import React from "react";
import { Categories } from '../components/product/categories'
import { mount } from 'enzyme'

import { storeCtx } from "ajwah-store";
import { take } from "rxjs/operators";
import toJson from 'enzyme-to-json'

describe('categories', () => {

    test('categories - top menu should generate 7 li', async done => {
        const wrapper = mount(<Categories />)

        storeCtx().select('category').pipe(take(1)).subscribe(res => {
            expect(res.data.length).toBe(7)
            expect(wrapper.find('ul')).toHaveLength(1)
            expect(toJson(wrapper, {
                noKey: false,
                mode: 'deep'
            })).toMatchSnapshot()
            wrapper.unmount()
        }, done, done)

    })

})
