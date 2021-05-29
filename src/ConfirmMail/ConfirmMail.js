import React from 'react'
import ExportWithRedux from '../utils/ExportWithRedux'
import Button from 'react-bootstrap/Button'
import getvw from '../utils/getvw'
import { Alert } from 'react-bootstrap'
import 'typeface-pacifico'

class ConfirmMail extends React.Component {

    constructor() {
        super();
        this.state = {
            msg: ''
        }
    }

    ButtonStyle = {
        width: getvw(150),
        height: getvw(70),
        marginTop: getvw(20)
    }

    divStyle = {
        width: getvw(400),
        height:getvw(300),
        borderRadius: getvw(5),
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: getvw(0.5),
        color: '#fff',
        boxShadow: getvw(3) + ' ' + getvw(3) + ' ' + getvw(4) + ' rgba(0,0,0,0.2)',
        marginTop: getvw(60),
        marginLeft: getvw(375),
        fontFamily: 'Pacifico'
    }

    sendMailReq = async () => {
        let res = await fetch(`http://localhost:8080/api/sendcmail`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: this.props.StateReducer.id
            })
        })
        res = await res.json().then(data => data).catch(data => data)
        if (res.auth) {
            this.setState({ msg: "Check your email. Token will expire in 20 mins" })
        } else {
            this.setState({ msg: "Some error occured try again" })
        }
    }

    alertStyle = {
        borderStyle: 'solid',
        borderRadius: getvw(15),
        borderColor: 'white',
        borderWidth: getvw(0.5)
    }

    render() {
        return <div style={{fontFamily: 'Pacifico'}}>
            <div className='ConfirmMail bg-dark justify-content-center' style={this.divStyle}>
                <h4 style={{ color: 'white', marginTop:getvw(100) }}>Please confirm your email</h4>
                {this.state.msg.length ? <Alert bg='dark' variant='dark' style={this.alertStyle}>{this.state.msg}</Alert> : null}
            </div>
            <Button bg='dark' variant='dark' className='border-white' style={this.ButtonStyle} onClick={this.sendMailReq}>Confirm Mail</Button>
        </div>
    }
}

export default ExportWithRedux(ConfirmMail)