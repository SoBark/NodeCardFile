import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CASE_ROUTE } from '../utils/consts';

const CaseItem = ({nextCase}) => {
    const history = useHistory()
    return (
        <Col md={5} className={"mt-3"} onClick={() => history.push(CASE_ROUTE + '/'+ nextCase.id)}>
             <Card style={{width: 250, cursor: 'pointer'}} border={"bold"}>
                <div className='text-black-50 d-flex justify-content-between align-items-center'>
                    <div>Преступление</div>
                </div>
                <div className='mt-3'>{nextCase.description}</div>
                <div className='mt-3'>{nextCase.status}</div>

             </Card>
        </Col>

    );
};

export default CaseItem;