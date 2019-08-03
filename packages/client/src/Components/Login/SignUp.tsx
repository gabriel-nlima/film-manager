import React, { FC } from 'react'

// interfaces
import { History } from 'history'

// antd components
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Form from 'antd/es/form'
import Button from 'antd/es/button'
import Input from 'antd/es/input'
import Checkbox from 'antd/es/checkbox'

// components

interface Props {
	history: History
}

const SingUp: FC<Props> = ({ history }) => {
	const singUp = (event: React.FormEvent<HTMLElement>) => {
		event.preventDefault()
		history.push('/projects')
	}

	return (
		<Row type='flex' justify='center'>
			<Col>
				<Form style={{ maxWidth: '300px' }}>
					<Form.Item label='E-mail'>
						<Input />
					</Form.Item>
					<Form.Item>
						<Checkbox>
							I have read the
							<Button type='link'>agreement</Button>
						</Checkbox>
					</Form.Item>
					<Form.Item>
						<Button
							onClick={singUp}
							type='primary'
							htmlType='submit'
						>
							Register
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default SingUp
