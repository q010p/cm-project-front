import React, { useState } from 'react';

import FormList from '../../dynamic-form/FormList'
import DynamicForm from '../../dynamic-form/DynamicForm'
import { Alert, Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../logo.svg'

function FormsCard(props) {

    const [formModalShow, setFormModalShow] = useState(false)
    const [formId, setFormId] = useState(0)

    function onFormItemClicked(id) {
        setFormModalShow(true)
        setFormId(id)
    }
    const handleClose = () => setFormModalShow(false);


    return (
        <div>
            <Card className="card">
                <Card.Body>
                    <Card.Title>forms list</Card.Title>
                    <FormList onFormClicked={onFormItemClicked} />
                </Card.Body>
            </Card>
            <Modal size="md" show={formModalShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><DynamicForm formId={formId}></DynamicForm></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default FormsCard;
