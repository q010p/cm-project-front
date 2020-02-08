import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';

//components
import AdminDashboard from './components/pages/AdminDashboard'
import Login from './login/Login'

//styles
import './App.css';



function App() {
  return (
    <main className='App'>
      <Switch>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/login" component={Login} />
        <Route exact path="/" render={() => (<Redirect to="/login" />)} />          
      </Switch>
    </main>
  )
}

export default App;
