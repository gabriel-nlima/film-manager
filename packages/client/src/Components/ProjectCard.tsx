import React, { FC } from 'react'

// interfaces
import { Project } from '../Types'

// antd components
import Card from 'antd/es/card'
import Divider from 'antd/es/divider'
import Typograph from 'antd/es/typography'
import Tag from 'antd/es/tag'

const { Text } = Typograph

interface IProps {
	project: Project
	showMore?: (project: Project) => void
}

const ProjectCard: FC<IProps> = ({ project, showMore }) => {
	return (
		<Card
			title={
				<span>
					{project.title}
					<Divider type='vertical' />
					<Text type='secondary'>
						<small>{project.type}</small>
					</Text>
				</span>
			}
			style={{ marginBottom: 5 }}
			hoverable
			onClick={() => showMore && showMore(project)}
			actions={[<Tag color='gold'>Pré-produção</Tag>]}
		>
			<p>{project.desc}</p>
		</Card>
	)
}

export default ProjectCard
