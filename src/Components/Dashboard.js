import React from 'react'
import { useHistory } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

function Dashboard({ children }) {
    const history = useHistory()
    return (
        <div className="main">
            <div className="sidebar">
                <h4 className="admin">ADMIN BOARD</h4>
                <p className="line"></p>
                <button onClick={() => history.push('/')} className="dashboard-btn">Dashboard</button>
                <p className="line"></p>
                <Dropdown>
                    <Dropdown.Toggle className="comp-btn">
                        Components
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <div className="dropdown">
                            <Dropdown.Item className="bgc" onClick={() => history.push('/button')}>Button</Dropdown.Item>
                            <Dropdown.Item className="bgc" onClick={() => history.push('/crd')}>Card</Dropdown.Item>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="page-btn">
                        Pages
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <div className="dropdown">
                            <Dropdown.Item className="bgc" onClick={() => history.push('/login')} >Register</Dropdown.Item>
                            <Dropdown.Item className="bgc" onClick={() => history.push('/nopage')} >404 Error page</Dropdown.Item>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="page-btn">
                        utilities
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <div className="dropdown">
                            <Dropdown.Item className="bgc">Colors</Dropdown.Item>
                            <Dropdown.Item className="bgc">Borders</Dropdown.Item>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="mainmenu">
                <div className="nav">
                    <input className='input' placeholder='Search For'
                    />
                    <Button varient="Primary">search</Button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Dashboard
