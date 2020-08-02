import React from 'react'

export const Signin = props => {

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    placeholder="Your Email" 
                    id="email" 
                    name="email"
                    onChange={props.inputHandler} 
                />
                <input 
                    type="password" 
                    placeholder="Your Password" 
                    id="password" 
                    name="password"
                    onChange={props.inputHandler} 
                />
                <button 
                    onClick={props.loginHandler}
                    disabled={props.loading}
                >
                    signin
                </button>
            </div>
        </div>
    )
    
} 