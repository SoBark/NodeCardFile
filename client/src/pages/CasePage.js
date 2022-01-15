import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';

const CasePage = () => {
    const curCase = {id: 1, status:'Расследуется', description: 'Убийство старухи проценщицы', userId: 1, typeId: 1}
    const figurants = []
    const logs = []
    return(
        <Container>
            <Card border={"bold"}>
                <div>Номер дела:<br />
                    {curCase.id}
                </div>
            </Card>
            <Card border={"bold"}>
                <div>Следователь:<br />
                    {curCase.userId}
                </div>
            </Card>
            <Card border={"bold"}>
                <div>Статус:<br />
                    {curCase.status}
                    <br/><Button style={{float: 'right'}} className="mt-1" variant={"outline-dark"}>Изменить статус</Button>
                </div>
            </Card>
            <Card border={"bold"}>
                <div>Статья:<br />
                    {curCase.typeId}
                </div>
            </Card>
            <Card border={"bold"}>
                <div>Фигуранты:<br />
                    {figurants.map(figurant =>
                        <Card border={"light"} key={figurant.id}>
                            ФИО:{figurant.surname} {figurant.name} {figurant.patronymic}<br/>
                            Статус: {figurant.status}<br/>
                            Паспорт: {figurant.pasport_num}<br />
                            Адрес:  {figurant.address}<br />
                            Телефон:  {figurant.phonenumber}<br />
                        </Card>)}
                    <br/><Button style={{float: 'right'}} className="mt-1" variant={"outline-dark"}>Добавить фигуранта</Button>
                </div>
            </Card>
            <Card border={"bold"}>
                <div>Записи по делу:<br />
                    {logs.map(log =>
                        <Card border={"light"} key={log.id}>
                            {log.text}
                        </Card>)}
                    <br/><Button style={{float: 'right'}} className="mt-1" variant={"outline-dark"}>Добавить запись</Button>
                </div>
            </Card>
        </Container>
    );
};

export default CasePage;