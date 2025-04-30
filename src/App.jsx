import Card from './components/card'
import './App.css'
import { products } from './data/products'

function App() {
	return (
		<>
			<ul className='product-list'>
				{products.map(product => (
					<li key={product.id}>
						<Card {...product} />
					</li>
				))}
			</ul>
		</>
	)
}

export default App
