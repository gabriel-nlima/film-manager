import React, { FC } from 'react'

// antd components
import Menu from 'antd/es/menu'
import Icon from 'antd/es/icon'

interface Props {
	onSelectMenu: (menuKey: string) => void
	selectedKeys: string[]
}

const MenuList: FC<Props> = ({ onSelectMenu, selectedKeys }) => {
	return (
		<Menu
			mode='vertical'
			onClick={(e) => onSelectMenu(e.key)}
			selectedKeys={selectedKeys}
		>
			<Menu.SubMenu
				key={'/projects'}
				title={
					<span>
						<Icon type='video-camera' />
						<span>Projetos</span>
					</span>
				}
				onTitleClick={() => onSelectMenu('/projects')}
			>
				<Menu.Item key={'/newProject'}>
					<Icon type='plus' />
					<span>Novo projeto</span>
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.Item key={'/manageUsers'}>
				<Icon type='team' />
				<span>Usuários</span>
			</Menu.Item>
			<Menu.Item key={'/resources'}>
				<Icon type='appstore' />
				<span>Recursos</span>
			</Menu.Item>
		</Menu>
	)
}

export default MenuList
