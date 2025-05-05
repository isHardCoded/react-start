import styles from './index.module.scss'
import DownArrowIcon from '../../assets/icons/down-arrow-icon.svg'

function ProductPanel() {
	return (
		<div className={styles.panel}>
			<h2>Products</h2>
			<div className={styles.panelMenu}>
				<div>
					<span>Price: Low to High</span>
					<img src={DownArrowIcon} alt='' />
				</div>
				<ul>
					<li>Price: Low to High</li>
					<li>Price: High to Low</li>
					<li>Rating: High to Low</li>
				</ul>
			</div>
		</div>
	)
}

export default ProductPanel
