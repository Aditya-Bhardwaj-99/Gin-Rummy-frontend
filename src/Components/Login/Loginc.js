import React from 'react'
import Form from 'react-bootstrap/Form'
import {BsLock} from 'react-icons/bs'
import ExportWithRedux from '../../utils/ExportWithRedux'
import getvw from '../../utils/getvw'

class Loginc extends React.Component{

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

    HandleSubmit=(event)=>{
        event.preventDefault()
        this.props.UpdateState('id','123456789')
        let history = this.props.history
        history.push('/');
    }

    render(){
        return<div className='Loginc mb-3'>
            <Form onSubmit={this.HandleSubmit}>
            <h2 className="sr-only">Login Form</h2>
            <div className="illustration" style={this.innerDivStyle}><BsLock color='white' width='32' height='40'></BsLock></div>
            <input style={this.formControlStyle} className="form-control" type="email" name="email" placeholder="Email"/>
            <input style={this.formControlStyle} className="form-control" type="password" name="password" placeholder="Password"/>
            <button style={this.buttonStyle} className="btn btn-primary btn-block" type="submit">Log In</button>
            </Form>
        </div>
    }
}

export default ExportWithRedux(Loginc)