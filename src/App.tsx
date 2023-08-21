import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Header } from './site/Header'
import { Body } from './site/Body'
import { Footer } from './site/Footer'
import { NewComponent } from './components/NewComponent'
import { Button } from './components/Button'
import { UseState } from './components/UseState'
import { FilterType, MethodFilter } from './components/MethodFilter'
import { MessageType, UniversalInput } from './components/Input/UniversalInput'
import { UniversalInput2 } from './components/Input/UniversalInput2'

function App() {
	//map
	const students = [
		{ id: 1, name: 'James', age: 8 },
		{ id: 2, name: 'Robert', age: 18 },
		{ id: 3, name: 'John', age: 28 },
		{ id: 4, name: 'Michael', age: 38 },
		{ id: 5, name: 'William', age: 48 },
		{ id: 6, name: 'David', age: 58 },
		{ id: 7, name: 'Richard', age: 68 },
		{ id: 8, name: 'Joseph', age: 78 },
		{ id: 9, name: 'Thomas', age: 88 },
		{ id: 10, name: 'Charles', age: 98 },
		{ id: 11, name: 'Christopher', age: 100 }
	]

	const topCars = [
		{ manufacturer: 'BMW', model: 'm5cs' },
		{ manufacturer: 'Mercedes', model: 'e63s' },
		{ manufacturer: 'Audi', model: 'rs6' }
	]
	//-----------------------------------------------------------------------------------------------------
	//button

	const Button1Foo = (subscriber: string, age: number) => {
		console.log(subscriber, age)
	}

	const Button2Foo = (subscriber: string) => {
		console.log(subscriber)
	}

	const Button3Foo = () => {
		console.log('Im stupid button')
	}
	//-----------------------------------------------------------------------------------------------------
	//useState
	let [a, setA] = useState(1)

	const onClickHandlerPlus = () => {
		setA(++a)
		console.log(a)
	}

	const onClickHandlerReset = () => {
		setA(0)
		console.log(a)
	}
	//-----------------------------------------------------------------------------------------------------
	//filter
	const [money, setMoney] = useState([
		{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' w1234567890' },
		{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' r1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
		{ banknots: 'RUBLS', value: 50, number: ' v1234567890' }
	])

	const [filter, setFilter] = useState<FilterType>('all')

	let currentMoney = money
	if (filter === 'rubls') {
		currentMoney = money.filter(
			(filteredMoney) => filteredMoney.banknots === 'RUBLS'
		)
	}
	if (filter === 'dollar') {
		currentMoney = money.filter(
			(filteredMoney) => filteredMoney.banknots === 'Dollars'
		)
	}
	const onFilterHandler = (nameButton: FilterType) => {
		setFilter(nameButton)
	}

	//-----------------------------------------------------------------------------------------------------
	//input
	const [message, setMessage] = useState<MessageType[]>([
		{ message: 'message1' },
		{ message: 'message2' },
		{ message: 'message3' }
	])

	let [title, setTitle] = useState('')

	const addMessage = (title: string) => {
		let newMessage = { message: title }
		setMessage([newMessage, ...message])
	}
	return (
		<div className='App'>
			<Header title={'NEW HEADER'} />
			<Body titleForBody={'NEW BODY'} />
			<Footer titleForHeader={'NEW HEADER'} />
			{/*map*/}
			<NewComponent students={students} topCars={topCars} />
			{/*button*/}
			<Button
				name={'MyYouTybeChanel-1'}
				callBack={() => Button1Foo('Igor', 25)}
			/>
			<Button name={'MyYouTybeChanel-2'} callBack={() => Button2Foo('Ivan')} />
			<Button name={'Stupid'} callBack={Button3Foo} />
			<UseState
				initialState={a}
				onClickHandlerPlus={onClickHandlerPlus}
				onClickHandlerReset={onClickHandlerReset}
			/>
			<MethodFilter money={currentMoney} onFilterHandler={onFilterHandler} />
			<UniversalInput message={message} addMessage={addMessage} />
			<UniversalInput2
				message={message}
				addMessage={addMessage}
				title={title}
				setTitle={setTitle}
			/>
		</div>
	)
}

export default App
