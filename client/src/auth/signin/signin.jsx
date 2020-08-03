import React from 'react'
import './signin.scss'

export const Signin = props => {

    return (
        <div className="signupholder">
            
            <div className="signupholder__form">
            
                <div className="signupholder__form-tittle">Sign Up</div>
                    <div className="signupholder__form-inpwrapp">
                        <i class="fa fa-envelope-open emailicon" aria-hidden="true"></i>
                        <input
                            className="signupholder__form-inpwrapp-inp" 
                            type="text" 
                            placeholder="Type your email" 
                            id="email" 
                            name="email"
                            onChange={props.inputHandler} 
                        />
                    </div>
                    <div className="signupholder__form-inpwrapp">
                        <i class="fa fa-lock passicon" aria-hidden="true"></i>
                        <input
                            className="signupholder__form-inpwrapp-inp"  
                            type="password" 
                            placeholder="Type your password" 
                            id="password" 
                            name="password"
                            onChange={props.inputHandler} 
                        />
                    </div>
                    <button 
                        className="signupholder__form-submit"  
                        onClick={props.loginHandler}
                        disabled={props.loading}
                    >
                        LOG IN
                    </button>
                    <div className="signupholder__form-orsentence">
                        or sign in with
                    </div>
                    <div className="signupholder__form-othersignup">
                        <i class="fa fa-github other" aria-hidden="true"></i>
                        <i class="fa fa-telegram other" aria-hidden="true"></i>
                        <i class="fa fa-twitter-square other" aria-hidden="true"></i>
                        <i class="fa fa-steam-square other" aria-hidden="true"></i>
                        <i class="fa fa-facebook-square other" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
    )
    
} 