import React, { useState } from 'react';

import AnswersCard from '../../AnswersCard'
import { Row, Col } from 'react-bootstrap'



const ControlCenterDashboard = (props) => {

    return (
        <Row>
            <Col lg={1}></Col>
            <Col lg={10}>
                <AnswersCard />
            </Col>
            <Col lg={1}></Col>
        </Row>
    );
}

export default ControlCenterDashboard;