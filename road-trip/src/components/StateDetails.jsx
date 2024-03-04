import { useEffect, useState } from 'react'
import states from '../states'
import { Link, useParams } from 'react-router-dom'

const StateDetails = () => {
	const [state, setState] = useState(null)

	const { abbreviation } = useParams()

	useEffect(() => {
		let selectedState = states.states.find(
			(e) => e.abbreviation === abbreviation
		)
		setState(selectedState)
	}, [abbreviation])

	return state ? (
		<div className="state-card">
			<Link to="/list"> Back to States </Link>
			<h3>Abbreviation: {state.abbreviation}</h3>
			<h3>Incorporated: {state.incorporation_date}</h3>
			<h3>Timezone: {state.timezone}</h3>
			<h3>Pizza Quality: {state.quality_of_pizza}</h3>
			<h3>Capital: {state.capital}</h3>
			{state.borders && state.borders.length > 0 && (
				<div>
					<h3>Borders: </h3>
					{state.borders.map((border) => (
						<div className="border-card" key={border}>
							{border}
						</div>
					))}
				</div>
			)}
		</div>
	) : (
		<div>Loading...</div>
	)
}
export default StateDetails
