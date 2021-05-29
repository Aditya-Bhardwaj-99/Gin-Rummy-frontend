import Alert from 'react-bootstrap/Alert'
import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import 'typeface-pacifico'
import {GiCardAceSpades} from 'react-icons/gi'
import {TweenMax} from 'gsap'
import { Sine } from 'gsap/gsap-core'
import Button from 'react-bootstrap/Button'
import getvw from '../utils/getvw'

class MailRedirect extends React.Component{
    constructor(){
        super();
        this.state={
            msg:'',
            loading:1
        }
    }

    divStyle={
        width: getvw(400),
        height: getvw(300),
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

    componentDidMount=async ()=>{
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
        console.log(this.props.match.params.tok)
        let res = await fetch(`http://localhost:8080/api/confirmmail`,{
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token:this.props.match.params.tok
            })
        })
        res = await res.json().then(data=>data)
        if(res.auth){
            this.setState({loading:0,msg:'Mail confirmed'})
        } else {
            this.setState({loading:0,msg:res.err})
        }
    }

    ButtonStyle = {
        width: getvw(150),
        height: getvw(70),
        fontSize: getvw(32),
        marginTop: getvw(20)
    }

    alertStyle={
        borderStyle:'solid',
        borderRadius:getvw(15),
        borderColor:'white',
        borderWidth:getvw(0.5)
    }

    render(){
        return <div className='MailRedirect' style={this.divStyle}>
            {this.state.loading?<GiCardAceSpades className='Ace' color='white' width='32' height='40'></GiCardAceSpades>
            :<><Alert bg='dark' variant='dark' style={this.alertStyle}>{JSON.stringify(this.state.msg)}</Alert>
            <Link to={'/'}><Button bg='#214a80' variant='dark' size='lg' className='border-white' style={this.ButtonStyle}>Home</Button></Link>
            </>}
        </div>
    }
}

export default withRouter(MailRedirect)