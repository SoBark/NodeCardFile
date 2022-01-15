import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() =>{
    const {casest} = useContext(Context)
    return (
        <ListGroup>
            {casest.Types.map(type =>
                <ListGroup.Item
                style={{cursor: 'pointer'}}
                active={type.id === casest.SelectedType.id}
                onClick={()=> casest.setSelectedType(type)} 
                key={type.id}>
                    {type.name}
                </ListGroup.Item>
                )}
        </ListGroup>
    );
});

export default TypeBar;