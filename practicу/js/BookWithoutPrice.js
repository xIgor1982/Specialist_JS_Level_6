class BookWithoutPrice extends React.Component {
	render() {
		let { title, author } = this.props
		const h1Style = {
			color: '#369',
			fontFamily: 'sans-serif',
		}
		return (
			<div className={'book '}>
				<hr />
				<div className='container'>
					<h3 style={h1Style}>{title}</h3>
					<p>Автор: {author}</p>
					<p>Цена: <del>&nbsp;</del> руб.</p>
				</div>
				<hr />
			</div>
		)
	}
}
