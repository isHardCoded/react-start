import CartIcon from '../../assets/icons/cart-icon.svg'
import UserIcon from '../../assets/icons/user-icon.svg'
import styles from './index.module.scss'

function Header() {
	return (
		<header className={styles.header}>
			<h3>Logo</h3>
			<nav>
				<ul>
					<li>
						<a href='#'>Главная</a>
					</li>
					<li>
						<a href='#'>Каталог</a>
					</li>
				</ul>
			</nav>
			<div>
				<button>
					<img src={CartIcon} alt='' />
				</button>
				<button>
					<img src={UserIcon} alt='' />
				</button>
			</div>
		</header>
	)
}

export default Header
