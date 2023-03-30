import React from 'react'
import { useHistory } from 'react-router-dom'

function Login() {
    const history=useHistory()
    return (
        <div className="login-bg" >
            <button className="non" onClick={()=>history.push('/')}>Back</button>
        <div >
            <div className="hello">
                  <div className="login-card">
                       <h3 className="create-text">create an account</h3>
                       <div className="inp-st">
                        <input className="inp-name"placeholder=" firstnName"/>
                        <input className="inp-name"  placeholder="Lastname"/>
                       </div>
                       <input className="email" placeholder="email"/>
                       <div className="inp-st">
                        <input className="inp-name"placeholder=" Password"/>
                        <input className="inp-name"  placeholder="Repeat Password"/>
                       </div>
                       <button className="register-btn">Register Account</button>
                       <p className="line"></p>
                       <button className="google-btn"> Register with google</button>
                       <p className="line"></p>
                       <button className="register-btn"> Register with Facebook</button>
                       </div>
                  </div>
            </div> 
        </div>
    )
}

export default Login