import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div>
        <div>
            <h1>Login</h1>
            <form action=''>
                <div>
                    <input type="email" />
                    <label htmlFor="">Your Email</label>    
                </div>
                <div>
                    <input type="password" />
                    <label htmlFor="">Your Pass</label>    
                </div>
                <div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="Remember Me">Remember Me</label>
                    </div>  
                    
                    <button type="submit">Login</button>

                    <div>
                        <span>Forgot Password?</span>
                    </div> 
                    
                </div>

                <div>
                    <span>New Here? <Link to="/Register">Join Us</Link> </span> 
                </div> 
            </form>
            
        </div>
    </div>
  )
}

export default Login