import { useNavigate } from 'react-router-dom'

const StateList = (props) => {
	let navigate = useNavigate()

	const showState = (state) => {
		navigate(`/details/${state.abbreviation}`)
	}

	return (
		<div className="state-grid">
			{props.states.states.map((state) => (
				<div
					className="state-card"
					onClick={() => showState(state)}
					key={state.abbreviation}
				>
					<h3>{state.name}</h3>
				</div>
			))}
		</div>
	)
}
export default StateList
