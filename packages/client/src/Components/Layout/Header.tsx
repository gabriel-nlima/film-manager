import React, { FC } from 'react'

// antd components
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Typograph from 'antd/es/typography'
import Divider from 'antd/es/divider'

interface Props {
	title?: React.ReactNode
	extra?: React.ReactNode
	subTitle?: string
}

const { Title, Text } = Typograph

const Header: FC<Props> = ({
	title = 'Film Manager',
	subTitle = 'Bem vindo',
	extra,
}) => {
	return (
		<Row style={{ marginBottom: 15 }}>
			<Col xs={14}>
				<Title level={4}>
					{title}
					<Divider type='vertical' orientation='center' />
					<Text type='secondary'>{subTitle}</Text>
				</Title>
			</Col>
			<Col xs={10} style={{ textAlign: 'right' }}>
				{extra}
			</Col>
		</Row>
	)
}

export default Header
