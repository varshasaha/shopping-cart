import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'

const container = {
  width : '80%',
  margin : '0 auto',
  'textAlign' : 'center',

  list : {
    'listStyle' : 'none',
    background : 'black',
    padding : '10px',
    listItem : {
      display : 'inline-block',
      marginLeft : '5px'
    }
  },

  noTextDecoration : {
    textDecoration : 'none',
    color : 'white'
  }
}

class App extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div style={container}>
        <h1>Shop Shop</h1>
        <ul style={container.list}>
          <li style={container.list.listItem}><Link style={container.noTextDecoration} to="/products">Products |</Link></li>
          <li style={container.list.listItem}><Link style={container.noTextDecoration} to="/cart">Cart</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;