import React, { useEffect, useState } from "react";
import "./sevaList.css";
import {X} from 'react-bootstrap-icons';
function AddSeva(props) {
  const {addPressed,addList,eid,editPress,lists,setEditPress,sname,setSName,editPerson} = props;
  
  var name;

  function toAddList(){
    if(editPress){
      editPerson(eid,sname)
     setEditPress(!editPress)
    }  
    else{
    if(sname !== '')
    addList(sname)
    }
    setSName('')
  }

 
  // if(editPress){
  //   console.log(editPress)
  //   var l=lists.filter(list=>{
  //     if(list.id=== eid){
  //       name=list.name
  //       console.log("ID :",list.id)
  //       return list;
  //     }
  //     return list;
  //   })
  // }
    // useEffect(()=>{
    //   setSName(name)
    // },[editPress]);
    
    // console.log(l)
    // var l=lists.filter((list)=>{
    //  return list.id === eid
    // })
    // document.getElementById('floatingInput').value=l;
  
    // function editPerson(){
    //   var l=lists.filter(list=>{
    //     if(list.id=== eid){
    //       setSName(list.name)
    //     }
    //   })
    // }

  // useEffect(()=>{
  //   setSName(name)
  //  },[editPress]);
  return (
    <>
          <div className="container-md shadow-lg rounded border border-1 col-md-10">
            <div className="p-3 ">
            <div className=" d-flex align-items-end flex-column bd-highlight mb-3">
              <X size={50} className='btn bd-highlight' onClick={addPressed}/>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control " id="floatingInput" placeholder="Name" onChange={(e) =>setSName(e.target.value)} value={sname}/>
                <label htmlFor="floatingInput ">Name</label>
              </div>
              <button className="btn shadow shadow-lg bg-[#f43f08]" id="btn" onClick={toAddList}>
              { (editPress)?'Edit': 'Add'}
              </button>
            </div>
      </div>
    </>
  );
}

export default AddSeva;
