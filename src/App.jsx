import './App.css'
import Header from './components/header'
import ProductList from './components/product-list'

import React from 'react'
import ProductPanel from './components/product-panel'

function App() {
	return (
		<>
			<div className='container'>
				<Header />
				<ProductPanel />
				<ProductList />
			</div>
		</>
	)
}

export default App
