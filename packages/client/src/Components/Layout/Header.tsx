import React, { FC } from 'react'

// antd components
import Affix from 'antd/es/affix'
import PageHeader from 'antd/es/page-header'

interface IProps {
	title?: React.ReactNode
	extra?: React.ReactNode[] | React.ReactNode
	subTitle?: string
	onBack?: () => void
}

const Header: FC<IProps> = ({
	title = 'Film Manager',
	subTitle = 'bem vindo',
	extra,
	onBack,
}) => {
	return (
		<Affix offsetTop={10} style={{ marginBottom: 30 }}>
			<PageHeader
				title={title}
				subTitle={subTitle}
				extra={extra}
				onBack={onBack}
			/>
		</Affix>
	)
}

export default Header
