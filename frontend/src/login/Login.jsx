import React from 'react'
import './login.css'
function Login() {
  return (
    <div>
      <div className="container-md shadow-lg rounded border border-1 col-md-4" id='loginBlock'>
            <div className="p-3 ">
              <div className="form-floating mb-3">
                <input type="text" className="form-control " id="floatingInput" placeholder="EmailId" />
                <label htmlFor="floatingInput ">Email Id</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control " id="floatingInput" placeholder="Password" />
                <label htmlFor="floatingInput ">Password</label>
              </div>
              <button className="btn shadow shadow-lg bg-[#f43f08]" id="btn">
              Login
              </button>
            </div>
      </div> </div>
  )
}

export default Login
