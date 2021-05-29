import React from 'react'
import Form from 'react-bootstrap/Form'
import {GiCardAceSpades} from 'react-icons/gi'
import ExportWithRedux from '../../utils/ExportWithRedux'
import getvw from '../../utils/getvw'
import {TweenMax} from 'gsap'
import { Sine } from 'gsap/gsap-core'
import Alert from 'react-bootstrap/Alert'


class Signinc extends React.Component{

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
        let username = form.username.value
        let name = form.name.value
        let email = form.email.value
        let mobile = form.mobile.value
        let password = form.password.value
        let cpassword = form.confirmPassword.value
        if(password===cpassword){
            let res = await fetch(`http://localhost:8080/api/signin`,{
                method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:username,
                name:name,
                email:email,
                mobile:mobile,
                password:password
            })
            })
            res = await res.json().then(res=>res)
            if(res.auth === true){
                let ws = new WebSocket(`ws://localhost:8080/realtime`)
                this.props.UpdateState('ws',ws)
                this.props.UpdateState('id',res.userid)
                this.props.UpdateState('user',res.user)
                let history = this.props.history
                history.push('/confirmmail');
                this.setState({alert:0,err:''})
            } else {
                this.setState({alert:1,err:res.err})
            }
        }
    }

    alertStyle={
        borderStyle:'solid',
        borderRadius:getvw(15),
        borderColor:'white',
        borderWidth:getvw(0.5)
    }

    render(){
        return<div className='Signinc mb-3'>
            {this.state.alert?<Alert style={this.alertStyle}>{this.state.err}</Alert>:null}
            <Form onSubmit={this.HandleSubmit}>
            <h2 className="sr-only">Register</h2>
            <div className="illustration" style={this.innerDivStyle}><GiCardAceSpades className='Ace' color='white' width='32' height='40'></GiCardAceSpades></div>
            <input style={this.formControlStyle} className="form-control" type="text" name="username" placeholder="Username"/>
            <input style={this.formControlStyle} className="form-control" type="text" name="name" placeholder="Name"/>
            <input style={this.formControlStyle} className="form-control" type="email" name="email" placeholder="Email"/>
            <input style={this.formControlStyle} className="form-control" type="text" name="mobile" placeholder="Mobile no."/>
            <input style={this.formControlStyle} className="form-control" type="password" name="password" placeholder="Password"/>
            <input style={this.formControlStyle} className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password"/>
            <button style={this.buttonStyle} className="btn btn-primary btn-block" type="submit">Sign Up</button>
            </Form>
        </div>
    }
}

export default ExportWithRedux(Signinc)