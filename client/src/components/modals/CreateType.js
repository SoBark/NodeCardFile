import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateType =({show, onHide}) =>{
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
                <Form.Control
                    placeholder={"Введите название статьи"}
                />
                <Form.Control
                    placeholder={"Введите номер статьи"}
                />                 
            </Form>        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateType;