import React, { FC } from 'react'

// antd components
import Affix from 'antd/es/affix'
import PageHeader from 'antd/es/page-header'

interface IProps {
	title?: string
	subTitle?: string
}

const Header: FC<IProps> = ({
	title = 'Página inicial',
	subTitle = 'Bem vindo',
}) => {
	return (
		<Affix offsetTop={10}>
			<PageHeader title={title} subTitle={subTitle} />
		</Affix>
	)
}

export default Header
