import React, { FC } from 'react'

type FooterPropsType = {
	titleForHeader: string
}

export const Footer: FC<FooterPropsType> = (props) => {
	return <div>{props.titleForHeader}</div>
}
