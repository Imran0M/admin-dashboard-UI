import React from 'react'
import Dashboard from './Dashboard'
import { BiDollar } from 'react-icons/bi';
import { VscTasklist } from 'react-icons/vsc';
import { TbMessageCircle2 } from 'react-icons/tb';
import { BsCalendar2Month } from 'react-icons/bs';

function Crd() {
  return (
    <Dashboard>
       <div className="mar">
        <h3 className='card-tittle'>Cards</h3>
        <div className="main-card">
          <div className='sub-card'>
               <div className="mini-card monthly">
                <p style={{color:"blue" }}>EARNINGS (MONTHLY)</p>
                <div className="inner-st">
                <p style={{fontWeight:"bold"}}>$40,000</p>
                <BsCalendar2Month/>
                </div>
              
               </div>
               <div className="mini-card annual">
                
                <p style={{color:"green"}}>EARNINGS (ANNUAL)</p>
                <div className="inner-st">
                <p style={{fontWeight:"bold"}}>$215,000</p>
                <BiDollar/>
                </div>
             
               </div>
               <div className="mini-card task ">
               
                <p style={{color:"skyblue" ,}}>Tasks</p>
                <div className="inner-st">
                <p style={{fontWeight:"bold"}}>50%</p>
                < VscTasklist/>
                </div>
               
               </div>
               <div className="mini-card request">
                
                <p style={{color:"orange"}}>Pending Request</p>
                <div className="inner-st">
                <p style={{fontWeight:"bold"}}>18</p>
                <TbMessageCircle2/>
                </div>
               
               </div>
          </div>
        </div>
          {/* section - card */}

      <div className='carding'>
        <div className="first-tittle">
        <p style={{color:"#4e73df", fontWeight:"bold"}}>Default Card Example</p>
        <div className="card-text">
            <p>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.</p>
        </div>
        </div>

        <div className="second-tittle">
           <p style={{color:"#4e73df", fontWeight:"bold"}}> Dropdown Card Example</p>
        <div className="card-text">
            <p>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.</p>
        </div>
        </div>

      </div>

      <div className='carding'>
        <div className="first-tittle">
        
        <p style={{color:"#4e73df", fontWeight:"bold"}}>  Basic Card Example</p>
        <div className="card-text">
            <p>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.</p>
        </div>
        </div>

        <div className="second-tittle">
        
        <p style={{color:"#4e73df", fontWeight:"bold"}}>Collapsable Card Example</p>
        <div className="card-text">
<p>This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!
</p>        </div>
        </div>

      </div>
       </div>

     
    </Dashboard>
  )
}

export default Crd