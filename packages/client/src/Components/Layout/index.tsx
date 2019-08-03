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
import Avatar from 'antd/es/avatar'
import Drawer from 'antd/es/drawer'
import Button from 'antd/es/button'

const MainLayout: FC<RouteComponentProps<any, StaticContext, any>> = ({
	history,
	children,
}) => {
	const [showMenuDrawer, setShowMenuDrawer] = useState(false)
	const extra = (
		<div onClick={() => onClick('/')}>
			<Avatar className='header-btn'>F</Avatar>
		</div>
	)

	const onClick = (path: string) => {
		history.push(path)
	}

	const MenuList = () => (
		<Menu mode='vertical'>
			<Menu.SubMenu
				key={'Projetos'}
				title={
					<span>
						<Icon type='video-camera' />
						<span>Projetos</span>
					</span>
				}
				onTitleClick={() => onClick('/projects')}
			>
				<Menu.Item
					key={'Projeto'}
					onClick={() => onClick('/newProject')}
				>
					<Icon type='plus' />
					<span>Novo projeto</span>
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.Item key={'Usuários'} onClick={() => onClick('/manageUsers')}>
				<Icon type='team' />
				<span>Usuários</span>
			</Menu.Item>
			<Menu.Item key={'Recursos'}>
				<Icon type='appstore' />
				<span>Recursos</span>
			</Menu.Item>
		</Menu>
	)

	return (
		<div className='container'>
			<Row>
				<Col xs={24}>
					<Header extra={extra} />
				</Col>
			</Row>
			<Row>
				<Col xs={0} sm={6} md={6} lg={4}>
					<MenuList />
				</Col>
				<Col xs={2} sm={0} style={{ margin: '5px' }}>
					<Button
						icon={showMenuDrawer ? 'menu-fold' : 'menu-unfold'}
						onClick={() => setShowMenuDrawer(true)}
					/>
				</Col>
				<Col xs={21} sm={18} md={18} lg={20}>
					{children}
				</Col>
			</Row>
			<Drawer
				title='Film Manager'
				placement='left'
				onClose={() => setShowMenuDrawer(false)}
				visible={showMenuDrawer}
				closable={false}
				bodyStyle={{ padding: '0px' }}
			>
				<MenuList />
			</Drawer>
		</div>
	)
}

export default withRouter(MainLayout)
