const siteNameReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_SITE":
        return {
          siteSelected: action.data,
        };

      default:
        return action.data;
    }
  };
  return reducer;
};

export default siteNameReducer;
