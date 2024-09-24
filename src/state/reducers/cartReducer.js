export default function cartReducer(state = { quantity: 0, price: 0 }, action) {
  switch (action.type) {
    case "add":
      return {
        quantity: state.quantity + action.payload,
        price: state.price + action.payload * 6000, // update price based on quantity
      };
    case "subtract":
      return {
        quantity: state.quantity - action.payload,
        price: state.price - action.payload * 6000, // update price based on quantity
      };
    default:
      return state;
  }
}
