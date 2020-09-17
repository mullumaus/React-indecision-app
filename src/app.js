//stateless functional component
//Grab the add function from the add.js file in the utils folder
//Grab React from the react npm module
import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
//props.children is inline template

ReactDOM.render(<IndecisionApp options={['one item', 'two item']} />, document.getElementById('app'))


