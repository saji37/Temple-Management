import React from 'react'
import Header from '../../sharedComponents/header/Header'
import Sidebar from '../../sharedComponents/sidebar/Sidebar'

function SevaOrders({activeModel,setActiveModel}) {
  return (
    <div >
        <Header />
        <div className="container-fluid h-full ">
        <div className="row flex-nowrap">
        <Sidebar activeModel={activeModel} setActiveModel={setActiveModel}/>
        </div>
        <main>
      Seva Orders...ladnsclkjasncnaslascnkasnlasnclkasnanlnscl
      <h1>alkvcnalsnlcvanslnvalksnlnalvkn aslk</h1>
      <h1>alkvcnalsnlcvanslnvalksnlnalvkn aslk</h1>
        </main>
        </div>
    </div>
  )
}

export default SevaOrders
