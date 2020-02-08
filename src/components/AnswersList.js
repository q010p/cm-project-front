import React, { useState, useEffect } from 'react';

import ls from 'local-storage'
import lsKey from '../data/LocalStorageKeys'

import { Table } from 'react-bootstrap';
export default function AnswersList(props) {
    const PAGE_STATE_LOADING = "LOADING"
    const PAGE_STATE_ERROR = "ERROR"
    const PAGE_STATE_LOADED = "LOADED"

    const [formAnswers, setFormAnswers] = useState({})
    const [pageState, setPageState] = useState(PAGE_STATE_LOADING)
    const [errorCause, setErrorCause] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetchList()
    }, [count])

    function fetchList() {
        setPageState(PAGE_STATE_LOADING)
        fetch(`http://localhost:4020/api/forms-answers/${props.formId}`, {
            headers: {
                'Authorization': "token " + ls.get(lsKey.LS_AUTH_TOKEN_KEY)
            }
        })
            .then(res => {
                if (res.ok)
                    return res.json()
                else throw res
            })
            .then((result => {
                setFormAnswers(result)
                setPageState(PAGE_STATE_LOADED)
            }))
            .catch((err) => {
                setPageState(PAGE_STATE_ERROR)
                setErrorCause(err)

            })
    }

    function renderAnswersList() {


        if (pageState === PAGE_STATE_LOADING) {
            return <lottie-player
                src="https://assets6.lottiefiles.com/datafiles/Hhw0wgYmETDTkxW/data.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay >
            </lottie-player>
        }

        if (pageState === PAGE_STATE_ERROR) {
            return <div>{errorCause}</div>
        }

        return (

            formAnswers.map(function (obj) {
                return (
                    <Table striped bordered hover variant="light" responsive="lg">
                        <thead>
                            {/* <tr>user name</tr> */}
                            <tr>
                                {
                                    obj.form.fields.map((field) => {
                                        return <th>{field.title}</th>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>

                            {
                                obj.answers.map((ans) => {
                                    return (
                                        <tr>
                                            {
                                                obj.form.fields.map((field) => {
                                                    return <td>
                                                        {JSON.stringify(ans.answer[field.name])}
                                                    </td>
                                                })
                                            }
                                        </tr>)
                                })
                            }
                        </tbody>
                    </Table>
                )
            })

        )
    }

    function renderFilterList(){
        
    }


    return (

        <div>
            {

            }
            {
                renderAnswersList()
            }
        </div>

    );
}