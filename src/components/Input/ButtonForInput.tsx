import React, { FC } from 'react'

type ButtonForInput = {
	name: string
	callBack: () => void
}

export const ButtonForInput: FC<ButtonForInput> = (props) => {
	const onClickButtonHandler = () => {
		props.callBack()
	}

	return <button onClick={onClickButtonHandler}>{props.name}</button>
}
