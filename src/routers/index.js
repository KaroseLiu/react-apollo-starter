import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Knowledge from '../modules/knowledge/index'

const SampleIndex = () => <Sample>共同照护门诊欢迎您！</Sample>

const routes = [
  {
    path: '/',
    exact: true,
    component: SampleIndex,
  },
  {
    path: '/knowledge/:knowledgeId',
    component: Knowledge,
  },
]

const getRouters = () => (
  <Router>
    <RootContainer>
      <Switch>
        {routes.map(({ path, exact, component: Comp }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => <Comp {...props} />}
          />
        ))}
      </Switch>
    </RootContainer>
  </Router>
)

const RootContainer = styled.div`
  padding: 20px;
`

const Sample = styled.div`
  text-align: center;
`
export default getRouters
