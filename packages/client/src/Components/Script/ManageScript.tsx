import React, { FC, useState } from 'react'

//interfaces
import { Project, Phases } from '../../Types'
import { Location, History } from 'history'

//components
import PreProduction from '../Project/PreProduction'

// antd components
import Typograph from 'antd/es/typography'
import Tabs from 'antd/es/tabs'
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
const { TabPane } = Tabs

const ManageScript: FC<Props> = ({ location, history }) => {
	const { project } = location.state

	const [step, setStep] = useState(0)
	return (
		<Card
			title={
				<Row>
					<Col xs={19}>
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
					<Col xs={5} style={{ textAlign: 'right' }}>
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
								{Phases.PreProduction}
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
								{Phases.Production}
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
								{Phases.PosProduction}
							</span>
						}
						icon={<Icon type={'check'} />}
						description='Finalização'
					/>
				</Steps>
			</Row>
			<Tabs activeKey={`${step}`} renderTabBar={() => <></>}>
				<TabPane tab={Phases.PreProduction} key='0'>
					<PreProduction onFinishPhase={() => setStep(step + 1)} />
				</TabPane>
				<TabPane tab={Phases.PreProduction} key='1'>
					<Row align='middle'>
						<Col xs={10}>
							Conteudo de {Phases.Production} [TODO]
						</Col>
						<Col xs={14} style={{ textAlign: 'right' }}>
							<Button
								type='primary'
								onClick={() => setStep(step + 1)}
							>
								Concluir
							</Button>
						</Col>
					</Row>
				</TabPane>
				<TabPane tab={Phases.PreProduction} key='2'>
					<Row align='middle'>
						<Col xs={10}>
							Conteudo de {Phases.PosProduction} [TODO]
						</Col>
						<Col xs={14} style={{ textAlign: 'right' }}>
							<Button
								type='primary'
								onClick={() => setStep(step + 1)}
							>
								Concluir
							</Button>
						</Col>
					</Row>
				</TabPane>
			</Tabs>
		</Card>
	)
}
export default ManageScript
