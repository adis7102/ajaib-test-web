import fetcher from "../../fetch/index.js";

export const setLoading = (status) => {
  return {
    type: "LOADING",
    loading: status
  }
};

export const getListData = (url, options) => {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetcher(url, options)
      .then((data) => {
        const { info, results } = data || {};
        const { page } = info || {};

        dispatch({
          type: "GET_LIST_DATA",
          listData: results,
          page
        })
      })
      .catch((e) => console.error(e))
      .finally(() => dispatch(setLoading(false)))
  };
};
