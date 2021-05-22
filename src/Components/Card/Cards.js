import React from 'react'
import {ImHeart,ImSpades,ImClubs,ImDiamonds} from 'react-icons/im'
import getvw from '../../utils/getvw';

//Taking card dim 8w:11h
export default function Cards(props){
    const number = props.number
    const face = props.face.split('_')[1]
    const color = props.face.split('_')[0]
    const cardwidth = props.cardWidth?props.cardWidth:170
    const cardheight = props.cardHeight?props.cardHeight:233.75
    const cardmargin = props.cardMargin?props.cardMargin:50
    const cardbr = props.cardBR?props.cardBR:15
    const font = props.Font?props.Font:23
    const wWidth = props.wWidth?props.wWidth:undefined
    // const wHeight = props.wHeight?props.wHeight:undefined
    let cardStyle = {
        width:getvw(cardwidth,wWidth),
        height:getvw(cardheight,wWidth),
        marginTop:getvw(cardmargin,wWidth),
        borderRadius: getvw(cardbr,wWidth),
        borderStyle:'solid',
        borderColor:'white'
    }
    const cardTopStyle={
        height:'25%',
        color:color,
        marginLeft:'5%',
        display:'flex',
        flexDirection:'column',
        fontSize:getvw(font,wWidth)
    }
    const cardMidStyle={
        height:'50%',
        color:color,
        alignItems:'center',
        justifyContent:'center'
    }
    const cardBotStyle={
        height:'25%',
        transform:'rotateZ(180deg)',
        color:color,
        marginRight:'5%',
        display:'flex',
        flexDirection:'column',
        fontSize:getvw(font,wWidth)
    }
    const cardSpecific = {
        width:getvw(font*4,wWidth),
        height:getvw(font*4,wWidth),
        alignItems:'center'
    }
    const cardSpecificSides = {
        width:getvw(font-font/10,wWidth),
        height:getvw(font-font/10,wWidth),
    }
    const cardTextStyle = {
        fontFamily: 'Pacifico'
    }
    if(props.addStyle){
        cardStyle = {
            ...cardStyle,
            ...props.addStyle
        }
    }
    return <div className='Cards bg-dark varient-dark text-light' style={cardStyle}>
            <div className='CardTop text-left d-flex' style={cardTopStyle}>
                <div style={cardTextStyle}>{number}</div>
                {
                    face === 'S' ? <div><ImSpades style={cardSpecificSides}/></div> 
                    : face === 'H' ? <div><ImHeart style={cardSpecificSides}/></div> 
                    : face === 'C' ? <div><ImClubs style={cardSpecificSides}/></div> 
                    : face === 'D' ? <div><ImDiamonds style={cardSpecificSides}/></div> 
                    : 'Nani Kure??'
                }
            </div>
            <div className='CardMid justify-content-center' style={cardMidStyle}>{
                face === 'S' ? <ImSpades style={cardSpecific}/> 
                : face === 'H' ? <ImHeart style={cardSpecific}/> 
                : face === 'C' ? <ImClubs style={cardSpecific}/> 
                : face === 'D' ? <ImDiamonds style={cardSpecific}/> 
                : 'Nani Kure??'
            }</div>
            <div className='CardBot text-left d-flex' style={cardBotStyle}>
                <div style={cardTextStyle}>{number}</div>
                {
                    face === 'S' ? <div><ImSpades style={cardSpecificSides}/></div> 
                    : face === 'H' ? <div><ImHeart style={cardSpecificSides}/></div> 
                    : face === 'C' ? <div><ImClubs style={cardSpecificSides}/></div> 
                    : face === 'D' ? <div><ImDiamonds style={cardSpecificSides}/></div> 
                    : 'Nani Kure??'
                }
            </div>
    </div>
}