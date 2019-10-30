import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/App.css'

//interfaces

// components
import Login from './Components/Login'
import Layout from './Components/Layout'
import Projects from './Components/Project/Projects'
import ManageProject from './Components/Project/ManageProject'
import FormProject from './Components/Project/FormProject'
import ScriptProject from './Components/Script/ScriptManage'
import ScriptManage from './Components/Script/ScriptManage'
import formScene from './Components/Scene/FormScene'




// containers

// antd components

// redux

const users = () => {
	return <h3>TODO</h3>
}

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Login} />
				<Layout>
					<Route path='/projects' exact component={Projects} />
					<Route path='/newProject' exact component={FormProject} />
					<Route path='/manageProject' exact component={ManageProject}/>
					<Route path='/scriptProject' exact component={ScriptProject}/>
					<Route path='/scriptManage' exact component={ScriptManage}/>
					<Route path='/formScene' exact component={formScene}/>

					<Route path='/manageUsers' exact component={users} />
				</Layout>
			</Switch>
		</BrowserRouter>
	)
}

export default App
