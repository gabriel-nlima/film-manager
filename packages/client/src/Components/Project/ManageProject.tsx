import React, { FC, useState } from 'react'

//interfaces
import { Project, ProjectPhases } from '../../Types'
import { Location, History } from 'history'

// antd components
import Typograph from 'antd/es/typography'
import Col from 'antd/es/col'
import Row from 'antd/es/row'
import Button from 'antd/es/button'
import Card from 'antd/es/card'
import Steps from 'antd/es/steps'
import Icon from 'antd/es/icon'

interface Props {
	location: Location<{ project: Project }>
	history: History
}

const { Title, Text, Paragraph } = Typograph

const ManageProject: FC<Props> = ({ location, history }) => {
	const { project } = location.state

	const [step, setStep] = useState(0)
	return (
		<Card
			title={
				<Row>
					<Col xs={20}>
						<Title level={3}>
							<Button
								icon='left'
								size='large'
								className='backButton'
								onClick={() => history.push('/projects')}
							/>
							{project.title}
						</Title>
						<Paragraph type='secondary'>{project.type}</Paragraph>
						<Text type='secondary'>{project.desc}</Text>
					</Col>
					<Col xs={4} style={{ textAlign: 'right' }}>
						<Button type='dashed' icon='edit'>
							Editar
						</Button>
					</Col>
				</Row>
			}
		>
			<Row style={{ marginBottom: '15px' }}>
				<Steps current={step}>
					<Steps.Step
						title={
							<span
								onClick={() => setStep(0)}
								style={{ cursor: 'pointer' }}
							>
								{ProjectPhases.PreProduction}
							</span>
						}
						icon={<Icon type={'coffee'} />}
						description='Planejamento'
					/>
					<Steps.Step
						title={
							<span
								onClick={() => setStep(1)}
								style={{ cursor: 'pointer' }}
							>
								{ProjectPhases.Production}
							</span>
						}
						icon={<Icon type={'video-camera'} />}
						description='Execução'
					/>
					<Steps.Step
						title={
							<span
								onClick={() => setStep(2)}
								style={{ cursor: 'pointer' }}
							>
								{ProjectPhases.PosProduction}
							</span>
						}
						icon={<Icon type={'check'} />}
						description='Finalização'
					/>
				</Steps>
			</Row>
			<Row align='middle'>
				<Col xs={10}>Conteudo de {ProjectPhases.PreProduction}</Col>
				<Col xs={14} style={{ textAlign: 'right' }}>
					<Button onClick={() => setStep(step + 1)}>Concluir</Button>
				</Col>
			</Row>
		</Card>
	)
}
export default ManageProject
