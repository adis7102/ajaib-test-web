import React from "react";
import NotFound from '../index';

import { mount } from "enzyme";

it('should render NotFound correctly', () => {
    const wrapper = mount(<NotFound />);

    expect(wrapper).toMatchSnapshot();
});