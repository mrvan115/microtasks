import React, { FC } from 'react'

type HeaderPropsType = {
	title: string
}

export const Header: FC<HeaderPropsType> = (props) => {
	return <>{props.title}</>
}
