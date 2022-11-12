import React from 'react'
import Header from '../sharedComponents/header/Header'
import Sidebar from '../sharedComponents/sidebar/Sidebar'
import './dashboard.css'
import Main from './main/Main'
function dashboard({ setActiveModel, activeModel }) {
  return (
    <div className='wrappedContent'>
      <header>
      <Header />
      </header>
      <div className="container-fluid">
    <div className="row flex-nowrap ">
      <Sidebar setActiveModel={setActiveModel} activeModel={activeModel}/>
      </div>
    
      <main  >
  <div className="container pt-4">
    <Main />
    </div>
</main>

</div>
</div>
  )
}

export default dashboard
