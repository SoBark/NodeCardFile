import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateCase from '../components/modals/CreateCase';
import CreateType from '../components/modals/CreateType';
import { ADMIN_ROUTE } from '../utils/consts';

const Admin = () => {
    const [caseVisible, setCaseVisible] = useState (false)
    const [typeVisible, setTypeVisible] = useState (false)
    return(
        <Container className='d-flex flex-column'>
            <Button onClick={()=>setCaseVisible(true)} variant={"outline-dark" } className="mt-2">Добавить статью</Button>
            <Button onClick={()=>setTypeVisible(true)} variant={"outline-dark" } className="mt-2">Добавить дело</Button>
        <CreateCase show={caseVisible} onHide={() => setCaseVisible(false)}/>
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>

    );
};

export default Admin;