import React from 'react'
import ExportWithRedux from '../utils/ExportWithRedux'
import { withRouter } from 'react-router-dom'
import Loading from '../Components/Loading/Loading'
import getvw from '../utils/getvw'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Play extends React.Component {
    constructor(){
        super();
        this.state={
            loading:0
        }
    }

    PlayStyle = {
        width: '100%',
        minHeight: getvw(520),
        borderRadius: getvw(7),
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: getvw(0.5)
    }

    ButtonStyle = {
        width: getvw(150),
        height: getvw(70),
        fontSize: getvw(32),
        marginBottom: getvw(20)
    }

    componentDidMount = () => {
        if (!this.props.StateReducer.id) {
            this.props.history.push('/')
        }
        this.getData().then((data)=>{this.setState({loading:0,data:data})})
    }

    getData=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{let x=10; resolve(x)},2000)
            this.setState({loading:1})
        })
    }

    render() {
        return <div className='Play' style={{fontFamily:'Pacifico'}}>
            <div className='Play bg-dark text-white mt-5' style={this.PlayStyle}>
                <Row className='Decks'>
                    <Col className='Knock'>{this.state.data}</Col>
                    <Col className='OpenDeck'>{this.state.data}</Col>
                    <Col className='ClosedDeck'>{this.state.data}</Col>
                </Row>
                <Row className='Player'>
                    <Col>{this.state.data}</Col>
                </Row>
                {this.state.loading?<Loading></Loading>:null}
            </div>
            <div className='jusitfy-content-center mt-4' >
                <Link to={'/'}>
                    <Button bg='dark' variant='dark' size='lg' className='border-white' style={this.ButtonStyle}>Home</Button>
                </Link>
            </div>
        </div>
    }
}
export default withRouter(ExportWithRedux(Play))