import React, { FC, useState } from 'react'

// interfaces
import { History } from 'history'

// components
import SignIn from './SignIn'
import SignUp from './SignUp'

// antd components
import Card from 'antd/es/card'
import Header from '../Layout/Header'
import Row from 'antd/es/row'
import Col from 'antd/es/col'

interface TabsContents {
	[x: string]: React.ReactNode
	signin: React.ReactNode
	signup: React.ReactNode
}
interface Props {
	history: History
}

const Login: FC<Props> = ({ history }) => {
	const [currentTab, setCurrentTab] = useState('signin')

	const tabs = [
		{ key: 'signin', tab: 'Sign in' },
		{ key: 'signup', tab: 'Sign up' },
	]

	const tabsContents: TabsContents = {
		signin: <SignIn history={history} />,
		signup: <SignUp history={history} />,
	}

	return (
		<div className='container'>
			<Header />
			<Row type='flex' justify='center'>
				<Col span={12}>
					<Card
						title={<span>Entre ou cadastre-se</span>}
						tabList={tabs}
						activeTabKey={currentTab}
						onTabChange={(key: string) => {
							setCurrentTab(key)
						}}
						headStyle={{ textAlign: 'center' }}
					>
						{tabsContents[currentTab]}
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default Login
