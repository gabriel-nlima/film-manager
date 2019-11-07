import React, { FC } from 'react'

// interfaces
import { Project, ProjectTypes } from '../../Types'
import { History } from 'history'

// antd components
import Card from 'antd/es/card'
import Divider from 'antd/es/divider'
import Typograph from 'antd/es/typography'
import Tag from 'antd/es/tag'
import Col from 'antd/es/col'
import Row from 'antd/es/row'
import Button from 'antd/es/button'
import Search from 'antd/es/input/Search'

const { Title, Paragraph, Text } = Typograph

interface Props {
	history: History
	projects?: Project[]
}

const projects: Project[] = [
	{ title: 'cena 1', type: ProjectTypes.Gameplay, _id: '1' },
	{ title: 'cena 2', type: ProjectTypes.ShortFilm, _id: '2' },


]

const scriptManage: FC<Props> = ({ history }) => {
	return (
		<Card
			title={
				<>
					<Row>
						<Col xs={14}>
							<Title level={3}>Cenas</Title>
				
							<Button
								type='primary'
								onClick={() => history.push('/scriptManage')}
								className='submitBtn'
								>
								Novo
							</Button>
						
							<Paragraph type='secondary'>
								
							</Paragraph>
							
					</Col>
					<Col xs={10} />
					</Row>
					<Row>
						
						<Col xs={14} sm={16} md={18} lg={20}>
							<Search placeholder='procurar cena' />
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
									pathname: '/formScene',
									state: { project },
								})
							}
							actions={[<Tag color='gold'>Em edição</Tag>]}
						>
							<p>{project.desc}</p>
						</Card>
					</Col>
				))}
			</Row>
		</Card>
	)
}
export default scriptManage
