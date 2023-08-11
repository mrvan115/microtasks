import React, { FC } from 'react'

type NewComponentPropsType = {
	students: StudentType[]
	topCars: TopCarsType[]
}

type StudentType = {
	id: number
	name: string
	age: number
}

type TopCarsType = {
	manufacturer: string
	model: string
}

export const NewComponent: FC<NewComponentPropsType> = (props) => {
	return (
		<div>
			<ul>
				{props.students.map((student) => {
					return (
						<li
							key={student.id}
						>{`name: ${student.name}, age: ${student.age}`}</li>
					)
				})}
			</ul>
			<table>
				{props.topCars.map((car) => {
					return (
						<tr>
							<td>
								{car.manufacturer} {car.model}
							</td>
						</tr>
					)
				})}
			</table>
		</div>
	)
}
