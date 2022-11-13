import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getSevaOrders } from '../../services/services'
import Header from '../../sharedComponents/header/Header'
import Sidebar from '../../sharedComponents/sidebar/Sidebar'
import DisplaySevaLists from './DisplaySevaLists'

function SevaOrders({activeModel,setActiveModel}) {
  const [sevaOrdersList,setSevaOrdersList]=useState([])
  useEffect(()=>{
    getSevaOrders().then((data)=>data.json()).then((data)=>setSevaOrdersList(data));
  },[])
  console.log(sevaOrdersList)
  return (
    <div >
        <Header />
        <div className="container-fluid h-full ">
        <div className="row flex-nowrap">
        <Sidebar activeModel={activeModel} setActiveModel={setActiveModel}/>
        </div>
        <main>
         <DisplaySevaLists list={sevaOrdersList}/>
      

        </main>
        </div>
    </div>
  )
}

export default SevaOrders
