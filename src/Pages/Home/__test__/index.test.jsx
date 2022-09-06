import React from "react";
import Home from "../index.jsx";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

const mockUseNav = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNav,
}));

describe("Home Test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <Home />
      </Router>
    );
  });

  it("Should render Home correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should click the button and move page to /detailist", () => {
    const button = wrapper.find(".button");

    button.simulate("click");

    expect(mockUseNav).toHaveBeenCalledWith('/datalist')
  });
});
