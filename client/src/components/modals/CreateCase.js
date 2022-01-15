import React, { useContext, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';

const CreateCase =({show, onHide}) =>{
    const {casest} = useContext(Context)
    const [figurants, setFigurants] = useState([])
    return (
    <Modal
            show={show}
            onHide={onHide}
            centered
        >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить статью
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle>Выберите статью</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {casest.Types.map(type =>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown> 
                <Form.Control
                    className="mt-3"
                    placeholder="Введите статус дела..."
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите описание дела..."
                />  
                <Button
                    className="mt-3"
                    variant={'outline-dark'}
                >
                    Добавить нового подозреваемого
                </Button>            
            </Form>        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateCase;