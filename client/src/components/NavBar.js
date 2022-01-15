import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, CARDFILE_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color: 'white'}} to={CARDFILE_ROUTE}>Картотека</NavLink>
            {user.isAuth ?
                <Nav className="mt-auto" style={{color: 'white'}}>
                    <Button onClick={()=> history.push(ADMIN_ROUTE)}>
                        Добавить
                    </Button>
                    <Button onClick={()=> history.push(LOGIN_ROUTE)} className="mt-2">
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="mt-auto" style={{color: 'white'}}>
                    <Button onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
            </Container>            
        </Navbar>
    ); 
});

export default NavBar;