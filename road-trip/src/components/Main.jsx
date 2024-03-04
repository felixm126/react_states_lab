import { Routes, Route } from 'react-router-dom'
import StateList from './StateList'
import StateDetails from './StateDetails'
import states from '../states'

function Main() {
	return (
		<div className="main-container">
			<Routes>
				<Route path="/list" element={<StateList states={states} />} />
				<Route path="/details/:abbreviation" element={<StateDetails />} />
			</Routes>
		</div>
	)
}
export default Main
