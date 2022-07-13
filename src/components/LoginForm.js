import React from 'react'
import { useState } from 'react';
import { Form,FormGroup,Label} from 'reactstrap';

const LoginForm = () => {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })
    const [submit ,setSubmit]=useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmit(true);

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
            <form onSubmit={submitHandler} className="formhandler">
                <div className='form-inner'>
                    <h2 className='loginsayfasi'>Login Sayfası</h2>

                    
                    <Form className='form'>
                        <FormGroup>
                            <Label>Name</Label>
                            <input type="text" name='name' id='name' placeholder="Name" onChange={nameHandler} value={details.name} />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label>Email</Label>
                            <input type="email" name='email' id='email' placeholder="Email" onChange={emailHandler} value={details.email} />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label>Password</Label>
                            <input type="password" name='password' id='password' placeholder="Password" onChange={passwordHandler} value={details.password} />
                        </FormGroup>
                        {' '}
                    </Form>

                    <input className='input' type="submit" value="LOGIN" />

                </div>
            </form>
        </div>
    )
};

export default LoginForm;


