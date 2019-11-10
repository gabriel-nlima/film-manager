import React, { useState } from 'react'

// interfaces
import { Project, GenresTypes } from '../../Types'
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
import Modal from 'antd/es/modal'
import TextArea from 'antd/es/input/TextArea'
import DatePicker from 'antd/es/date-picker'
import TimePicker from 'antd/es/time-picker'
import List from 'antd/es/list'
import Avatar from 'antd/es/avatar'

interface Props {
	handleChange?: (value: string, input: string) => void
	onSubmit?: () => void
	project?: Project
	history: History
}

const { Option } = Select
const { Title } = Typograph

const FormScene: React.FC<Props> = ({
	project,
	handleChange,
	onSubmit,
	history,
}) => {
	/* Funções da Modal de criar falas*/

	const [visible, setVisible] = useState(false)

	const showModal = (event: React.FormEvent<HTMLElement>) => {
		setVisible(true)
	}

	const handleOk = (event: React.FormEvent<HTMLElement>) => {
		setVisible(false)
	}

	const handleCancel = (event: React.FormEvent<HTMLElement>) => {
		setVisible(false)
	}

	const data = [
		{
			title: 'Gloria Swanson',
		},
	]

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
					{project && project._id ? 'Editar Cena' : 'Nova Cena'}
				</Title>
			</Col>
		</Row>
	)

	return (
		<Card title={FormHeader}>
			<Form layout='horizontal'>
				<Row gutter={16}>
					<Col xs={12}>
						<Form.Item label='Título'>
							<Input></Input>
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

				<Col xs={7}>
					<Form.Item>
						<DatePicker name='Data' placeholder='Data'></DatePicker>
					</Form.Item>
				</Col>

				<Row gutter={2}>
					<Col>
						<Form.Item>
							<TimePicker placeholder='Hora'></TimePicker>
						</Form.Item>
					</Col>
				</Row>

				<Row>
					<Button
						type='primary'
						className='submitBtn'
						onClick={showModal}
					>
						Adicionar Dialogo
					</Button>

					<Form.Item>
						<Modal
							title='Basic Modal'
							visible={visible}
							onOk={handleOk}
							onCancel={handleCancel}
						>
							<Form.Item label='Personagem'></Form.Item>

							<Form.Item label='Fala'>
								<TextArea />
							</Form.Item>
						</Modal>
					</Form.Item>
				</Row>

				<Row>
					<List
						itemLayout='horizontal'
						dataSource={data}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									avatar={
										<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
									}
									title={
										<a href='https://ant.design'>
											{item.title}
										</a>
									}
									description='Eu sou grande. Os filmes é que ficaram pequenos.'
								/>
							</List.Item>
						)}
					/>
					,
				</Row>

				<Row>
					<Col xs={24}>
						<Form.Item label='Observações da edição'>
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

export default FormScene
