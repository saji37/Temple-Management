import './App.css';
import Dashboard from './adminDashboard/dashboard';
import SevaList from './adminDashboard/sevaList/SevaList';
import SevaOrders from './adminDashboard/sevaOrders/SevaOrders';
import { Route,BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
      <Routes>       
         <Route path='/' exact='true' element={<Dashboard />}></Route>
         <Route path='/sevalist' exact='true' element={<SevaList />}></Route>
         <Route path='/sevaorders' exact='true' element={<SevaOrders />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
