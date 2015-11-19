import { ADD_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM} from '../constants/ActionTypes'

const initialCart = {
  addedCounter : 0,
  items : []
}

export default function cart(state = initialCart, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      action.product.added = true;
      state =  {
        addedCounter : state.addedCounter+1,
        items : state.items.concat([action.product])
      }
      return state;

    case INCREASE_QUANTITY :
      var prod = action.product;
      state = {
        items : state.items.map((item) => {
          return item.id === prod.id ? Object.assign({},item,{quantity: item.quantity+1}) : item
        }),
        addedCounter : state.addedCounter
      }
      return state;

    case DECREASE_QUANTITY :
      var prod = action.product;
      state = {
        items : state.items.map((item) => {
          return item.id === prod.id ? Object.assign({},item,{quantity: item.quantity-1}) : item
        }),
        addedCounter : state.addedCounter
      }
      return state;

    case REMOVE_ITEM :
      var prod = action.product;
      state = {
        items : state.items.filter((item) => {
                  return item.id !== prod.id;
                }),
        addedCounter : state.addedCounter - 1
      }
      return state;

    default:
      return state
  }
}
