import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

//interfaces

// components
import Login from './Components/Login'
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
			<Switch>
				<Route path='/' exact component={Login} />
				<Layout>
					<Route path='/home' exact component={Home} />
					<Route path='/newProject' exact component={FormProject} />
					<Route path='/manageUsers' exact component={users} />
				</Layout>
			</Switch>
		</BrowserRouter>
	)
}

export default App
