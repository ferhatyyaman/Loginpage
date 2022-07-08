import './App.css';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';


function App() {
  const adminUser={
    email:"admin@gmail.com",
    password:"admin"
  }

  const[user,setUser]=useState({name:"",email:""});
  const[error,setError]=useState("");

  const Login=details =>{
    console.log(details);

    if(details.email===adminUser.email && details.password===adminUser.password){
      console.log("giriş başarılı");
      setUser({
        email:details.email
      });
    }
    else{
      console.log("giriş başarısız");
      setError("hatalı");
    }
  }
  const Logout=()=>{
    setUser({name:"",email:""});
  }

  return (
    <div>
      {(user.email !=="")?(
        <div>
          <h2>--</h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
