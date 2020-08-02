import React from 'react'

export const Signup = props => {
    return  (
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
                    onClick={props.registerHandler}
                    disabled={props.loading}
                >
                    signup
                </button>
            </div>
        </div>
    )
} 