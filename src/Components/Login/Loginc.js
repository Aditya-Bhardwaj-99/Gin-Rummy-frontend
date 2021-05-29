import React from 'react'
import Form from 'react-bootstrap/Form'
import {GiCardAceSpades} from 'react-icons/gi'
import ExportWithRedux from '../../utils/ExportWithRedux'
import getvw from '../../utils/getvw'
import Alert from 'react-bootstrap/Alert'
import {TweenMax} from 'gsap'
import { Sine } from 'gsap/gsap-core'

class Loginc extends React.Component{

    constructor(){
        super();
        this.state={
            err:'',
            alert:0
        }
    }

    innerDivStyle={
        textAlign:'center',
        padding:getvw(15) +'0'+ getvw(20),
        fontSize:getvw(100),
        color:'#2980ef'
    }
    formControlStyle={
        background:'none',
        border:'none',
        borderBottom:getvw(1)+' solid white',
        borderRadius:'0',
        boxShadow:'none',
        outline:'none',
        color:'inherit',
        marginTop:getvw(30),
        width:'80%',
        height:'20%',
        marginLeft:'10%'
    }
    buttonStyle={
        background:'#214a80',
        border:'none',
        borderRadius:getvw(4),
        padding:getvw(11),
        boxShadow:'none',
        marginTop:getvw(30),
        textShadow:'none',
        outline:'none',
        width:'50%',
        height:'20%',
        marginLeft:'25%',
        font:getvw(24)
    }

    componentDidMount=()=>{
        TweenMax.to('.Ace',2,{
            opacity:0,
            rotateY:180,
            repeat:-1,
            delay:1,
            yoyo:true,
            ease: Sine.easeInOut,
            repeatDelay:1,
            yoyoEase:true
        })
    }

    HandleSubmit=async (event)=>{
        event.preventDefault()
        let form = event.target
        let email = form.email.value
        let password = form.password.value
        let res = await fetch(`http://localhost:8080/api/login`,{
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                password:password
            })
        })
        res = await res.json().then((res)=>res)
        if(res.auth){
            let ws = new WebSocket(`ws://localhost:8080/realtime`)
            this.props.UpdateState('ws',ws)
            this.props.UpdateState('id',res.userid)
            this.props.UpdateState('user',res.user)
            let history = this.props.history
            if(res.mailConfirmed){
                history.push('/');
            } else {
                history.push('/confirmmail');
            }
            this.setState({alert:0,err:''})
        } else {
            this.setState({alert:1,err:res.err})
        }
        
    }

    alertStyle={
        borderStyle:'solid',
        borderRadius:getvw(15),
        borderColor:'white',
        borderWidth:getvw(0.5)
    }

    render(){
        return<div className='Loginc mb-3'>
            {this.state.alert?<Alert style={this.alertStyle}>{this.state.err}</Alert>:null}
            <Form onSubmit={this.HandleSubmit}>
            <h2 className="sr-only">Login Form</h2>
            <div className="illustration" style={this.innerDivStyle}><GiCardAceSpades className='Ace' color='white' width='32' height='40'></GiCardAceSpades></div>
            <input style={this.formControlStyle} className="form-control" type="text" name="email" placeholder="Email or Username"/>
            <input style={this.formControlStyle} className="form-control" type="password" name="password" placeholder="Password"/>
            <button style={this.buttonStyle} className="btn btn-primary btn-block" type="submit">Log In</button>
            </Form>
        </div>
    }
}

export default ExportWithRedux(Loginc)