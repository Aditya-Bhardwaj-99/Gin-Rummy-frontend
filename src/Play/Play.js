import React from 'react'
import ExportWithRedux from '../utils/ExportWithRedux'
import { withRouter } from 'react-router-dom'
import Loading from '../Components/Loading/Loading'
import getvw from '../utils/getvw'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardVars from '../Constants/CardVars'
import Cards from '../Components/Card/Cards'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class Play extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: 0,
            knock: {
                number: '',
                face: 'x_x'
            },
            openDeck: {
                number: '',
                face: 'x_x'
            },
            closeDeck: {
                number: '',
                face: 'x_x'
            },
            playerCards: []
        }
    }

    PlayStyle = {
        width: '100%',
        minHeight: getvw(520),
        borderRadius: getvw(7),
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: getvw(0.5),
        // height: getvw(200)
    }

    ButtonStyle = {
        width: getvw(150),
        height: getvw(70),
        fontSize: getvw(32),
        marginBottom: getvw(20)
    }

    componentDidMount = () => {
        // if (!this.props.StateReducer.id) {
        //     this.props.history.push('/')
        // }
        this.getData().then((data) => { this.setState({ loading: 0, ...this.test }) })
    }

    test = {
        knock: {
            number: 'KNOCK',
            face: 'x_x'
        },
        openDeck: {
            number: CardVars.number['K'],
            face: CardVars.face['hearts']
        },
        closeDeck: {
            number: 'DECK',
            face: 'x_x'
        },
        playerCards: [
            {
                number: CardVars.number['A'],
                face: CardVars.face['spades']
            }, {
                number: CardVars.number['2'],
                face: CardVars.face['hearts']
            }, {
                number: CardVars.number['3'],
                face: CardVars.face['diamond']
            }, {
                number: CardVars.number['4'],
                face: CardVars.face['clubs']
            }, {
                number: CardVars.number['5'],
                face: CardVars.face['spades']
            }, {
                number: CardVars.number['6'],
                face: CardVars.face['hearts']
            }, {
                number: CardVars.number['7'],
                face: CardVars.face['diamond']
            }, {
                number: CardVars.number['8'],
                face: CardVars.face['clubs']
            }, {
                number: CardVars.number['9'],
                face: CardVars.face['spades']
            }, {
                number: CardVars.number['10'],
                face: CardVars.face['hearts']
            }
        ]
    }

    getData = () => {
        return new Promise((resolve) => {
            setTimeout(() => { let x = 10; resolve(x) }, 2000)
            this.setState({ loading: 1 })
        })
    }

    HandleDrag = (e) => {
        const {source,destination} = e
        if(!destination){
            return
        }
        if(destination.droppableId==='cards' && source.droppableId==='cards'){
            let cards = this.state.playerCards
            let temp=cards.splice(source.index,1)
            cards.splice(destination.index,0,temp[0])
            this.setState({playerCards:cards})
        } else if(destination.droppableId==='cards' && source.droppableId==='deck'){
            let temp = this.state.closeDeck
            let cards = this.state.playerCards
            cards.splice(destination.index,0,temp)
            this.setState({
                playerCards:cards,
                closeDeck:{
                    number: 'DECK',
                    face: 'x_x'
                }
            })
        } else if(destination.droppableId==='knock' && source.droppableId==='cards'){
            let cards = this.state.playerCards
            let temp = cards.splice(source.index,1)
            this.setState({playerCards:cards,knock:temp[0]})
        } else if(destination.droppableId==='open' && source.droppableId==='cards'){
            let cards = this.state.playerCards
            let temp = cards.splice(source.index,1)
            this.setState({playerCards:cards,openDeck:temp[0]})
        }
    }

    dragStarte=(e)=>{
        const {source} = e
        if(source.droppableId==='deck'){
            this.setState({closeDeck:{
                number:CardVars.number['J'],
                face:CardVars.face['spades']
            }})
        }
    }

    render() {
        return <div className='Play position-realtive' style={{ fontFamily: 'Pacifico' }}>
            {this.state.loading ? <Loading></Loading> : <div className='Play text-white mt-5' style={this.PlayStyle}>
                <DragDropContext onDragEnd={this.HandleDrag} onDragStart={this.dragStarte}>
                    <Row className='Decks'>
                        <Droppable droppableId='knock' direction='horizontal'>
                            {(provided) => (
                                <Col {...provided.droppableProps} ref={provided.innerRef} style={{ marginLeft: getvw(200) }} className='Knock'><Cards wWidth='2400' number={this.state.knock.number} face={this.state.knock.face}></Cards>
                                    {provided.placeholder}
                                </Col>
                            )}
                        </Droppable>
                        <Droppable droppableId='open' direction='horizontal'>
                            {(provided) => (
                                <Col {...provided.droppableProps} ref={provided.innerRef} className='OpenDeck'><Cards wWidth='2400' number={this.state.openDeck.number} face={this.state.openDeck.face}></Cards>
                                    {provided.placeholder}
                                </Col>
                            )}
                        </Droppable>
                        <Droppable droppableId='deck' direction='horizontal'>
                            {(provided) => (
                                <div className='Deck' style={{marginRight:getvw(200)}} {...provided.droppableProps} ref={provided.innerRef}>
                                    {[1].map((data,index)=>{
                                        return <Draggable key={data} id={data} index={index} draggableId='deck'>
                                        {(provided) => (
                                            <Col className='ClosedDeck' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <Cards wWidth='2400' number={this.state.closeDeck.number} face={this.state.closeDeck.face}></Cards>
                                            </Col>
                                        )}
                                    </Draggable>
                                    })}
                                {provided.placeholder}
                            </div>
                            )}
                        </Droppable>
                    </Row>
                    <Row className='mt-5'>
                        <Droppable droppableId='cards' direction='horizontal'>
                            {(provided) => (
                                <Row className='Player' {...provided.droppableProps} style={{ marginLeft: getvw(90) }} ref={provided.innerRef} >
                                    {this.state.playerCards.map((data, index) => {
                                        return <Draggable key={index} draggableId={index + ''} index={index} >
                                            {(provided) => (<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} id={index} key={index}>
                                                <Cards number={data.number} face={data.face} wWidth='2400'></Cards>
                                            </div>)}
                                        </Draggable>
                                    })}
                                    {provided.placeholder}
                                </Row>
                            )}
                        </Droppable>
                    </Row>
                </DragDropContext>
            </div>}
            <div className='jusitfy-content-center mt-4' >
                <Link to={'/'}>
                    <Button bg='dark' variant='dark' size='lg' className='border-white' style={this.ButtonStyle}>Home</Button>
                </Link>
            </div>
        </div>
    }
}
export default withRouter(ExportWithRedux(Play))