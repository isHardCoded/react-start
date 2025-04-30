import './App.css'
import ProductList from './components/product-list'

import React from 'react'

function App() {
	const [count, setCount] = React.useState(0)
	const [open, setOpen] = React.useState(false)

	console.log(open)

	return (
		<>
			<div className='container'>
				<ProductList />
			</div>

			<p>Счетчик: {count}</p>
			<button onClick={() => setCount(count + 1)}>Click</button>

			{open && (
				<div>
					<p>Блок</p>
				</div>
			)}

			<button onClick={() => setOpen(open => !open)}>
				{open ? 'Закрыть блок' : 'Открыть блок'}
			</button>
		</>
	)
}

export default App
