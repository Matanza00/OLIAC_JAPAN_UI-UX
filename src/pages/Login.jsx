import React from 'react'
import './login.css';
import CAR from '../assets/car-image.png'
import EmailIcon from '@mui/icons-material/EmailOutlined';
import KeyIcon from '@mui/icons-material/Key';
import { Button } from '@mui/material';

const Login = () => {
  return (
    <div className='container login__container'>

            
            <div className='login__details'>
                  <div className='company__name' >
                      <h5 className='oliac__japan'>OLIAC JAPAN</h5>
                      <h3 className='slogan___oliac'>QUALITY VEHICLE EXPORTERS</h3>
                  </div>
                  <div className='company__details'>
                      <h2>+92-333-XXX-XXXX</h2> 
                      <h2>oliacjapan@gmail.com</h2>
                  </div>
            </div>

            {/*end of left part*/}

            <div className='login__form'>
                <div className='login__box'>
                  <div className='email__detail'>
                    <h1>Email</h1>
                    <EmailIcon className='email-icon' />
                  </div>
                    <input type="text" name="name" placeholder='Your Email' className='text-box' required />
                    <div className='email__detail'>
                    <h1>Password</h1>
                    <KeyIcon className='email-icon' />
                  </div>
                    <input type="text" name="name" placeholder='Your Password' className='text-box' required />
                 <button type='submit' className='login-button'><p>LOGIN</p></button>
                  </div>

                  {/*END OF RIGHT PART*/}
                  
                  
            </div>
    </div>
  )
}

export default Login