import styles from './index.module.css'
import Card from '../card'
import React from 'react'

const API_BASE = 'https://fakestoreapi.com/products'

function ProductList() {
	const [products, setProducts] = React.useState([])

	const getData = async () => {
		const response = await fetch(API_BASE)
		const data = await response.json()
		setProducts(data)
	}

	React.useEffect(() => {
		getData()
	}, [])

	console.log(products)

	return (
		<>
			<ul className={styles.productList}>
				{products.map(product => (
					<li></li>
				))}
			</ul>
		</>
	)
}

export default ProductList
