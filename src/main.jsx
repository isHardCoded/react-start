import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import CatalogPage from './pages/catalog'

createRoot(document.getElementById('root')).render(
	<Router>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/catalog' element={<CatalogPage />} />
		</Routes>
	</Router>
)
