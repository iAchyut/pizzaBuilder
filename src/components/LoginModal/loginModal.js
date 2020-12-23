import React, {useState, useContext} from 'react';
import './loginModal.css';
import axios from 'axios';
import {PizzaContext} from '../context/pizzaContext'



const LoginModal = (props) => {

const [email, setEmail] = useState('');
const [password , setPassword] = useState('');
const state = useContext(PizzaContext)

const Email = (event) => {
    setEmail(event.target.value)
    
}

const Password = (event) => {
    setPassword(event.target.value)
}


const Login = () => {
    let data = {
        email: email,
        password:password,
        returnSecureToken : true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChQUI5E1ZNCJbXw6etULzEKBgMbfQU_Ro'
    axios.post(url, data)
    .then(respsonse => {
        console.log(respsonse);
        const expirationDate = new Date (new Date().getTime() + respsonse.data.expiresIn * 1000)
        localStorage.setItem('token', respsonse.data.idToken)
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('userID', respsonse.data.localId)
        state.setAuth();
        state.setLModel();
    }
        )
    .catch(err => 
        console.log(err))
}

const SignUp = () => {
    if(email !== '' && password !=='')
    {
        let data = {
            email: email,
            password:password,
            returnSecureToken : true
        }
        console.log('Login/SignUp')
        console.log(data)
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChQUI5E1ZNCJbXw6etULzEKBgMbfQU_Ro'
        axios.post(url,data)
        .then(respsonse => {
            console.log(respsonse);
            const expirationDate = new Date (new Date().getTime() + respsonse.data.expiresIn * 1000)
            localStorage.setItem('token', respsonse.data.idToken)
            localStorage.setItem('expirationDate', expirationDate)
            localStorage.setItem('userID', respsonse.data.localId)
            state.setAuth();
            state.setLModel();
        }
            )
        .catch(err => 
            console.log(err))
}
}
 
const logonModal = state.mOpen ? (
    
    <div className="login" onClick={props.clickedModal}> 
     <div className="loginBox" onClick={props.stopPropgation}><p>Welcome to Login/SignUp Page</p>
    {/* <Button>USerName</Button> */}
    {/* <label style={{ position:"relative",top:"90px" , left: "-280px", color:"red"}}>UserName</label>
    <label style={{ position:"relative",top:"120px" , left: "-350px", color:"red"}}>Password</label> */}
    <p style={{ alignItems:"left", color:"orange", marginTop:"10%",marginLeft:"20%", textAlign:"left"}}  onChange={Email} >UserName  
    <input style={{marginLeft : "3%"}}></input></p>
    <p style={{ alignItems:"left", color:"orange", marginTop:"7%",marginLeft:"20%", textAlign:"left"}} onChange={Password}>Password 
    <input style={{marginLeft : "3%"}}></input></p>
    <button style={{marginRight : "10%"}} onClick={Login}>Login</button>
    <button onClick={SignUp}>Sign Up</button>
    </div>
   </div>
):null ;

console.log(state.isAuthenticated)

return ( 
<div>
   {logonModal}
   </div>
    )

}

export default LoginModal;