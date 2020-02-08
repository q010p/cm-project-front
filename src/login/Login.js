import React, { useState } from 'react'
import {Redirect} from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Card, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css'

import { useTranslation } from 'react-i18next';



import ls from 'local-storage'
import lsKey from '../data/LocalStorageKeys'

export default function Login(props) {

    const { t } = useTranslation();

    const [requestBody, setRequestBody] = useState({})
    const [errorText, setErrorText] = useState("")
    const [redirect, setRedirect] = useState("")


    function onFormFieldChange(e) {
        setRequestBody({
            ...requestBody,
            [e.target.name]: e.target.value
        })
    }

    function onFormSubmit(e) {
        setErrorText("")
        e.preventDefault();
        fetch(`http://localhost:4020/api/authenticate`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        })
            .then(res => {
                if (!res.ok)
                    throw res
                return res.json()
            })
            .then((result => {
                ls.set(lsKey.LS_AUTH_TOKEN_KEY, result.token)
                ls.set(lsKey.LS_ROLE_KEY, result.role)
                setRedirect('/admin')
                
            }))
            .catch(err => {
                err.json().then(errorBody => {
                    errorOccurred(errorBody)
                })
            })
    }

    function errorOccurred(errorBody) {
        setErrorText(errorBody.message)
    }

    if (redirect) {
        return <Redirect to={redirect} />;
    }
    
    if(ls.get(lsKey.LS_AUTH_TOKEN_KEY)&&
    ls.get(lsKey.LS_ROLE_KEY))
    setRedirect('/admin')

    //i18n.changeLanguage('fa')    
    return (
        <div className="Login-header">
            <Row className="Login-card-container">
                <Col xs={0} sm={2} md={4} lg={4}></Col>
                <Col className="Login-card" xs={12} sm={8} md={4} lg={4}>
                    <Card className="Login-card" body >
                        <h1>{t("Login")}</h1>
                        <form className="Login-form" onSubmit={onFormSubmit}>
                            <Row>
                                <Col sm={1} md={1} lg={1}></Col>
                                <Col sm={10} md={10} lg={10}>
                                    <FormControl
                                        className="Login-form-fields"
                                        name="phone"
                                        value={requestBody.phone}
                                        placeholder={t("phone")}
                                        required={true}
                                        type="text"
                                        onChange={onFormFieldChange}
                                    />
                                </Col>
                                <Col sm={1} md={1} lg={1}></Col>

                            </Row>

                            <Row>
                                <Col sm={1} md={1} lg={1}></Col>
                                <Col sm={10} md={10} lg={10}>
                                    <FormControl
                                        className="Login-form-fields"
                                        name="password"
                                        value={requestBody.password}
                                        variant="outlined"
                                        placeholder={t("password")}
                                        required={true}
                                        type="password"
                                        onChange={onFormFieldChange}
                                    />
                                </Col>
                                <Col sm={1} md={1} lg={1}></Col>
                            </Row>

                            <Row>
                                <Col sm={1} md={1} lg={1}></Col>
                                <Col sm={10} md={10} lg={10}>
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        color="primary"
                                        className="Login-form-fields" > {t('login')}
                                    </Button>
                                </Col>
                                <Col sm={1} md={1} lg={1}></Col>
                            </Row>

                            {(errorText !== '') && (
                                <Row>
                                    <Col sm={1} md={1} lg={1}></Col>
                                    <Col sm={10} md={10} lg={10}>
                                        < Alert className="Login-error-box"
                                            variant="danger">
                                            <p>
                                                {errorText}
                                            </p>
                                        </Alert>
                                    </Col>
                                    <Col sm={1} md={1} lg={1}></Col>
                                </Row>
                            )
                            }

                        </form>
                    </Card>
                </Col>
                <Col xs={0} sm={2} md={4} lg={4}></Col>
            </Row>

        </div >
    )
}