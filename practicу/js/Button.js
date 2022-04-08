class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: props.counter,
			color: 'btn-success',
			// colorsNum: 0,
			// colors: [
			// 	'btn-primary',
			// 	'btn-secondary',
			// 	'btn-success',
			// 	'btn-danger',
			// 	'btn-warning',
			// 	'btn-info',
			// 	'btn-light',
			// 	'btn-dark',
			// ],
			// timer: 1000
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleMouseMove = this.handleMouseMove.bind(this)
		// this.timerTic = this.timerTic.bind(this)

	}

	handleClick(e) {
		this.setState({ counter: this.state.counter + 1 })
	}

	handleMouseMove(e) {
		console.log(e)
	}

	// async timerTic(){
	// 	 await setTimeout(() => {			
	// 		if (this.state.colorsNum == this.state.colors.length) {
	// 			this.setState({ colorsNum: 0 })
	// 		}

	// 		console.log('state.colorsNum = ', this.state.colorsNum)

	// 		this.setState({
	// 			color: this.state.colors[this.state.colorsNum],
	// 			colorsNum: this.state.colorsNum + 1,
	// 		})
	// 	}, this.state.timer)
	// }

	render() {
		// this.timerTic()

		return (
			<div className='container'>
				<button
					type='button'
					className={'btn ' + this.state.color + ' btn-lg'}
					onClick={this.handleClick}
				>
					{this.props.value}-{this.state.counter}
				</button>
			</div>
		)
	}
}

// const Button = props => {
// 	const {useState} = React

// 	const [counter, setCounter] = useState(1)
// 	const [color, setColor] = useState('btn-primary')

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
