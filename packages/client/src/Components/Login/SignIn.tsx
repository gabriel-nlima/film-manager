import React, { FC } from 'react'

//interfaces
import { History } from 'history'

// antd components
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Form from 'antd/es/form'
import Button from 'antd/es/button'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Checkbox from 'antd/es/checkbox'

// components

interface Props {
	history?: History
}

const SingIn: FC<Props> = ({ history }) => {
	const singIn = (event: React.FormEvent<HTMLElement>) => {
		event.preventDefault()
		history && history.push('/home')
	}

	return (
		<Row type='flex' justify='center'>
			<Col>
				<Form style={{ maxWidth: '300px' }}>
					<Form.Item>
						<Input
							prefix={
								<Icon
									type='user'
									style={{ color: 'rgba(0,0,0,.25)' }}
								/>
							}
							placeholder='Username'
						/>
					</Form.Item>
					<Form.Item>
						<Input
							prefix={
								<Icon
									type='lock'
									style={{ color: 'rgba(0,0,0,.25)' }}
								/>
							}
							type='password'
							placeholder='Password'
						/>
					</Form.Item>
					<Form.Item>
						<Row>
							<Checkbox>Remember me</Checkbox>
							<Button type='link'>Forgot password</Button>
						</Row>
						<Row>
							<Button
								style={{ width: '100%' }}
								onClick={singIn}
								type='primary'
								htmlType='submit'
							>
								Sign In
							</Button>
						</Row>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default SingIn
