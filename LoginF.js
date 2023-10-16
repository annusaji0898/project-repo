import React, { Component } from 'react'
import './LoginForm.css'
import { useState, use} from 'react'
import logo from './stack.png'
import Validation from './validation'



function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: [e.target.value] })
    }

    function handleValidation(e) {
        e.preventDefault()
        setErrors(Validation(values))
    }
    
    return (

       
        <div className="full">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="icon">
                <img src={logo} alt="Image" height='30px' width='30px' />
            </div>
            <div className="col">
                <button className="social google"><i class="fa fa-google"></i> Login with Google</button>
                <button className="social github"><i class="fa fa-github"></i> Login with Github</button>
                <button className="social facebook"><i class="fa fa-facebook-square"></i> Login with Facebook</button>
                <div className="container">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={handleInput}></input>
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className="pass">
                        <div className="password-label-container">
                            <label htmlfor="password">Password</label>
                            <label className="forget" htmlfor="forget password" onChange={handleInput}>Forget Password?</label>
                        </div>
                        <input type="password" name="Password" id="password"></input>
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <input type="button" onClick={() => { alert('email is: ${email} password is : ${password}') }} className="button1" value="Login" name="password" />
                </div>
                <div className="signup_link">
                    <span>Don't have an account? <a href="#">Sign up</a></span>
                    <span>Are you an employer? <a href="#">Sign up on a talent <i class="fa fa-external-link"></i></a></span>
                </div>
            </div>
        </div>



    )
}

export default Login;