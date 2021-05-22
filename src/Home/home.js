import React from 'react';
import Logo from '../Components/Logo/Logo';
import Button from 'react-bootstrap/Button'
import 'typeface-pacifico'
import {Link} from 'react-router-dom'
import ExportWithRedux from '../utils/ExportWithRedux';
import getvw from '../utils/getvw';

class Home extends React.Component {
    constructor(props){
        super();
        this.state={

        }
        window.addEventListener('resize',this.updateVW)
    }

    updateVW=()=>{
        let view = {width:window.innerWidth,height:window.innerHeight}
        this.setState({view:view})
    }

    componentDidMount=()=>{
        this.updateVW()
        this.setState({id:this.props.StateReducer.id})
    }

    ButtonStyle={
        width:getvw(150),
        height:getvw(70),
        fontSize:getvw(32)
    }

    render(){
        return <div className='Home' style={{ fontFamily: 'Pacifico' }}>
            <Logo />
            <div className='jusitfy-content-center mt-4' >
                {this.props.StateReducer.id?<Link to={'/play/'+(this.state.id?this.state.id:'')}>
                    <Button bg='dark' variant='dark' size='lg' className='border-white' style={this.ButtonStyle}>Play</Button>
                </Link>:undefined}
                {this.props.StateReducer.id?undefined:<Link to={'/Login'}>
                    <Button bg='dark' variant='dark' size='lg' className='border-white' style={this.ButtonStyle}>Login</Button>
                </Link>}
            </div>
        </div>
    }
}

export default ExportWithRedux(Home)