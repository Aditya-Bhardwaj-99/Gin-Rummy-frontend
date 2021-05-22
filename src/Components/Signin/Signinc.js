import React from 'react'
import Form from 'react-bootstrap/Form'
import {GiCardAceSpades} from 'react-icons/gi'
import ExportWithRedux from '../../utils/ExportWithRedux'
import getvw from '../../utils/getvw'
import {TweenMax} from 'gsap'
import { Sine } from 'gsap/gsap-core'

class Signinc extends React.Component{

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

    HandleSubmit=(event)=>{
        event.preventDefault()
        this.props.UpdateState('id','123456789')
        let history = this.props.history
        history.push('/');
    }

    render(){
        return<div className='Signinc mb-3'>
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