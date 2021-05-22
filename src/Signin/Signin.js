import React from 'react'
import Signinc from '../Components/Signin/Signinc'
import ExportWithRedux from '../utils/ExportWithRedux'
import getvw from '../utils/getvw'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class Signin extends React.Component{

    FormStyle = {
        width: getvw(400),
        borderRadius: getvw(5),
        borderStyle:'solid',
        borderColor:'white',
        borderWidth:getvw(0.5),
        color: '#fff',
        boxShadow: getvw(3) + ' ' + getvw(3) + ' ' + getvw(4) + ' rgba(0,0,0,0.2)',
        marginTop: getvw(40),
        marginLeft: getvw(375)
    }

    ButtonStyle = {
        width: getvw(150),
        height: getvw(70),
        fontSize: getvw(32),
        marginBottom:getvw(20)
    }

    componentDidMount = () => {
        if (this.props.StateReducer.id) {
            this.props.history.push('/')
        }
    }

    render(){
        return <div style={{fontFamily:'Pacifico'}}>
        <div className='Signin bg-dark' style={this.FormStyle}>
            <Signinc history={this.props.history}></Signinc>
        </div>
        <div className='jusitfy-content-center mt-4' >
        <Link to={'/'}>
            <Button bg='dark' variant='dark' size='lg' className='border-white' style={this.ButtonStyle}>Home</Button>
        </Link>
        <Link to={'/Login'}>
            <Button bg='dark' variant='dark' size='lg' className='border-white ml-3' style={this.ButtonStyle}>Login</Button>
        </Link>
    </div>
    </div>
    }
}

export default ExportWithRedux(Signin)