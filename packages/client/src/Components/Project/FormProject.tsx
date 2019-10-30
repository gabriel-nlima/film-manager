import React from 'react'

// interfaces
import { Project, ProjectTypes, GenresTypes } from '../../Types'
import { History } from 'history'

// components

//antd components
import Button from 'antd/es/button'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Select from 'antd/es/select'
import Typograph from 'antd/es/typography'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Card from 'antd/es/card'

interface Props {
	handleChange?: (value: string, input: string) => void
	onSubmit?: () => void
	project?: Project
	history: History
}

const { Option } = Select
const { Title, Text, Paragraph } = Typograph

const FormProject: React.FC<Props> = ({
	project,
	handleChange,
	onSubmit,
	history,
}) => {
	const FormHeader = (
		<Row>
			<Col xs={18}>
				<Title level={3}>
					<Button
						icon='left'
						size='large'
						className='backButton'
						onClick={() => history.push('/projects')}
					/>
					{project && project._id ? 'Editar projeto' : 'Novo projeto'}
				</Title>
				<Paragraph ellipsis type='secondary'>
					Projeto é uma produção audiovisual de qualquer tipo.
				</Paragraph>
				<Text type='secondary'>
					Organize e gerencie sua produção e fases com o Film Manager
				</Text>
			</Col>
		</Row>
	)

	return (
		<Card title={FormHeader}>
			<Form layout='horizontal'>
				<Row>
					<Col xs={24} md={12}>
						<Form.Item label='Título'>
							<Input
								onChange={(e) =>
									handleChange &&
									handleChange(e.target.value, 'title')
								}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col xs={12}>
						<Form.Item label='Tipo'>
							<Select>
								{Object.values(ProjectTypes).map((type) => (
									<Option key={type} value={type}>
										{type}
									</Option>
								))}
							</Select>
						</Form.Item>
					</Col>
					<Col xs={12}>
						<Form.Item label='Gênero'>
							<Select>
								{Object.values(GenresTypes).map((type) => (
									<Option key={type} value={type}>
										{type}
									</Option>
								))}
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col xs={24}>
						<Form.Item label='Descrição'>
							<Input.TextArea
								rows={3}
								onChange={(e) =>
									handleChange &&
									handleChange(e.target.value, 'desc')
								}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Form.Item className='submit'>
					<Button onClick={() => history.push('/projects')}>
						Cancelar
					</Button>
					<Button
						type='primary'
						onClick={() => history.push('/scriptManage')}
						className='submitBtn'
					>
						Salvar
					</Button>
				</Form.Item>
			</Form>
		</Card>
	)
}

export default FormProject
