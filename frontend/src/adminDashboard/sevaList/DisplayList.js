import React,{useState} from 'react'
import './sevaList.css'
import Pagination from './components/Pagination';
import {PersonXFill,PencilSquare} from 'react-bootstrap-icons';
import ConfirmBox from './components/ConfirmBox';
function DisplayList(props) {
    const {lists,removePerson,updatePerson} = props;

    const [confirmModel,setConfirmModel] = useState(false)
// User is currently on this page
const [currentPage, setCurrentPage] = useState(1);
// No of Records to be displayed on each page   
const [recordsPerPage] = useState(5);

const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

const currentRecords = lists.slice(indexOfFirstRecord, indexOfLastRecord);
// console.log(currentRecords)
const nPages = Math.ceil(lists.length / recordsPerPage)
// console.log(nPages)
function takeConfirm(id){
  setConfirmModel(true);
 
}
  return (
    
    <div className='displayTable col-md-8'>
{/* <ConfirmBox /> */}
      <table className="table table-hover border p-4">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {currentRecords.map((list,index) => {
       return <tr key={index}>
       <td>{list.name}</td>
       <td><a href='#'><PencilSquare color='orange' size={20} onClick={()=>updatePerson(list.id)}/></a></td>
       {/* <td className='pe-auto'><PersonXFill color='red' size={20} onClick={removePerson} /></td> */}
       <td><a href='#'><PersonXFill color='red' size={20} onClick={()=>takeConfirm(list.id)} /></a></td>
     </tr>
    })}
    
   
  </tbody>
</table>
<div className='d-flex justify-content-center'>
<Pagination 
    nPages = { nPages }
    currentPage = { currentPage } 
    setCurrentPage = { setCurrentPage }
/>
</div>

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

 
      <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

   
      <div className="modal-body">
        Modal body..
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>    
    </div>
  )
}

export default DisplayList


