import React from 'react'
import Header from '../sharedComponents/header/Header'
import Sidebar from '../sharedComponents/sidebar/Sidebar'
import './dashboard.css'
import Main from './main/Main'
function dashboard() {
  return (
    <div className='wrappedContent'>
      <header>
      <Header />
      </header>
      <div className="container-fluid">
    <div className="row flex-nowrap ">
      <Sidebar />
      </div>
    
      <main style={{"marginTop": "58px"}} >
  <div className="container pt-4">
    <Main />
    </div>
</main>

</div>
</div>
  )
}

export default dashboard
