import React, { FC } from 'react'

//interfaces
import { Project, ProjectTypes } from '../../Types'

// components
import ProjectCard from '../ProjectCard'

// antd components
import Row from 'antd/es/row'
import Col from 'antd/es/col'

interface Props {
	projects?: Project[]
}

const projects: Project[] = [
	{ title: 'projeto 1', type: ProjectTypes.gameplay, _id: '1' },
	{ title: 'projeto 2', type: ProjectTypes.shortFilm, _id: '2' },
	{ title: 'projeto 2.1', type: ProjectTypes.shortFilm, _id: '2.1' },
	{ title: 'projeto 2.2', type: ProjectTypes.shortFilm, _id: '2.2' },
	{
		title: 'projeto 3',
		type: ProjectTypes.film,
		desc: 'projeto piloto blah blah blah',
		_id: '3',
	},
]

const Home: FC<Props> = () => {
	return (
		<Row gutter={4}>
			{projects.map((project, index) => (
				<Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
					<ProjectCard
						project={project}
						showMore={(p) => console.log(p)}
					/>
				</Col>
			))}
		</Row>
	)
}

export default Home
