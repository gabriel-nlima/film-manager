import React, { FC, useState } from 'react'
import { StaticContext } from 'react-router'
import { withRouter, RouteComponentProps } from 'react-router-dom'

//interfaces

// components
import Header from './Header'
import MenuList from './MenuList'

// antd components
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Avatar from 'antd/es/avatar'
import Drawer from 'antd/es/drawer'
import Button from 'antd/es/button'

const MainLayout: FC<RouteComponentProps<any, StaticContext, any>> = ({
	history,
	children,
}) => {
	const [showMenuDrawer, setShowMenuDrawer] = useState(false)
	const [selectedMenu, setSelectedMenu] = useState('/projects')
	const extra = (
		<div onClick={() => onClick('/')}>
			<Avatar className='header-btn'>F</Avatar>
		</div>
	)

	const onClick = (key: string) => {
		setSelectedMenu(key)
		history.push(key)
		if (showMenuDrawer) {
			setShowMenuDrawer(false)
		}
	}

	return (
		<div className='container'>
			<Row>
				<Col xs={24}>
					<Header extra={extra} />
				</Col>
			</Row>
			<Row>
				<Col xs={0} sm={6} md={6} lg={4} xl={3}>
					<MenuList
						onSelectMenu={onClick}
						selectedKeys={[selectedMenu]}
					/>
				</Col>
				<Col xs={2} sm={0} style={{ margin: '5px' }}>
					<Button
						icon={showMenuDrawer ? 'menu-fold' : 'menu-unfold'}
						onClick={() => setShowMenuDrawer(true)}
					/>
				</Col>
				<Col xs={21} sm={18} md={18} lg={20} xl={21}>
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
				<MenuList
					onSelectMenu={onClick}
					selectedKeys={[selectedMenu]}
				/>
			</Drawer>
		</div>
	)
}

export default withRouter(MainLayout)
