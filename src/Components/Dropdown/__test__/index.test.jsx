import React from "react";
import Dropdown from '../index';

import { mount } from "enzyme";

it('should render Dropdown correctly', () => {
    const wrapper = mount(<Dropdown />);

    expect(wrapper).toMatchSnapshot();
});