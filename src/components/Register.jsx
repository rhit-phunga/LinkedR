import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => (
    
    <div>
        <div>
            <h1>Register</h1>
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
                        <label htmlFor="TOS">I accept terms and conditions</label>
                    </div>  
                    
                    <button type="submit">Register</button>

                </div>

                <div>
                    <span>Already have an account? <Link to="/Login">Login</Link> </span> 
                </div> 
            </form>
            
        </div>
    </div>
  
)

export default Register