const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: true };
    }
    case "SUCCESS": {
      return { products: action.payload, loading: false };
    }
    case "ERROR": {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
