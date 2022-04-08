class AddBookForm extends React.Component {
	constructor(prop) {
		super(prop)
		this.state = {
			id: null,
			title: '',
			author: '',
			price: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		const newState = {}
		newState[e.target.name] = e.target.value
		this.setState(newState)
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state)
		// console.log(dataBook)		
	}

	render() {
		return (
			<div className='container'>
				<h1 className='text-center'>Добавить книгу</h1>
				<form action='' onSubmit={this.handleSubmit}>
					<label className='row'>
						<div className='col-sm-2'>id</div>
						<div className='col-sm-10'>
							<input
								name='id'
								className='w-100'
								onChange={this.handleChange}
								defaultValue={this.state.id}
							/>
						</div>
					</label>
					<label className='row'>
						<div className='col-sm-2'>Название</div>
						<div className='col-sm-10'>
							<input
								name='title'
								className='w-100'
								onChange={this.handleChange}
								defaultValue={this.state.title}
							/>
						</div>
					</label>
					<label className='row'>
						<div className='col-sm-2'>Авторы</div>
						<div className='col-sm-10'>
							<input
								name='author'
								className='w-100'
								onChange={this.handleChange}
								defaultValue={this.state.author}
							/>
						</div>
					</label>
					<label className='row'>
						<div className='col-sm-2'>Цена</div>
						<div className='col-sm-10'>
							<input
								name='price'
								className='w-100'
								onChange={this.handleChange}
								defaultValue={this.state.price}
							/>
						</div>
					</label>
					<div>
						<input
							type='submit'
							className='btn btn-success w-100'
							value='Добавить'
						/>
					</div>
				</form>
			</div>
		)
	}
}
