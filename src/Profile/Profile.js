import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'typeface-pacifico'
import {TweenMax} from 'gsap'
import {GiCardAceSpades} from 'react-icons/gi'
import { Sine } from 'gsap/gsap-core'
import ExportWithRedux from '../utils/ExportWithRedux'
import getvw from '../utils/getvw'

class Profile extends React.Component{

    constructor(){
        super();
        this.state={
            user:'',
            email:'',
            name:'',
            mobile:'',
            wins:'',
            loss:'',
            loading:1
        }
    }

    componentDidMount=async ()=>{
        TweenMax.to('.Ace',2,{
            opacity:0,
            rotateY:360,
            repeat:-1,
            delay:1,
            yoyo:true,
            ease: Sine.easeInOut,
            repeatDelay:1,
            yoyoEase:true
        })
        console.log(this.props)
        let res = await fetch(`http://localhost:8080/api/profilefetch`,{
            method:'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                userid:this.props.StateReducer.id
            })
        })
        res = await res.json().then(data=>data).catch(data=>data)
        if(res.auth){
            this.setState({...res.data,loading:0})
        } else {

        }
    }

    divStyle={
        width: getvw(500),
        height: getvw(400),
        borderRadius: getvw(5),
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: getvw(0.5),
        color: '#fff',
        boxShadow: getvw(3) + ' ' + getvw(3) + ' ' + getvw(4) + ' rgba(0,0,0,0.2)',
        marginTop: getvw(60),
        marginLeft: getvw(375),
        fontFamily:'Pacifico'
    }

    colmargin={
        marginTop:getvw(30)
    }

    render(){
        return <div className='Profile bg-dark text-white'  style={this.divStyle}>
            {this.state.loading?<div style={{fontSize:getvw(100)}}><GiCardAceSpades className='Ace' color='white'></GiCardAceSpades></div>
            :<div>
            <Row>
                <Col style={this.colmargin}>
                    <Row>
                        <Col>
                        Username
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    {this.state.user}
                    </Col>
                    </Row>
                </Col>
                <Col style={this.colmargin}>
                    <Row>
                    <Col>
                    Email
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                        {this.state.email}
                        </Col>
                    </Row>
                </Col>
                <Col style={this.colmargin}>
                    <Row>
                        <Col>
                        Name
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {this.state.name}
                        </Col>
                    </Row>
                </Col>
                <Col style={this.colmargin}>
                    <Row>
                        <Col>
                        Mobile
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {this.state.mobile}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col style={this.colmargin}>
                    <Row>
                        <Col>
                        Wins
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {this.state.wins}
                        </Col>
                    </Row>
                </Col>
                <Col style={this.colmargin}>
                    <Row>
                        <Col>
                        Loss
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {this.state.loss}
                        </Col>
                    </Row>
                </Col>
            </Row></div>}
        </div>
    }
}

export default ExportWithRedux(Profile)