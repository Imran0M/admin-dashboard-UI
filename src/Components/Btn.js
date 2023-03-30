import React from 'react'
import Dashboard from './Dashboard'
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { AiTwotoneDelete } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { Button } from 'react-bootstrap';

function Btn() {
  return (
    <Dashboard>
      <div className='mar aaa' >
        <h3>Buttons</h3>
        <div className="btn-main">
          <div className='first-box'>
            <p className='circle'>Circle Buttons</p>
            <div className='first-bg'>
              <p className="circle-text"> Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
              <p className="btn-text">.btn-circle</p>
              <div className='social-icons'>
                <IconContext.Provider value={{ className: "shared-class", size: 20 }}>
                  <p style={{ color: "blue" }}><BsFacebook /></p>
                  <p> <AiOutlineCheck /></p>
                  <p style={{ color: "orange" }}><BsFillExclamationTriangleFill /></p>
                  <p style={{ color: "red" }}> <AiTwotoneDelete /></p>
                </IconContext.Provider>
              </div>
              <p className="btn-text">.btn-circle-sm</p>
              <div className='social-icons'>
                <IconContext.Provider value={{ className: "shared-class", size: 20 }}>
                  <p style={{ color: "blue" }}><BsFacebook /></p>
                  <p> <AiOutlineCheck /></p>
                  <p style={{ color: "orange" }}><BsFillExclamationTriangleFill /></p>
                  <p style={{ color: "red" }}> <AiTwotoneDelete /></p>
                </IconContext.Provider>
              </div>
              <p className="btn-text">.btn-circle-lg</p>
              <div className='social-icons'>
                <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
                  <p style={{ color: "blue" }}><BsFacebook /></p>
                  <p> <AiOutlineCheck /></p>
                  <p style={{ color: "orange" }}><BsFillExclamationTriangleFill /></p>
                  <p style={{ color: "red" }}> <AiTwotoneDelete /></p>
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className='second-box'>
            <p className='circle'>Split Buttons with Icon</p>
            <div className="secont-bg">
              <p className="circle-text">Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.</p>
              <div className='dis'>
                <Button varient="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>

              </div>


            </div>
          </div>

        </div>
      </div>


    </Dashboard>
  )
}

export default Btn