import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
      </Switch>
    </main>
  )
}

export default App;
