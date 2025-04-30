import styles from './index.module.css'

function Card({ title, description, price }) {
	return (
		<div className={styles.card}>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div>
				<p>
					Цена: $<span>{price}</span>
				</p>
				<button>Добавить в корзину</button>
			</div>
		</div>
	)
}

export default Card
