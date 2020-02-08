import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Redirect } from 'react-router'
import {Button} from 'react-bootstrap'

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
    if (!ls.get(lsKey.LS_AUTH_TOKEN_KEY) &&
        !ls.get(lsKey.LS_ROLE_KEY))
        setRedirect('/login')

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return renderList();

    function fetchList() {
        setPageState(PAGE_STATE_LOADING)
        console.log('loading')
        fetch('http://localhost:4020/api/forms', {
            headers: {
                'Authorization': "token " + ls.get(lsKey.LS_AUTH_TOKEN_KEY)
            }
        })
            .then(res => {
                if (!res.ok)
                    throw res
                else return res.json()
            })
            .then((result => {
                setFormList(result)
                setPageState(PAGE_STATE_LOADED)
            }))
            .catch(function (reason) {
                setPageState(PAGE_STATE_ERROR)
                console.log(reason)
            })
    }


    function renderList() {

        switch (pageState) {
            case PAGE_STATE_LOADED:
                return (
                    <List component="nav" aria-label="secondary mailbox folders">
                        {
                            formList.map(form => {
                                return (
                                    <ListItem button key={form._id}>
                                        <ListItemText primary={form.title} onClick={props.onFormClicked.bind("id", form._id)} />
                                    </ListItem>)
                            })
                        }
                    </List>
                )

            case PAGE_STATE_LOADING:
                return (
                    <lottie-player
                    src="https://assets6.lottiefiles.com/datafiles/Hhw0wgYmETDTkxW/data.json" background="transparent" speed="1" style={{width: '300px', height: '300px'}} loop autoplay >
                </lottie-player>
                )

            case PAGE_STATE_ERROR:
                return (
                    <div>
                        <Button onClick={() => setCount(count + 1)}>refresh</Button>
                        <p>error</p>
                    </div>
                )

            default:

        }

    }
}