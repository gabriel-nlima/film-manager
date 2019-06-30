import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

//interfaces

// components
import Layout from './Components/Layout'
import Home from './Components/Layout/Home'
import FormProject from './Components/Forms/FormProject'

// containers

// antd components

// redux

const users = () => {
	return <h3>users</h3>
}

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/newProject' exact component={FormProject} />
					<Route path='/manageUsers' exact component={users} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}

export default App
