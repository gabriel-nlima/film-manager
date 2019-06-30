import React, { FC } from 'react'

interface IProps {
	children: JSX.Element
}

const Container: FC<IProps> = ({ children }) => {
	return <div className='container'>{children}</div>
}

export default Container
