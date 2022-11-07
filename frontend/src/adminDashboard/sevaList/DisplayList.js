import React from 'react'
import './sevaList.css'
import {PersonXFill,PencilSquare} from 'react-bootstrap-icons';
function DisplayList(props) {

    const {lists,removePerson,updatePerson} = props;
  return (
    <div className='displayTable col-md-8'>

      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {lists.map((list,index) => {
       return <tr key={index}>
       <td>{list.name}</td>
       <td><a href='#'><PencilSquare color='orange' size={20} onClick={()=>updatePerson(list.id)}/></a></td>
       {/* <td className='pe-auto'><PersonXFill color='red' size={20} onClick={removePerson} /></td> */}
       <td><a href='#'><PersonXFill color='red' size={20} onClick={()=>removePerson(list.id)} /></a></td>
     </tr>
    })}
    
   
  </tbody>
</table>
      
      {/* )} */}
    </div>
  )
}

export default DisplayList


