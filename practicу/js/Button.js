class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: props.counter,
			color: 'btn-primary',
		}
	}

	render() {
		setTimeout(() => {
			const nextColor = this.state.color == 'btn-primary' ? 'btn-success' : 'btn-primary'
			this.setState({ color: nextColor })
		}, 1000)
		return (
			<div className='container pt-3'>
				<button
					type='button'
					className={'btn ' + this.state.color + ' btn-lg'}
					onClick={() => {
						this.setState({
							counter: this.state.counter + 1,
						})
					}}
				>
					{this.props.value}-{this.state.counter}
				</button>
			</div>
		)
	}
}

// const Button = props => {
// 	const [counter, setCounter] = React.useState(1)
// 	const [color, setColor] = React.useState('btn-primary')

// 	setTimeout(() => {
// 		const nextColor = color == 'btn-primary' ? 'btn-success' : 'btn-primary'
// 		setColor(nextColor)
// 	}, 1000)

// 	return (
// 		<div className='container pt-3'>
// 			<button
// 				type='button'
// 				className={'btn ' + color + ' btn-lg'}
// 				onClick={() => {
// 					setCounter(counter + 1)
// 				}}
// 			>
// 				{props.value}-{counter}
// 			</button>
// 		</div>
// 	)
// }
