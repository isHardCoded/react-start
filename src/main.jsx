import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'

createRoot(document.getElementById('root')).render(
	<Router>
		<Routes>
			<Route path='/' element={<HomePage />} />
		</Routes>
	</Router>
)
