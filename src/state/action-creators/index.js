export const addQuantity = (quantity) => {
  return (dispatch) => {
    // It takes a function and return that function. As you can see that it takes the function named dispatch and then return this function. Note that dispatch is a builtin function.
    dispatch({
      type: "add",
      payload: quantity,
    });
  };
};

export const subtractQuantity = (quantity) => {
  return (dispatch) => {
    // It takes a function and return that function. As you can see that it takes the function named dispatch and then return this function. Note that dispatch is a builtin function.
    dispatch({
      type: "subtract",
      payload: quantity,
    });
  };
};
