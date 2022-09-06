import React from "react";
import DataList from "../index.jsx";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { mount } from "enzyme";

const mockStore = configureMockStore([thunk]);

describe("Data List Test", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({
      loading: false,
      listData: [
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
        {
          gender: "female",
          name: {
            first: "Eleonora",
            last: "Perišić",
          },
          email: "eleonora.perisic@example.com",
          login: {
            username: "purplezebra310",
          },
          registered: {
            date: "2017-09-14T08:20:38.862Z",
          },
        },
      ],
      page: 1,
    });

    wrapper = mount(
      <Provider store={store}>
        <DataList />
      </Provider>
    );
  });

  afterAll((done) => {
    setTimeout(() => {
        done()
    }, 600);
  });

  it("Should render Data List page correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should get loading page', () => {
    const store = mockStore({
        loading: true,
        listData: [],
        page: 1,
      });
  
    const wrapper = mount(
        <Provider store={store}>
          <DataList />
        </Provider>
    );
    
   expect(wrapper.contains(
        <div className="loading">
            <h2>Loading data ...</h2>
        </div>
   )).toBeTruthy();
  });

  it('should failed handle because listData is null', () => {
    const store = mockStore({
        loading: false,
        listData: null,
        page: 1,
      });
  
    const wrapper = mount(
        <Provider store={store}>
          <DataList />
        </Provider>
    );
    
    expect(wrapper.find('.table-row-wrap')).toHaveLength(0)
  });

  it('should failed handle because listData item is null', () => {
    const store = mockStore({
        loading: false,
        listData: [null],
        page: 1,
      });
  
    const wrapper = mount(
        <Provider store={store}>
          <DataList />
        </Provider>
    );
    
    expect(wrapper.find('.table-row-wrap')).toHaveLength(1)
  });

  it("should get list of data with search by keyword correctly", () => {
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'Herman' } });

    expect(wrapper.find('input').prop("value")).toBe('Herman')

    setTimeout(() => {
        input.simulate('change', { target: { value: '' } });
        expect(wrapper.find('input').prop("value")).toBe('')
    }, 500);
  });

  it('should get list of data with filter by gender', () => {
    const dropdown = wrapper.find('select');

    dropdown.simulate('change', {
        target: { value: 'female' }
    });

    expect(wrapper.find('select').prop("value")).toBe('female')
  });

  it('should reset search & filter', () => {
    const buttonResetFilter = wrapper.find('.button');

    buttonResetFilter.simulate('click');
    
    expect(wrapper.find('input').prop("value")).toBe('');
    expect(wrapper.find('input').prop("value")).toBe('');
  });

  it('should handle pagination correctly', () => {
    const paginationItem = wrapper.find('.pagination-item');

    paginationItem.at(1).simulate('click');

    expect(wrapper.find('.table-row-wrap')).toHaveLength(10)
  });

  it('should failed to handle pagination when loading is true', () => {
    const store = mockStore({
        loading: true,
        listData: [],
        page: 1,
      });
  
    const wrapper = mount(
        <Provider store={store}>
          <DataList />
        </Provider>
    );

    const paginationItem = wrapper.find('.pagination-item');

    paginationItem.at(1).simulate('click');

    expect(wrapper.find('.table-row-wrap')).toHaveLength(0)
    expect(wrapper.contains(
        <div className="loading">
            <h2>Loading data ...</h2>
        </div>
   )).toBeTruthy();
  });

  it('should handle sort correctly', () => {
    const sortByUserName = wrapper.find('.header-item-wrap');

    sortByUserName.at(0).simulate('click');
    sortByUserName.at(0).simulate('click');
    sortByUserName.at(0).simulate('click');

    expect(wrapper.find('.table-row-wrap')).toHaveLength(10);

    sortByUserName.at(1).simulate('click');
    sortByUserName.at(1).simulate('click');
    sortByUserName.at(1).simulate('click');

    expect(wrapper.find('.table-row-wrap')).toHaveLength(10)

    sortByUserName.at(2).simulate('click');
    sortByUserName.at(2).simulate('click');
    sortByUserName.at(2).simulate('click');

    expect(wrapper.find('.table-row-wrap')).toHaveLength(10)

    sortByUserName.at(3).simulate('click');
    sortByUserName.at(3).simulate('click');
    sortByUserName.at(3).simulate('click');

    expect(wrapper.find('.table-row-wrap')).toHaveLength(10)

    sortByUserName.at(4).simulate('click');
    sortByUserName.at(4).simulate('click');
    sortByUserName.at(4).simulate('click');

    expect(wrapper.find('.table-row-wrap')).toHaveLength(10)
  })
});
