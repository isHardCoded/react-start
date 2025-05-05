import styles from './index.module.scss'
import DownArrowIcon from '../../assets/icons/down-arrow-icon.svg'

function ProductPanel() {
	return (
		<div className={styles.panel}>
			<h2>Products</h2>
			<div>
				<span>Price: Low to High</span>
				<img src={DownArrowIcon} alt='' />
			</div>
		</div>
	)
}

export default ProductPanel
