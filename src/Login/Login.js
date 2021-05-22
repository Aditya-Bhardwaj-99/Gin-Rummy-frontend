import React from 'react'
import getvw from '../utils/getvw'
import ExportWithRedux from '../utils/ExportWithRedux'
import Loginc from '../Components/Login/Loginc'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Login extends React.Component {

    FormStyle = {
        width: getvw(400),
        borderRadius: getvw(5),
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: getvw(0.5),
        color: '#fff',
        boxShadow: getvw(3) + ' ' + getvw(3) + ' ' + getvw(4) + ' rgba(0,0,0,0.2)',
        marginTop: getvw(60),
        marginLeft: getvw(375)
    }

    ButtonStyle = {
        width: getvw(150),
        height: getvw(70),
        fontSize: getvw(32),
        marginBottom: getvw(20)
    }
    componentDidMount = () => {
        if (this.props.StateReducer.id) {
            this.props.history.push('/')
        }
    }
    render() {
        return <div style={{ fontFamily: 'Pacifico' }}>
            <div className='Login login-dark bg-dark' style={this.FormStyle}>
                <Loginc history={this.props.history} />
            </div>
            <div className='jusitfy-content-center mt-4' >
                <Link to={'/'}>
                    <Button bg='dark' variant='dark' size='lg' className='border-white' style={this.ButtonStyle}>Home</Button>
                </Link>
                <Link to={'/Signin'}>
                    <Button bg='dark' variant='dark' size='lg' className='border-white ml-3' style={this.ButtonStyle}>Register</Button>
                </Link>
            </div>
        </div>

    }
}
export default ExportWithRedux(Login)