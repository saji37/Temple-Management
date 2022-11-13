import React from 'react'

function DisplaySevaLists({list}) {
    console.log(list)
  return (
    <div>
            <table className="table shadow-lg rounded " style={{fontFamily:'Merriweather'}}>
  <thead>
    <tr>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    {list.map((order,index) => {
       return <tr key={index} className='text-slate-600 hover:text-white hover:bg-gradient-to-r from-[#f43f08] to-red-200 p-2' >
       <td>{order.name}</td>
     </tr>
    })}
    
   
  </tbody>
</table>
    </div>
  )
}

export default DisplaySevaLists
