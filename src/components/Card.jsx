function Card({ title, desc, price }) {
	return (
		<div>
			<h3>{title}</h3>
			<p>{desc}</p>
			<p>Цена: ${price}</p>
			<button>Нажать</button>
		</div>
	)
}

export default Card
