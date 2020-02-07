import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Redirect} from 'react-router'

import ls from 'local-storage'
import lsKey from '../../data/LocalStorageKeys'


export default function FormList(props) {

    const PAGE_STATE_LOADING = "LOADING"
    const PAGE_STATE_ERROR = "ERROR"
    const PAGE_STATE_LOADED = "LOADED"

    const [formList, setFormList] = useState()
    const [pageState, setPageState] = useState(PAGE_STATE_LOADING)
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetchList()
    }, [count])

    const [redirect, setRedirect] = useState("")
    if(!ls.get(lsKey.LS_AUTH_TOKEN_KEY)&&
    !ls.get(lsKey.LS_ROLE_KEY))
    setRedirect('/login')

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return renderList();

    function fetchList() {
        setPageState(PAGE_STATE_LOADING)
        console.log('loading')
        fetch('http://localhost:4020/api/forms',{
            headers:{
                'Authorization':"token "+ls.get(lsKey.LS_AUTH_TOKEN_KEY)
            }
        })
            .then(res => res.json())
            .then((result => {
                setFormList(result)
                setPageState(PAGE_STATE_LOADED)
            }))
    }

    
    function renderList() {

        switch (pageState) {
            case PAGE_STATE_LOADED:
                return (
                    <List component="nav" aria-label="secondary mailbox folders">
                        {
                            formList.map(form => {
                                return (
                                    <ListItem button key={form.id}>
                                        <ListItemText primary={form.title} onClick={props.onFormClicked.bind("id", form._id)} />
                                    </ListItem>)
                            })
                        }
                    </List>
                )

            case PAGE_STATE_LOADING:
                return (
                    <p>loading</p>
                )

            case PAGE_STATE_ERROR:
                return (
                    <p>error</p>
                )

            default:

        }

    }
}