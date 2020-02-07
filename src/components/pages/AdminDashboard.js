import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import SideNav from './sections/SideNav'
import FormList from '../../dynamic-form/FormList'
import Login from '../../login/Login'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
function AdminDashboard(props) {

    return (
        <div>
            <SideNav />
            <div className="App-admin-dash-container">
                <Switch>
                    <Route exact path="/admin/test" component={FormList} />
                    <Route exact path="/admin/set" component={Login} />
                </Switch>

            </div>

        </div>
    )

}

export default AdminDashboard;