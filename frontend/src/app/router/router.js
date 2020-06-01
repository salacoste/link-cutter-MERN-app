import React from 'react'
import { Switch, Route, withRouter, BrowserRouter, Redirect } from 'react-router-dom'

import MainLayout from '../../layouts/MainLayout/mainLayout'
import MainPage from '../../components/MainPage/mainPage'
import UserPage from '@components/UserPage/userPage'
import AuthPage from '@components/AuthPage/authPage'
// import RegistrationPage from '@components/RegistrationPage/registrationPage'


import notFound from '../../components/404/404'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => {
    // console.log('props', props, ...rest)

    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }} />
)

export const Routes = ({isAuth}) => {

  if (isAuth) {
    return (
      <Switch>
        <AppRoute exact path='/' exact layout={MainLayout} component={MainPage} />
        <AppRoute exact path='/user' layout={MainLayout} component={UserPage} />
        <AppRoute exact path='/auth' layout={MainLayout} component={AuthPage} />
        {/* <AppRoute exact path='/registration' layout={MainLayout} component={AuthPage} /> */}
  
        <Redirect to="/" />
        <AppRoute layout={MainLayout} component={notFound} />
      </Switch>
    )
  }
  return (
    <Switch>
        <AppRoute exact path='/' exact layout={MainLayout} component={MainPage} />
        <Redirect to="/" />
    </Switch>
  )

  

}

export default withRouter(Routes)
