import React, { FC, useState } from 'react'
import { StaticContext } from 'react-router'
import { withRouter, RouteComponentProps } from 'react-router-dom'

//interfaces

// components
import Header from './Header'

// antd components
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Menu from 'antd/es/menu'
import Icon from 'antd/es/icon'
import Card from 'antd/es/card'

const MainLayout: FC<RouteComponentProps<any, StaticContext, any>> = ({
	history,
	match,
	children,
}) => {
	const [selected, setSelected] = useState('Projetos')
	return (
		<div className='container'>
			<Row>
				<Col xs={24}>
					<Header />
				</Col>
			</Row>
			<Row>
				<Col xs={24} sm={6} md={6} lg={4}>
					<Menu
						mode='inline'
						defaultSelectedKeys={[selected]}
						onClick={({ key }) => setSelected(key)}
					>
						<Menu.SubMenu
							key={'Projetos'}
							title={
								<span>
									<Icon type='video-camera' />
									<span onClick={() => history.push('/')}>
										Projetos
									</span>
								</span>
							}
							onTitleClick={({ key }) => setSelected(key)}
						>
							<Menu.Item
								key={'Projeto'}
								onClick={() => history.push('/newProject')}
							>
								<Icon type='plus' />
								<span>Novo projeto</span>
							</Menu.Item>
						</Menu.SubMenu>
						<Menu.Item
							key={'Usuários'}
							onClick={() => history.push('/manageUsers')}
						>
							<Icon type='team' />
							<span>Usuários</span>
						</Menu.Item>
						<Menu.Item key={'Recursos'}>
							<Icon type='appstore' />
							<span>Recursos</span>
						</Menu.Item>
					</Menu>
				</Col>
				<Col xs={24} sm={18} md={18} lg={20}>
					<Card title={selected}>{children}</Card>
				</Col>
			</Row>
		</div>
	)
}

export default withRouter(MainLayout)
