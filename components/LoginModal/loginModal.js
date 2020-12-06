import React, {useState, useContext} from 'react';
import './loginModal.css';



const LoginModal = (props) => {

const [email, setEmail] = useState('');
const [password , setPassword] = useState('');

const Email = (event) => {
    setEmail(event.target.value)
    
}

const Password = (event) => {
    setPassword(event.target.value)
}

const SignUp = () => {
    if(email !== '' && password !=='')
    {
    
    }
}


return (
    <div className="login" onClick={props.clickedModal}> 
    
    <div className="loginBox" onClick={props.stopPropgation}><p>Welcome to Login/SignUp Page</p>
    {/* <Button>USerName</Button> */}
    {/* <label style={{ position:"relative",top:"90px" , left: "-280px", color:"red"}}>UserName</label>
    <label style={{ position:"relative",top:"120px" , left: "-350px", color:"red"}}>Password</label> */}
    <p style={{ alignItems:"left", color:"orange", marginTop:"10%",marginLeft:"20%", textAlign:"left"}}  onChange={Email} >UserName  
    <input style={{marginLeft : "3%"}}></input></p>
    <p style={{ alignItems:"left", color:"orange", marginTop:"7%",marginLeft:"20%", textAlign:"left"}} onChange={Password}>Password 
    <input style={{marginLeft : "3%"}}></input></p>
    <button style={{marginRight : "10%"}} >Login</button>
    <button onClick={SignUp}>Sign Up</button>
    </div>
   </div>
   
    )

}

export default LoginModal;