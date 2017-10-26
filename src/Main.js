import React from 'react'

import { render } from 'react-dom'

import css from './Main.scss'

import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory({})

import HomePage from './Pages/HomePage'

const router = (
		<Router history={history}>
			<Route exact path="/" component={HomePage} />
		</Router>
)

render(router, document.getElementById('react-root'))
