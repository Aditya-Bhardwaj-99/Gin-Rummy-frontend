import React from 'react';
import CardVars from '../../Constants/CardVars';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from '../Card/Cards';

export default function TestCards(props) {

    return <Row>
        {Object.keys(CardVars.number).map((num) => {
            return Object.keys(CardVars.face).map((face) => {
                return <Col>
                    <Cards number={CardVars.number[num]} face={CardVars.face[face]} wWidth={props.wWidth} />
                </Col>
            })
        })}
    </Row>
}