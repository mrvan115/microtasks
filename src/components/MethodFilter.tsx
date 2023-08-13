import React, { FC } from 'react'

type MethodFilterPropsType = {
	money: MoneyType[]
	onFilterHandler: (nameButton: FilterType) => void
}

type MoneyType = {
	banknots: string
	value: number
	number: string
}

export type FilterType = 'all' | 'dollar' | 'rubls'

export const MethodFilter: FC<MethodFilterPropsType> = (props) => {
	return (
		<div>
			<ul>
				{props.money.map((m, index) => {
					return (
						<li key={index}>
							<span>{m.banknots}</span>
							<span>{m.value}</span>
							<span>{m.number}</span>
						</li>
					)
				})}
			</ul>
			<button onClick={() => props.onFilterHandler('all')}>all</button>
			<button onClick={() => props.onFilterHandler('rubls')}>rubls</button>
			<button onClick={() => props.onFilterHandler('dollar')}>dollar</button>
		</div>
	)
}
