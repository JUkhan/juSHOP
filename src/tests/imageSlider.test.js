import React from "react";
import { ImageSlide } from '../components/product/imageSlider'
import Enzyme, { shallow } from 'enzyme'

import Adapte from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapte() })

test('image slider - change images on clicking', () => {
    const props = { image1: 'image1', image2: 'image2' }
    const wrapper = shallow(<ImageSlide {...props} />)

    expect(wrapper.find('.img-content').prop('src')).toContain('image1')

    wrapper.find('.img2').simulate('click')
    expect(wrapper.find('.img-content').prop('src')).toContain('image2')

    wrapper.find('.img1').simulate('click')
    expect(wrapper.find('.img-content').prop('src')).toContain('image1')
})
