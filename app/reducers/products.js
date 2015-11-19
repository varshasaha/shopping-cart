import { ADD_PRODUCT, REMOVE_ITEM } from '../constants/ActionTypes'

const products = [{
  id: 1,
  text: "Shampoo",
  added : false,
  quantity : 1
},
{
  id: 2,
  text: "Soap",
  added : false,
  quantity : 1
},{
  id: 3,
  text: "Comb",
  added : false,
  quantity : 1
},
{
  id: 4,
  text: "Scissors",
  added : false,
  quantity : 1
}]

export default function productList(state = products, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return state.map((item) => {
        return item.id === action.id ? Object.assign({}, item, { added: true }) : item
      });

    case REMOVE_ITEM:
      return state.map((item) => {
        return item.id === action.product.id ? Object.assign({}, item, { added: false, quantity: 1 }) : item
      });

    default:
      return state
  }
}