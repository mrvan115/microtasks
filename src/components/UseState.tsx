import React, { FC } from 'react'

type UseStatePropsType = {
	initialState: number
	onClickHandlerPlus: () => void
	onClickHandlerReset: () => void
}

export const UseState: FC<UseStatePropsType> = (props) => {
	return (
		<div>
			<h1>{props.initialState}</h1>
			<button onClick={props.onClickHandlerPlus}>number</button>
			<button onClick={props.onClickHandlerReset}>0</button>
		</div>
	)
}
