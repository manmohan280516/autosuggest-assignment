export const setDetailsData = (data) => (dispatch) => {
  dispatch({
    type: "DETAILS_SUCCESS",
    payload: data,
  });
};
