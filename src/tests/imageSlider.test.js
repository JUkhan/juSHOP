import React from "react";
import { ImageSlide } from '../components/product/imageSlider'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

test('image slider - change images on clicking', () => {
    const props = { image1: 'image1', image2: 'image2' }
    const wrapper = shallow(<ImageSlide {...props} />)

    //expect(wrapper.find('.img-content').prop('src')).toContain('image1')
    expect(toJson(wrapper)).toMatchSnapshot()

    wrapper.find('.img2').simulate('click')
    //expect(wrapper.find('.img-content').prop('src')).toContain('image2')
    expect(toJson(wrapper)).toMatchSnapshot()

    wrapper.find('.img1').simulate('click')
    //expect(wrapper.find('.img-content').prop('src')).toContain('image1')
    expect(toJson(wrapper)).toMatchSnapshot()
})
