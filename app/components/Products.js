import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addProduct } from '../actions/ShoppingCart'
import { Router, Route, Link, IndexRoute } from 'react-router'


const productList = {
	products : {
		border : '2px solid',
		display : 'inline-block',
		margin : '20px',
		padding: '20px',
		clear: 'both'
	},

	textCenter : {
		'textAlign' : 'center'
	},

	marginTop : {
		'marginTop' : '10px'
	},

	added : {
		color: 'green',
		'fontWeight' : 'bold'
	},

	floatRight : {
		float: 'right'
	},

	noTextDecoration : {
	    textDecoration : 'none',
	    color : 'black'
	}
}

class Products extends Component {
	constructor () {
		super ();
	}

	addToCart (id, prod) {
    	this.props.addProduct(id, prod);
  	}

	render () {
		const { products, shoppingCart,  addProduct } = this.props
		return (
			<div>
			  <div style={productList.floatRight}>
		        <Link style={productList.noTextDecoration} to="/cart">Cart</Link><span style={productList.added}>({shoppingCart.addedCounter})</span>
		      </div>
		      {
		        products.map((prod) => {
		          return <div key={prod.id} style={productList.products}>
		                    <div style={productList.textCenter}>
		                    	<span>{prod.text}</span>
		                    </div>
		                    <div style={productList.textCenter, productList.marginTop}>
		                    	{!prod.added && <button onClick={this.addToCart.bind(this,prod.id, prod)}>Add to Cart</button>}
		                    	{prod.added && <span style={productList.added}>Added</span>}
		                    </div>
		                  </div>
		        })
		      }
      		</div>
		)
	}
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  shoppingCart: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.products,
    shoppingCart : state.shoppingCart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addProduct }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)