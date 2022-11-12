import './App.css';
import { useState } from 'react';
import Dashboard from './adminDashboard/dashboard';
import SevaList from './adminDashboard/sevaList/SevaList';
import SevaOrders from './adminDashboard/sevaOrders/SevaOrders';
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import Login from './login/Login';
function App() {
  const [activeModel,setActiveModel] =useState('Home');
  const token=localStorage.getItem('token');
  const [checkUser,setCheckUser] = useState(token)
  return (
      <BrowserRouter>
      <Routes>    
        <Route path='/login' exact='true' element={<Login />}  ></Route> 
         <Route path='/' exact='true' element={<Dashboard activeModel={activeModel} setActiveModel={setActiveModel}/>}></Route>
         <Route path='/sevalist' exact='true' element={<SevaList activeModel={activeModel} setActiveModel={setActiveModel}/>}></Route>
         <Route path='/sevaorders' exact='true' element={<SevaOrders activeModel={activeModel} setActiveModel={setActiveModel}/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
