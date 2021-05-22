import React from 'react';
import Cards from '../Card/Cards';
import CardVars from '../../Constants/CardVars';
import getvw from '../../utils/getvw'
import 'typeface-pacifico'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Logo(props){

    const colwidth = props.colWidth?props.colWidth:300;
    const colheight = props.colHeight?props.colHeight:400;
    const cardwidth = props.cardWidth?props.cardWidth:undefined;
    const cardheight = props.cardHeight?props.cardHeight:undefined;
    const cardbr = props.cardBR?props.cardBR:undefined;
    const cardmargin = props.cardMargin?props.cardMargin:undefined;
    const font = props.Font?props.Font:undefined;

    return <div className='Logo justify-content-center align-middle position-relative'>
        <Row className='Logoholder position-relative' >
            <Col className='position-relative' style={{width:getvw(colwidth),height:getvw(colheight),top:getvw(12,300),transformOrigin:'center center',marginLeft:'45%'}}>
                <Cards className='Card' cardBR={cardbr} cardMargin={cardmargin} Font={font} cardWidth={cardwidth} cardHeight={cardheight} number={CardVars.number['A']} face={CardVars.face['diamond']} addStyle = {{position:'absolute',transform: 'rotateZ(-40deg)',top:getvw(5,300),zIndex:1,transformOrigin: 'bottom left'}}/>
                <Cards className='Card' cardBR={cardbr} cardMargin={cardmargin} Font={font} cardWidth={cardwidth} cardHeight={cardheight} number={CardVars.number['A']} face={CardVars.face['clubs']} addStyle = {{position:'absolute',transform: 'rotateZ(-20deg)',top:getvw(4,300),zIndex:2,transformOrigin: 'bottom left'}}/>
                <Cards className='Card' cardBR={cardbr} cardMargin={cardmargin} Font={font} cardWidth={cardwidth} cardHeight={cardheight} number={CardVars.number['A']} face={CardVars.face['hearts']} addStyle = {{position:'absolute',transform: 'rotateZ(0deg)',top:getvw(2,300),zIndex:3,transformOrigin: 'bottom left'}}/>
                <Cards className='Card' cardBR={cardbr} cardMargin={cardmargin} Font={font} cardWidth={cardwidth} cardHeight={cardheight} number={CardVars.number['A']} face={CardVars.face['spades']} addStyle = {{position:'absolute',transform: 'rotateZ(20deg)',top:getvw(0,300),zIndex:4,transformOrigin: 'bottom left'}}/>
            </Col>
        </Row>
        {props.logoSize==='s'?<div/>:<Row className='Name text-white' style={{font: "200 "+getvw(50,1366)+"/1.5 Pacifico"}}><Col>Gin Rummy</Col></Row>}
    </div>
}