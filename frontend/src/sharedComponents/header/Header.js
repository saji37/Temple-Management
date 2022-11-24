import React, { useEffect } from 'react'
import './header.css'
import { useNavigate } from 'react-router';
function Header() {
  const navigate=useNavigate()
  const name=localStorage.getItem('name');
  useEffect(()=>{
    if(!localStorage.getItem("authenticated")){
      navigate('/login')
    }
  },[])
 
  var myDate = new Date();
  var hours= myDate.getHours();
  var greet;

  if (hours < 12)
      greet =  "Morning";
  else if (hours >= 12 && hours <= 17)
      greet = "Afternoon";
  else if (hours >= 17 && hours <= 24)
      greet = "Evening";
  return (
    <nav id="main-navbar" className="navbar navbar-expand-lg fixed-top shadow-lg rounded ">
    <div className="container-fluid">
<div className="navbar-brand" href="#">
        <h1 style={{fontFamily:'Permanent Marker'}} className='text-[#fdba74]'>Seva Application </h1>
      </div>
      <ul className="navbar-nav ms-auto d-flex flex-row">
      
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li> */}

   
        {/* <li className="nav-item">
          <a className="nav-link me-3 me-lg-0" href="#">
            <i className="fas fa-fill-drip"></i>
          </a>
        </li>
  
        <li className="nav-item me-3 me-lg-0">
          <a className="nav-link" href="#">
            <i className="fab fa-github"></i>
          </a>
        </li> */}

{/*  
        <li className="nav-item dropdown">
          <a
            className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="flag-united-kingdom flag m-0"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#"
                ><i className="flag-united-kingdom flag"></i>English
                <i className="fa fa-check text-success ms-2"></i
              ></a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <a className="dropdown-item" href="#"><i className="flag-poland flag"></i>Polski</a>
            </li>
            <li>
              <a className="dropdown-item" href="#"><i className="flag-china flag"></i>中文</a>
            </li>
            <li>
              <a className="dropdown-item" href="#"><i className="flag-japan flag"></i>日本語</a>
            </li>
            <li>
              <a className="dropdown-item" href="#"><i className="flag-germany flag"></i>Deutsch</a>
            </li>
            <li>
              <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
            </li>
            <li>
              <a className="dropdown-item" href="#"><i className="flag-spain flag"></i>Español</a>
            </li>
            <li>
              <a className="dropdown-item" href="#"><i className="flag-russia flag"></i>Русский</a>
            </li>
            <li>
              <a className="dropdown-item" href="#"><i className="flag-portugal flag"></i>Português</a>
            </li>
          </ul>
        </li> */}

        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
              className="rounded-circle"
              height="22"
              alt="Avatar"
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </li> */}
      </ul>
      <div style={{display:'flex',color:'white',flexDirection:'row'}} className='d-none d-md-block'>
      <i><h4 className='space-y-5'>Good {greet} ,</h4></i>
    <h3 style={{margin:'10px'}}>{name}</h3>
    </div>
    </div>
  </nav>
  )
}

export default Header
