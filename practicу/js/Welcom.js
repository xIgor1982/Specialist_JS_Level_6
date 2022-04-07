class Welcome extends React.Component {
	render() {
		return (
			<div>
				<hr />
				<div className='container'>
					<h1 className='text-center'>Hello, {this.props.name}</h1>
				</div>
				<hr />
			</div>
		)
	}
}
