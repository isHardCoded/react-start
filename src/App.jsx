import Card from './components/Card'

const products = [
	{
		id: 1,
		title: 'Phone',
		description: 'About phone',
		price: 450,
	},

	{
		id: 2,
		title: 'TV',
		description: 'About TV',
		price: 235,
	},

	{
		id: 3,
		title: 'Fridge',
		description: 'About Fridge',
		price: 125,
	},
]

function App() {
	return (
		<>
			<ul>
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
