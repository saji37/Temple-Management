import React,{useState} from 'react'
import './login.css'
import {login} from '../services/services'
import {useNavigate} from 'react-router-dom';

function Login() {
const navigate=useNavigate()
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
  async function loginDet(email,password){
    
var d=await login(email,password).then((data)=>data.json());
if(d.error){
  alert("Invalid credentials")
}
else
{
 
  
  localStorage.setItem("authenticated", d.token);
  localStorage.setItem("name", d.userData.name);



  if( localStorage.getItem("authenticated")){

    navigate('/')

  }else{
    navigate('/login')

  }

  
  
  

}
}
// .then((data)=>{
//       localStorage.setItem("authenticated", true);
//       navigate("/");
//     }).catch((err)=>alert("Error"))
// console.log(email);
// console.log(password);
  return (
    <div>
      <div className="container-md shadow-lg rounded border border-1 col-md-4" id='loginBlock'>
            <div className="p-3 ">
              <div className="form-floating mb-3">
                <input type="text" className="form-control " id="floatingInput" placeholder="EmailId" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="floatingInput ">Email Id</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control " id="floatingPass" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="floatingPass ">Password</label>
              </div>
              <button className="btn shadow shadow-lg bg-[#f43f08]" id="btn" onClick={()=>loginDet(email,password)}>
              Login
              </button>
            </div>
      </div> </div>
  )
}

export default Login
