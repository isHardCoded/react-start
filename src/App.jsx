import './App.css'
import Header from './components/header'
import ProductList from './components/product-list'

import React from 'react'

function App() {
	return (
		<>
			<div className='container'>
				<Header />
				<ProductList />
			</div>
		</>
	)
}

export default App
