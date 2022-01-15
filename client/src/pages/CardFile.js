import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CaseItem from '../components/CaseItem';
import CaseList from '../components/CaseList';
import TypeBar from '../components/TypeBar';

const CardFile = () => {
    return(
        <Container>
            <Row className="mt-2">
                <Col md={2}>
                    <TypeBar/>
                </Col>
                <Col md={10}>
                    <CaseList/>
                </Col>
            </Row>
        </Container>
    );
};

export default CardFile;