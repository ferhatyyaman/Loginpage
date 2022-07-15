import React from 'react'
import { useState } from 'react';
import { Form, FormGroup,Label,Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom'
import { BsPersonFill,BsUnlockFill } from "react-icons/bs";


const LoginForm = () => {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })
    const nagivate = useNavigate();
    const adminUser = {
        email: "admin@gmail.com",
        password: "admin"
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (details.email === adminUser.email && details.password === adminUser.password) {
            nagivate("/");
        }
        else {
            nagivate("/LoginForm");
        }

    
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
        <div className='LoginDiv'>
            <form onSubmit={submitHandler} className="formhandler">
                <div className='form-inner'>

                    <div className='icon'><BsPersonFill size={150} color="#1B99E5" /></div>


                    <Form className='form'>
                        <FormGroup>

                            <input className='email' type="email" name='email' id='email' placeholder=" &#xF002; Email" onChange={emailHandler} value={details.email} />
                        </FormGroup>
                        {' '}
                        <FormGroup>

                            <input className='password' type="password" name='password' id='password' placeholder="&#xF002; *******" onChange={passwordHandler} value={details.password} />
                        </FormGroup>
                        {' '}
                    </Form>
                    <div className='check'>
                    <FormGroup>
                        <Input id="exampleCheck" name="check" type="checkbox" />
                        <Label check for="exampleCheck"><a href="#">Remember me </a></Label>
                            
                    </FormGroup>
                    <a href="#" >  forgot password? </a> 
                    </div>

                    <input className='button' type="submit" value="LOGIN" />

                </div>
            </form>
        </div>
    )
};

export default LoginForm;


