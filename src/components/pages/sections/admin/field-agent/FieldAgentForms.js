import React from 'react';

import FormsListCard from '../../FormsListCard'
import { Col,Row } from 'react-bootstrap';

function FeildAgentForms(props) {

    return (
        <Row>
            <Col lg={2}></Col>
            <Col lg ={8}>
                <FormsListCard />
            </Col>
            <Col lg={2}></Col>
        </Row>

    )

}

export default FeildAgentForms;
