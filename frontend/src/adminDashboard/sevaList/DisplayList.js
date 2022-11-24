import React,{useState} from 'react'
import './sevaList.css'
import Pagination from './components/Pagination';
import {PersonXFill,PencilSquare} from 'react-bootstrap-icons';
import ConfirmBox from './components/ConfirmBox';
function DisplayList(props) {
    const {lists,removePerson,updatePerson ,listLoading} = props;
  const [rid,setRid] = useState();
    const [show, setShow] = useState(false);
    
    // User is currently on this page
const [currentPage, setCurrentPage] = useState(1);
// No of Records to be displayed on each page   
const [recordsPerPage] = useState(10);

const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

const currentRecords = lists.slice(indexOfFirstRecord, indexOfLastRecord);
// console.log(currentRecords)
const nPages = Math.ceil(lists.length / recordsPerPage)
// console.log(nPages)
function takeConfirm(id){
  setShow(true)
  setRid(id)
}
  return (
    
    <div className='displayTable col-md-8'>
     {(listLoading)? (

      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-6 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-6 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
     ):(
      <>
{(show)?<ConfirmBox setShow={setShow} show={show} id={rid} removePerson={removePerson} />:null}
<h5 className='text-[#f43f08]'><i> There are {lists.length} Seva Lists. </i></h5>
      <table className="table shadow-lg rounded " style={{fontFamily:'Merriweather'}}>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {currentRecords.map((list,index) => {
       return <tr key={index} className='text-slate-600 hover:text-white hover:bg-gradient-to-r from-[#f43f08] to-red-200 p-2' >
       <td>{list.title}</td>
       <td id='editButton'><a href='#'><PencilSquare color='green' size={20} onClick={()=>updatePerson(list.id)}/></a></td>
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
</>
     )}

</div>    
  )
}

export default DisplayList


