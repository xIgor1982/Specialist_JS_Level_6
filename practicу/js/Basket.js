class Basket extends React.Component {
	constructor(props) {
		super(props)

		this.deleteBasketItem = this.deleteBasketItem.bind(this)
		this.getIndexById = this.getIndexById.bind(this)
	}

	deleteBasketItem(e) {
		e.preventDefault()
		console.log(
			"e.target.getAttribute('data-id')",
			e.target.getAttribute('data-id')
		)
		this.props.handleRemoveBasket(e.target.getAttribute('data-id'))
	}

	getIndexById(id) {
		let resultI
		// console.log('id =>', id)

		// for (let i in this.props.dataBook) {
		// 	if (this.props.dataBook[i].id == id) {
		// 		console.log('getIndexById - for - i =>', i)
		// 		resultI = i
		// 	}
		// }

		this.props.dataBook.forEach((item, index) => {
			if(item.id == id) {
				// console.log('getIndexById - forEach - index =>', index)
				resultI = index
			}
		})
		return resultI
	}

	render() {
		let items = [],
			j,
			sum = 0

		for (let i in this.props.items) {
			j = this.getIndexById(i)
			sum += this.props.items[i] * this.props.dataBook[j]['price']
			items.push(
				<div className='basket-item' key={this.props.dataBook[j]['id']}>
					<a href='#'>&laquo;{this.props.dataBook[j]['title']}&raquo;</a>
					<span>{this.props.items[i]} шт.</span>
					<span>{this.props.dataBook[j]['price']} руб.</span>
					<a
						href='#'
						onClick={this.deleteBasketItem}
						data-id={this.props.dataBook[j]['id']}
					>
						Удалить
					</a>
				</div>
			)
		}

		items.push(
			<div className='basket-item'>
				<hr />
				<span>
					Всего: <b>{sum}</b> руб.
				</span>
			</div>
		)

		// this.props.items.forEach(item => {
		// 	items.push(item)
		// })

		return (
			<div className='basket'>
				<h3>Корзина</h3>
				{items}
			</div>
		)
	}
}
