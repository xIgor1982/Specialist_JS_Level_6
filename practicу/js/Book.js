// const Book = (props) => {
// 	let { title, author, price } = props
// 	const h1Style = {
// 		color: '#369',
// 		fontFamily: 'sans-serif',
// 	}
// 	const formatPrice = price => (price ? <b>{price}</b> : <del>0</del>)

// 	return (
// 		<div className='book'>
// 			<h3 style={h1Style}>{title}</h3>
// 			<p>Автор: {author}</p>
// 			<p>Цена: {formatPrice(price)} руб.</p>
// 			<hr />
// 		</div>
// 	)
// }

class Book extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: false,
		}
	}

	render() {
		let { title, author, price } = this.props
		const h1Style = {
			color: '#369',
			fontFamily: 'sans-serif',
		}
		const formatPrice = price => (price ? <b>{price}</b> : <del>0</del>)
		const statusBook = this.state.selected ? 'book-selected' : 'book-default'

		return (
			<div className={'book ' + statusBook}>
				<hr />
				<div className='container'>
					<h3 style={h1Style}>{title}</h3>
					<p>Автор: {author}</p>
					<p>Цена: {formatPrice(price)} руб.</p>
					<a
						type='button'
						className='btn btn-success'
						href='#'
						onClick={() => {
							this.setState({ selected: !this.state.selected })
						}}
					>
						Сравнить
					</a>
					&nbsp;
					<a type='button' className='btn btn-success' href='#'>
						В корзину
					</a>
				</div>
				<hr />
			</div>
		)
	}
}
