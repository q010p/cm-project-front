import React, { useState, useEffect } from 'react'
import Login from '../login/Login'
import FormList from '../dynamic-form/FormList'
import App from '../App'

import ls from 'local-storage'


import lsKey from '../data/LocalStorageKeys'


const PAGE_STATE_LOADING = "LOADING"


export default function Splash(props) {

    const [pageState, setPageState] = useState(PAGE_STATE_LOADING)



    setTimeout(function(PAGE_STATE_LOADED) {
        setPageState()
    }, 100)

    if (pageState == PAGE_STATE_LOADING)
        return <App/>
            else {
                let authToken = ls.get(lsKey.LS_AUTH_TOKEN_KEY)

                if (!authToken) {
                    return ( <Login/>
                    )
                } else {
                    
                }
            }






}