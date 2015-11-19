import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ShoppingCartActions from '../actions/ShoppingCart'

const cart = {
	margin : '10px auto',
	padding : '10px',
	width : '70%',
	border : '2px solid',
	table : {
		width : '100%'
	}
}

class Cart extends Component {
	constructor () {
		super ();
	}

	increaseQuant (prod) {
	    this.props.actions.increaseQuant(prod);
	}

	decreaseQuant (prod) {
	    this.props.actions.decreaseQuant(prod);
	}

	removeItem (prod) {
	    this.props.actions.removeItem(prod);
	}

	render () {
		const {shoppingCart, actions} = this.props;
		return (
	      <div style={cart}>
	          <div>
	          <table style={cart.table}>
            		<thead>
            			<tr>
            				<th>
            					Item
            				</th>
            				<th>
            					Quantity
            				</th>
            				<th>
            					Increase Quantity
            				</th>
            				<th>
            					Decrease Quantity / Remove Item
            				</th>
            			</tr>
            		</thead>
            		<tbody>
			            {
			              shoppingCart.items.map((prod) => {
			                return <tr key={prod.id}>
			                          <td>{prod.text}</td>
			                          <td>{prod.quantity}</td>
			                          <td><button onClick={this.increaseQuant.bind(this,prod)}>+</button></td>
			                          <td>{prod.quantity > 1 && <button onClick={this.decreaseQuant.bind(this,prod)}>-</button>}
			                          {prod.quantity <= 1 && <button onClick={this.removeItem.bind(this,prod)}>x</button>}</td>
			                        </tr>
			              })
			            }
			        </tbody>
			    </table>
	          </div>
	       </div>
		)
	}
}

Cart.propTypes = {
  actions: PropTypes.object.isRequired,
  shoppingCart: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    shoppingCart : state.shoppingCart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ShoppingCartActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)