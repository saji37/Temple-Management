import './App.css';
import { useState } from 'react';
import Dashboard from './adminDashboard/dashboard';
import SevaList from './adminDashboard/sevaList/SevaList';
import SevaOrders from './adminDashboard/sevaOrders/SevaOrders';
import { Route,BrowserRouter, Routes,Navigate} from 'react-router-dom';
import  {}  from 'react-router';
import Login from './login/Login';
function App() {
  const [activeModel,setActiveModel] =useState('Home');
  const token=localStorage.getItem('authenticated');
  const [checkUser,setCheckUser] = useState(token)
  console.log(checkUser)
  return (

      <BrowserRouter>
      <Routes>   
     
          <> 
                  <Route path='/login' exact='true' element={<Login />}  ></Route> 
<Route path='/' exact='true' element={<Dashboard activeModel={activeModel} setActiveModel={setActiveModel}/>}></Route>
         <Route path='/sevalist' exact='true' element={<SevaList activeModel={activeModel} setActiveModel={setActiveModel}/>}></Route>
         <Route path='/sevaorders' exact='true' element={<SevaOrders activeModel={activeModel} setActiveModel={setActiveModel}/>}></Route></>

        
         {/* <Route path="*" element={<Navigate to='/login' />} /> */}
        {/* <Route path='/404' component={My404Component} /> */}
{/* <Redirect from='*' to='/404' /> */}
{/* <Route path='*' >
  <Redirect to='/login' />
</Route> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
