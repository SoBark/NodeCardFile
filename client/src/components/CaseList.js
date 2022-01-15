import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import CaseItem from "./CaseItem";

const CaseList = observer(() =>{
    const {casest} = useContext(Context)
    return (
        <Row className="d-flex">
            {casest.Cases.map(nextCase=>
                <CaseItem key={nextCase.id} nextCase={nextCase}/>
                )}
        </Row>
    );
});

export default CaseList;