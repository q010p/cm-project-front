import React,{useState} from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import SideNav from './sections/SideNav'
import FormList from '../dynamic-form/FormList'
import Login from '../../login/Login'
import Dash from './sections/admin/Dash'
import FieldAgentFroms from './sections/admin/field-agent/FieldAgentForms'
import ls from 'local-storage'
import lsKey from '../../data/LocalStorageKeys'
import {Redirect} from 'react-router'
import TopNav from './sections/TopNav'
import SystemAdminCreateForm from '../pages/sections/admin/system-admin/SystemAdminCreateForm'


//styles
import 'bootstrap/dist/css/bootstrap.min.css';
function AdminDashboard(props) {

    const [redirect, setRedirect] = useState("")

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    if(!ls.get(lsKey.LS_AUTH_TOKEN_KEY)||
    !ls.get(lsKey.LS_ROLE_KEY))
    setRedirect('/login')

    

    return (
        <div>
            <SideNav />
            <TopNav/>
            <div className="App-admin-dash-container">
                <Switch>
                    <Route exact path="/admin/dashboard" component={Dash} />
                    <Route exact path="/admin/forms" component={FieldAgentFroms} />
                    <Route exact path="/admin/profile" component={Login} />
                    <Route exact path="/admin/sys-admin/form" component={SystemAdminCreateForm}/>
                </Switch>

            </div>
        </div>
    )

}

export default AdminDashboard;