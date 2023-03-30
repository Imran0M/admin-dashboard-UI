import React from 'react'
import Dashboard from './Dashboard'
import { BiDollar } from 'react-icons/bi';
import { VscTasklist } from 'react-icons/vsc';
import { TbMessageCircle2 } from 'react-icons/tb';
import { BsCalendar2Month } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import monitor from './assets/monitor.jpg';

function Components() {
    return (
        <Dashboard>
            <div className="dash-tittle">
                <h3>Dashboard</h3>
                <Button varient="primary">Generate</Button>
            </div>
            <div className="dash-comp-one">
                <div className="main-card">
                    <div className='sub-card'>
                        <div className="mini-card monthly">
                            <p style={{ color: "blue" }}>EARNINGS (MONTHLY)</p>
                            <div className="inner-st">
                                <p style={{ fontWeight: "bold" }}>$40,000</p>
                                <BsCalendar2Month />
                            </div>

                        </div>
                        <div className="mini-card annual">

                            <p style={{ color: "green" }}>EARNINGS (ANNUAL)</p>
                            <div className="inner-st">
                                <p style={{ fontWeight: "bold" }}>$215,000</p>
                                <BiDollar />
                            </div>

                        </div>
                        <div className="mini-card task ">

                            <p style={{ color: "skyblue", }}>Tasks</p>
                            <div className="inner-st">
                                <p style={{ fontWeight: "bold" }}>50%</p>
                                < VscTasklist />
                            </div>

                        </div>
                        <div className="mini-card request">

                            <p style={{ color: "orange" }}>Pending Request</p>
                            <div className="inner-st">
                                <p style={{ fontWeight: "bold" }}>18</p>
                                <TbMessageCircle2 />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <div className="project">
                    <h3 style={{ color: "blue" }}>Projects</h3>
                    <div className="play">
                        <p>Server Migration</p>
                        <p style={{fontWeight:"bold"}}>20%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="play">
                        <p>Sales Tracking</p>
                        <p style={{fontWeight:"bold"}}>40%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="play">
                        <p>Customer Database</p>
                        <p style={{fontWeight:"bold"}}>60%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="play">
                        <p>Payout layout</p>
                        <p style={{fontWeight:"bold"}}>80%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="play">
                        <p>Account setup</p>
                        <p style={{fontWeight:"bold"}}>Completed</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div className="illus">
                    <div>
                    <h3 className="illustration" style={{ color: "blue"}}>Illustation</h3>
                    </div>
                    <img  className="picture" src={monitor} alt="monitor"/> 
                    <p className="text-text">Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                </div>
            </div>

        </Dashboard>

    )
}

export default Components