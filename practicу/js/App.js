class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: {},
			dataBook: this.props.dataBook,
		}
		this.addBasket = this.addBasket.bind(this)
		this.removeBasket = this.removeBasket.bind(this)
	}

	addBasket(id) {
		// console.log('this.state.items =>', this.state.items)
		const newState = Object.assign({}, this.state.items)
		// const newState = JSON.parse(JSON.stringify(this.state.items))
		// console.log('start => ',newState)
		newState[id] = id in newState ? newState[id] + 1 : 1
		// console.log('newState =>', newState)
		this.setState({ items: newState })
		// console.log('end - this.state =>', this.state)
	}

	removeBasket(id) {
		// console.log('this.state.items =>', this.state.items)
		const currentState = JSON.parse(JSON.stringify(this.state.items))
		const newItem = {}

		for (let i in currentState) {
			// console.log('i =>', i)
			// console.log('id =>', id)
			if (id != i) {
				console.log('newItem[id] =>', newItem[id])
				newItem[i] = currentState[i]
			}
		}

		this.setState({ items: newItem })
		// console.log('end - this.state =>', this.state)
	}

	render() {
		const books = dataBook.map((book, index) => {
			if ('price' in book) {
				// console.log('price +')
				return (
					<Book {...book} key={book['id']} handleAddBasket={this.addBasket} />
				)
			} else {
				// console.log('price -')
				return <BookWithoutPrice {...book} key={book['id']} />
			}
		})

		return (
			<div className='app'>
				<Basket
					items={this.state.items}
					dataBook={this.state.dataBook}
					handleRemoveBasket={this.removeBasket}
				/>
				<AddBookForm />
				<hr />
				<Button value='Кнопка' counter={1} />
				<Welcome name='Василий' />
				{books}
			</div>
		)
	}
}

// const App = () => {
// 	const books = dataBook.map((book, index) =>{
// 		if ('price' in book) {
// 			// console.log('price +')
// 			return <Book {...book} key={book.id} />
// 		} else {
// 			// console.log('price -')
// 			return <BookWithoutPrice {...book} key={book.id} />
// 		}

// 	})

// 	return (
// 		<div className='app'>
// 				<AddBookForm />
// 				<hr />
// 				<Button value='Кнопка' counter={1} />
// 				<Welcome name='Василий' />
// 				{books}
// 		</div>
// 	)
// }
