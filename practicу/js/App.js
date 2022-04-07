const App = () => {
	const books = dataBook.map((book, index) => <Book {...book} key={book.id} />)

	return (
		<div className='app'>
				<Button value='Кнопка' counter={1} />
				<Welcome name='Василий' />
				{books}			
		</div>
	)
}
