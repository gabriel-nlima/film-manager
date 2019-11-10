import React, { FC } from 'react'

// interfaces
import { Project, ProjectTypes } from '../../Types'
import { History } from 'history'

// antd components
import { Typography, Card, Row, Col, Button, Divider, Tag, Input } from 'antd'
import { useAxios } from '../../hooks'

const { Title, Paragraph, Text } = Typography
const { Search } = Input

interface Props {
	history: History
	projects?: Project[]
}

const projects: Project[] = [
	{ title: 'projeto 1', type: ProjectTypes.Gameplay, _id: '1' },
	{ title: 'projeto 2', type: ProjectTypes.ShortFilm, _id: '2' },
	{ title: 'projeto 2.1', type: ProjectTypes.ShortFilm, _id: '2.1' },
	{ title: 'projeto 2.2', type: ProjectTypes.ShortFilm, _id: '2.2' },
	{
		title: 'projeto 3',
		type: ProjectTypes.Film,
		desc: 'projeto piloto blah blah blah',
		_id: '3',
	},
]

const Projects: FC<Props> = ({ history }) => {
	const { isError, isLoading } = useAxios('GET', '/api/users')

	console.log(isLoading, isError)
	// const sendData = async () => {
	// 	const [data, error] = await send('GET', '/api/users');
	// 	console.log(data, error);
	// };
	// sendData();

	return (
		<Card
			title={
				<>
					<Row>
						<Col xs={14}>
							<Title level={3}>Projetos do Film Manager</Title>
							<Paragraph type='secondary'>
								Gerencie suas produções audivisuais.
							</Paragraph>
						</Col>
						<Col xs={10} />
					</Row>
					<Row>
						<Col xs={14} sm={16} md={18} lg={20}>
							<Search placeholder='procurar projeto' />
						</Col>
						<Col
							xs={10}
							sm={8}
							md={6}
							lg={4}
							style={{ textAlign: 'right' }}
						>
							<Button icon='filter' />
							<Divider type='vertical' />
							<Button icon='sort-ascending' />
						</Col>
					</Row>
				</>
			}
		>
			{' '}
			<Row gutter={8}>
				{projects.map((project) => (
					<Col
						key={project.title}
						xs={24}
						sm={12}
						md={12}
						lg={8}
						xl={8}
					>
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
							onClick={() =>
								history.push({
									pathname: '/manageProject',
									state: { project },
								})
							}
							actions={[<Tag color='gold'>Pré-produção</Tag>]}
						>
							<p>{project.desc}</p>
						</Card>
					</Col>
				))}
			</Row>
		</Card>
	)
}

export default Projects
