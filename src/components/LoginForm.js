import React from 'react'
import { useState } from 'react';

const LoginForm = (Login, error) => {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })

    const submitHandler = (event) => {
        event.preventDefault();
        Login(details);
        
    }
    const nameHandler = (event) => {
        setDetails({ ...details, name: event.target.value })
    }
    const emailHandler = (event) => {
        setDetails({ ...details, email: event.target.value })
    }
    const passwordHandler = (event) => {
        setDetails({ ...details, password: event.target.value })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login Sayfası</h2>

                    {(error !== "") ? (<div className='error'>{error}</div>) : ""}

                    <div className='form-group'>
                        <lable>name:</lable>
                        <input type="text" name='name' id='name' onChange={nameHandler} value={details.name} />
                    </div>

                    <div className='form-group'>
                        <lable>email:</lable>
                        <input type="email" name='email' id='email' onChange={emailHandler} value={details.email} />
                    </div>
                    <br /><br />
                    
                    <div className='form-group'>
                        <lable>Password:</lable>
                        <input type="password" name='password' id='password' onChange={passwordHandler} value={details.password} />
                    </div>
                    <br /><br />

                    <input type="submit" value="LOGIN" />

                </div>
            </form>
        </div>
    )
};

export default LoginForm;
