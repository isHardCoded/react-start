import styles from './index.module.css'
import { products } from '../../data/products'
import Card from '../card'

function ProductList() {
	return (
		<>
			<ul className={styles.productList}>
				{products.map(product => (
					<li key={product.id}>
						<Card {...product} />
					</li>
				))}
			</ul>
		</>
	)
}

export default ProductList
