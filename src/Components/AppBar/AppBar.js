import Navbar from 'react-bootstrap/Navbar';
import {RiAccountPinCircleFill} from 'react-icons/ri'
import 'typeface-pacifico'
import ExportWithRedux from '../../utils/ExportWithRedux';
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import React from 'react'

function AppBar(props){


    const accountCircleStyle ={
        color:'white',
        width:'32',
        height:'32'
    }

    const HandleLogout=()=>{
        props.UpdateState('id',undefined)
    }

    return <div className='AppBar'>
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand style={{fontFamily:'Pacifico'}}>
                Gin Rummy
            </Navbar.Brand>
            <Navbar.Collapse className='justify-content-end'>
                    <SplitButton drop='left' title={<RiAccountPinCircleFill style={accountCircleStyle} ></RiAccountPinCircleFill>} color='dark' variant='dark'>
                            {props.StateReducer.id?<><Dropdown.Item>Profile</Dropdown.Item>
                            <Dropdown.Item onClick={HandleLogout}>LogOut</Dropdown.Item></>:<></>}
                    </SplitButton>
            </Navbar.Collapse>
        </Navbar>
    </div>
}
export default ExportWithRedux(AppBar)