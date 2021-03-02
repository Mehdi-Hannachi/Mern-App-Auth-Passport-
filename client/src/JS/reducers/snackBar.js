const initState = {
  msg: null,
  status: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SHOW_SNACKBAR":
      return { ...state, show: true, ...action.payload }; //payload {msg , status  }
    case "HIDE_SNACKBAR":
      return { ...state, msg: null, status: null, show: false };
    default:
      return state;
  }
};
