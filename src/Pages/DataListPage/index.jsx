import React, { useState, useEffect } from "react";
import cn from "classnames";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

import { getListData } from "../../store/actions/DataList";

import Input from "../../Components/Input/index.jsx";
import Dropdown from "../../Components/Dropdown/index.jsx";
import Button from "../../Components/Button/index.jsx";
import ChevronIcon from "../../assets/icons/chevron.png";

import "./style.scss";

const DataListPage = () => {
  const dispatch = useDispatch();
  const { loading, page, listData } = useSelector((state) => state);

  const url = "https://randomuser.me/api/";
  const totalPage = 10;
  const defaultValueSort = {
    sortBy: "",
    sortOrder: "",
  };

  const [keyword, setKeyword] = useState("");
  const [gender, setGender] = useState("");
  const [sort, setSort] = useState(defaultValueSort);

  useEffect(() => {
    dispatch(
      getListData(`${url}?page=${page}&pageSize10&results=10`, {
        method: "GET",
      })
    );
  }, []);

  useEffect(() => {
    if (keyword) {
      const timeout = setTimeout(() => {
        dispatch(
          getListData(
            `${url}?page=${page}&pageSize10&results=10&gender=${gender}&keyword=${keyword}`,
            {
              method: "GET",
            }
          )
        );
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [keyword]);

  const handleSearch = (value) => {
    if (value) {
      setKeyword(value);
    } else {
      setKeyword("");
      dispatch(
        getListData(`${url}?page=${page}&pageSize10&results=10`, {
          method: "GET",
        })
      );
    }
  };

  const handleGender = (value) => {
    setGender(value);

    dispatch(
      getListData(
        `${url}?page=${page}&pageSize10&results=10&gender=${value}&keyword=${keyword}`,
        {
          method: "GET",
        }
      )
    );
  };

  const handleReset = () => {
    setKeyword("");
    setGender("");
    dispatch(
      getListData(`${url}?page=${page}&pageSize10&results=10`, {
        method: "GET",
      })
    );
  };

  const handlePagination = (activePage) => {
    if (!loading) {
      dispatch(
        getListData(
          `${url}?page=${activePage}&pageSize10&results=10&gender=${gender}&keyword=${keyword}`,
          {
            method: "GET",
          }
        )
      );
    }
  };

  const handleSort = (sortBy) => {
    if (sort?.sortOrder !== "descend") {
      const sortValue = {
        sortBy: sortBy,
        sortOrder: sort?.sortOrder === "ascend" && sort?.sortBy === sortBy ? "descend" : "ascend",
      };

      setSort(sortValue);
      dispatch(
        getListData(
          `${url}?page=${page}&pageSize10&results=10&gender=${gender}&keyword=${keyword}&sortBy=${sortValue.sortBy}&sortOrder=${sortValue.sortOrder}`,
          {
            method: "GET",
          }
        )
      );
    } else {
      setSort(defaultValueSort);
      dispatch(
        getListData(
          `${url}?page=${page}&pageSize10&results=10&gender=${gender}&keyword=${keyword}`,
          {
            method: "GET",
          }
        )
      );
    }
  };

  return (
    <div className="data-list">
      <div className="bread-crumb">
        <p>Home /</p>
        <p className="active">Data List</p>
      </div>
      <h2>Type and search or Filter by Gender, or both!</h2>
      <div className="filter-wrap">
        <div className="field-wrap">
          <Input
            name="search"
            title="Search"
            value={keyword}
            onChange={(value) => handleSearch(value)}
          />
        </div>
        <div className="field-wrap">
          <Dropdown
            name="filter"
            title="Gender"
            onChange={(value) => handleGender(value)}
            value={gender}
          >
            <option value="">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </Dropdown>
        </div>
        <div className="reset-button">
          <Button title="RESET FILTER" onClick={handleReset} padding={10} />
        </div>
      </div>
      <div className="table">
        <div className="table-header">
          <div
            className={cn("header-item-wrap", {
              active: sort?.sortBy === "username",
            })}
            onClick={() => handleSort("username")}
          >
            <p>Username</p>
            <img
              className={cn("chevron-icon", {
                ascend:
                  sort?.sortBy === "username" && sort?.sortOrder === "ascend",
              })}
              src={ChevronIcon}
              alt="chevron icon"
            />
          </div>
          <div
            className={cn("header-item-wrap", {
              active: sort?.sortBy === "name",
            })}
            onClick={() => handleSort("name")}
          >
            <p>Name</p>
            <img
              className={cn("chevron-icon", {
                ascend: sort?.sortBy === "name" && sort?.sortOrder === "ascend",
              })}
              src={ChevronIcon}
              alt="chevron icon"
            />
          </div>
          <div
            className={cn("header-item-wrap", {
              active: sort?.sortBy === "email",
            })}
            onClick={() => handleSort("email")}
          >
            <p>Email</p>
            <img
              className={cn("chevron-icon", {
                ascend:
                  sort?.sortBy === "email" && sort?.sortOrder === "ascend",
              })}
              src={ChevronIcon}
              alt="chevron icon"
            />
          </div>
          <div
            className={cn("header-item-wrap", {
              active: sort?.sortBy === "gender",
            })}
            onClick={() => handleSort("gender")}
          >
            <p>Gender</p>
            <img
              className={cn("chevron-icon", {
                ascend:
                  sort?.sortBy === "gender" && sort?.sortOrder === "ascend",
              })}
              src={ChevronIcon}
              alt="chevron icon"
            />
          </div>
          <div
            className={cn("header-item-wrap", {
              active: sort?.sortBy === "date",
            })}
            onClick={() => handleSort("date")}
          >
            <p>Registered Date</p>
            <img
              className={cn("chevron-icon", {
                ascend: sort?.sortBy === "date" && sort?.sortOrder === "ascend",
              })}
              src={ChevronIcon}
              alt="chevron icon"
            />
          </div>
        </div>
        <div className="table-body">
          {!loading ? (
            <>
              {(listData || []).map((item, index) => {
                const { name, gender, email, login, registered } = item || {};
                const { first, last } = name || {};
                const { username } = login || {};
                const { date } = registered || {};

                return (
                  <div key={index} className="table-row-wrap">
                    <div className="table-item-wrap">{username}</div>
                    <div className="table-item-wrap">{`${first} ${last}`}</div>
                    <div className="table-item-wrap">{email}</div>
                    <div className="table-item-wrap">{gender}</div>
                    <div className="table-item-wrap">
                      {moment(date).format("MM-DD-YYYY hh:mm")}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="loading">
              <h2>Loading data ...</h2>
            </div>
          )}
        </div>
        <div
          className={cn("pagination-wrap", {
            disabled: loading,
          })}
        > 
          {Array.from(Array(totalPage), (n, index) => {
            const pageNumber = index + 1;

            return (
              <div
                key={index}
                className={cn("pagination-item", {
                active: page === pageNumber,
                })}
                onClick={() => handlePagination(pageNumber)}
              >
                {pageNumber}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default DataListPage;
