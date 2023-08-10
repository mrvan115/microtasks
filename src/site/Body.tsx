import React, { FC } from 'react'

type BodyPropsType = {
	titleForBody: string
}

export const Body: FC<BodyPropsType> = (props) => {
	return <div>{props.titleForBody}</div>
}
