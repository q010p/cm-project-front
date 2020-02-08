import React, { useState, useEffect } from 'react';

import ls from 'local-storage'
import lsKey from '../../../data/LocalStorageKeys'
import AnswersList from '../../AnswersList'
import FormList from '../../dynamic-form/FormList'

import { Table, Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AnswersCard(props) {

    const [formId, setFormId] = useState(-1)


    const renderBody = () => {
        if (formId === -1)
            return (
                <Card.Body>
                    <Card.Title>list of forms</Card.Title>
                    {
                        <FormList onFormClicked={(id) => setFormId(id)} />
                    }
                </Card.Body>)
        else
            return (
                <Card.Body>
                    <Card.Header><Button onClick={()=>setFormId(-1)}>back</Button></Card.Header>
                    <Card.Title>answers</Card.Title>
                    <AnswersList formId={formId}/>
                </Card.Body>
            )

    }
    return (
        <div>
            <Card className="card">
                    {
                        renderBody()
                    }
            </Card>

        </div>
    )

}