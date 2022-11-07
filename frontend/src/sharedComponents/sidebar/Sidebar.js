import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import { PersonPlus,House,ListTask} from 'react-bootstrap-icons';
function Sidebar() {
  return (
    <div id='sideBar' className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 position-fixed ">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
             
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start p-2 w-100 ">
                    <li className="w-100 pt-3 sideBarEle" >
                    <Link style={{textDecoration: 'none'}} to="/">
                        <House className="icon" size={25}/><span className="ms-1 d-none d-md-inline">Home</span>
                       </Link> 
                    </li>
                    <li className="w-100 pt-3 sideBarEle">
                            <Link style={{textDecoration: 'none'}} to="/sevalist">
                            <PersonPlus className="icon" size={25}/> <span className="d-none d-md-inline">Seva List</span></Link>
                    </li>
            
                    <li className="w-100 pt-3 sideBarEle">
                            <Link style={{textDecoration: 'none'}} to="/sevaorders">
                            <ListTask className="icon" size={25}/> <span className="d-none d-md-inline">Seva Orders</span></Link>
                    </li>
                    {/* <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div> */}
                </ul>
            </div>
        </div>
  )
}

export default Sidebar
