import React, { FC } from 'react'

type ButtonPropsType = {
	name: string
	callBack: () => void
}

export const Button: FC<ButtonPropsType> = (props) => {
	const onClickHandler = () => {
		props.callBack()
	}

	return <button onClick={onClickHandler}>{props.name}</button>
}
