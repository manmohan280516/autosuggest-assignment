export const detailsReducer = (state = { details: {} }, action) => {
  switch (action.type) {
    case "DETAILS_LOADING":
      return { loading: true, details: {} };
    case "DETAILS_SUCCESS":
      return { loading: false, details: action.payload };
    case "DETAILS_FAILED":
      return { loading: false, error: "error" };
    default:
      return state;
  }
};
