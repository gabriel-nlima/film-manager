import React from 'react'

// interfaces
import { Project, ProjectTypes, GenresTypes } from '../../Types'

// components

//antd components
import Button from 'antd/es/button'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Select from 'antd/es/select'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Card from 'antd/es/card'

interface IProps {
	handleChange?: (value: string, input: string) => void
	onSubmit?: () => void
	project?: Project
}

const { Option } = Select

const FormProject: React.FC<IProps> = ({ project, handleChange, onSubmit }) => {
	return (
		<Card>
			<Form layout='horizontal'>
				<Row>
					<Col xs={12}>
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
					<Button>Cancelar</Button>
					<Button
						type='primary'
						onClick={() => onSubmit && onSubmit()}
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
