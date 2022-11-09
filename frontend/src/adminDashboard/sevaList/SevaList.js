import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../sharedComponents/header/Header";
import Sidebar from "../../sharedComponents/sidebar/Sidebar";
import AddSeva from "./AddSeva";
import DisplayList from "./DisplayList";
import { createSevaList, getSevaList , removeSevaList, updateSevaList } from "../../services/services";
import "./sevaList.css";
function SevaList() {
  const [addPress, setAddPress] = useState(true);
  const [editPress, setEditPress] = useState(false);
  const [list,setList] = useState([])
  const [eid,setEid] = useState(0)
  const [sname,setSName] = useState('');

  useEffect(()=>{
    getSevaList().then((data)=>data.json().then((data)=>setList(data)))
  },[])

  function addPressed(){
    setAddPress(!addPress);
  }

 function addList(name){
  createSevaList(name);
  setAddPress(true)
 setList( [...list, {'id':list.length,'name':name}] );
  }

  function removePerson(id){
      removeSevaList(id);
      setList((lists) =>
       lists.filter((list) => list.id !== id)
      );
    };

    function updatePerson(id){
      setAddPress(false);
    
      list.filter(l=>{
        if(l.id=== id){
          setEid(l.id)
          setSName(l.name)
        }
      })

      setEditPress(true)
      // setEid(id);
      // setList((lists) =>
      // lists.map(obj =>{
      //   if(obj.id === id){
      //       return({...obj,'id':id,'name': 'Updating'})
      //   }
      //   return obj;
      // }
      // ))
    }
    function editPerson(id,name){
      updateSevaList(id,name);
      setList((lists) =>
      lists.map(obj =>{
        if(obj.id === id){
            return({...obj,'id':id,'name': name})
        }
        return obj;
      }
      ))
      setAddPress(true)
    }
  // useEffect(()=>{
  //  console.log(list)
  // },[list]);

  return (
    <div className="wrappedContent">
      <header>
        <Header />
      </header>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
        </div>
        <div className="mx-auto col-md-8 " id="formContent">
          <main className="d-flex align-items-end flex-column bd-highlight mb-3">
            {addPress ? (
              <button className="btn p-2 bd-highlight" id="addButton" onClick={addPressed} > Add </button>
            ) : (
              <AddSeva addPressed={addPressed} addList={addList} eid={eid} editPress={editPress} setEditPress={setEditPress} lists={list} sname={sname} setSName={setSName} editPerson={editPerson}/>
            )}
          </main>
        </div>
      <DisplayList lists={list} removePerson={removePerson} updatePerson={updatePerson}/>
      </div>
    </div>
  );
}

export default SevaList;
