import styles from './index.module.scss'
import DownArrowIcon from '../../assets/icons/down-arrow-icon.svg'
import React from 'react'

const menuItems = [
	'Price: Low to High',
	'Price: High to Low',
	'Rating: High to Low',
]

function ProductPanel() {
	const [open, setOpen] = React.useState(false)
	const [active, setActive] = React.useState(0)

	function handleActiveItem(index) {
		setActive(index)
		setOpen(false)
	}

	return (
		<div className={styles.panel}>
			<h2>Products</h2>
			<div className={styles.panelMenu}>
				<div onClick={() => setOpen(open => !open)}>
					<span>{active != null ? menuItems[active] : menuItems[0]}</span>
					<img src={DownArrowIcon} alt='' />
				</div>
				{open && (
					<ul>
						{menuItems.map((item, index) => (
							<li
								onClick={() => handleActiveItem(index)}
								className={active == index ? styles.active : ''}
							>
								{item}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default ProductPanel
