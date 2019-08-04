import React, { FC } from 'react'

//interfaces
import { Project } from '../../Types'

// antd components
import Typograph from 'antd/es/typography'
import Col from 'antd/es/col'
import Row from 'antd/es/row'
import Button from 'antd/es/button'

interface Props {
	onFinishPhase: () => void
	project?: Project
}

const { Title } = Typograph

const PreProduction: FC<Props> = ({ onFinishPhase }) => {
	return (
		<>
			<Row align='middle'>
				<Col xs={12}>
					<Title level={4}>
						Organize recursos e pessoas, monte o cronograma,
						registre ideias e o plano de cenas.
					</Title>
				</Col>
				<Col xs={12} style={{ textAlign: 'right' }}>
					<Button type='primary' onClick={onFinishPhase}>
						Concluir
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default PreProduction
