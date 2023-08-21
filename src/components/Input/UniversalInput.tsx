import React, { FC } from 'react'
import { FullInput } from './FullInput'

type UniversalInputPropsType = {
	message: MessageType[]
	addMessage: (title: string) => void
}

export type MessageType = {
	message: string
}

export const UniversalInput: FC<UniversalInputPropsType> = (props) => {
	return (
		<div>
			<FullInput addMessage={props.addMessage} />
			{props.message.map((m, index) => {
				return <div key={index}>{m.message}</div>
			})}
		</div>
	)
}
