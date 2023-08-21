import React, { FC } from 'react'
import { MessageType } from './UniversalInput'
import { Input } from './Input'
import { ButtonForInput } from './ButtonForInput'

type UniversalInput2PropsType = {
	message: MessageType[]
	addMessage: (title: string) => void
	title: string
	setTitle: (title: string) => void
}

export const UniversalInput2: FC<UniversalInput2PropsType> = (props) => {
	const callBackButtonHundler = () => {
		props.addMessage(props.title)
		props.setTitle('')
	}
	return (
		<div>
			<Input title={props.title} setTitle={props.setTitle} />
			<ButtonForInput name={'Add message'} callBack={callBackButtonHundler} />
			{props.message.map((m, index) => {
				return <div key={index}>{m.message}</div>
			})}
		</div>
	)
}
