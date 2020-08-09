import React from 'react'

export const Signin = props => {

    return (
        <div className="signupholder">
            <div className="signupholder__form">
                <div className="signupholder__form-tittle">Sign In</div>
                    <div className="signupholder__form-inpwrapp">
                        <i className="fa fa-envelope-open emailicon" aria-hidden="true"></i>
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
                        <i className="fa fa-lock passicon" aria-hidden="true"></i>
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
                        <i className="fa fa-github other" aria-hidden="true"></i>
                        <i className="fa fa-telegram other" aria-hidden="true"></i>
                        <i className="fa fa-twitter-square other" aria-hidden="true"></i>
                        <i className="fa fa-steam-square other" aria-hidden="true"></i>
                        <i className="fa fa-facebook-square other" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
    )
    
} 