import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../sharedComponents/header/Header";
import Sidebar from "../../sharedComponents/sidebar/Sidebar";
import AddSeva from "./AddSeva";
import DisplayList from "./DisplayList";
import { createSevaList, getSevaList , removeSevaList, updateSevaList } from "../../services/services";
import "./sevaList.css";
import { PersonPlus } from "react-bootstrap-icons";
import {motion} from 'framer-motion'

function SevaList({ setActiveModel, activeModel }) {
  const [addPress, setAddPress] = useState(true);
  const [editPress, setEditPress] = useState(false);
  const [list,setList] = useState([])
  const [eid,setEid] = useState(0)
  const [sname,setSName] = useState('');
  const [listLoading,setListLoading] = useState(true)

  useEffect(()=>{
    getSevaList().then((data)=>data.json().then((data)=>{
      setListLoading(false)
      setList(data)}
      ))
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
    <div className="wrappedContent  ">
      <header>
        <Header />
      </header>
      <div className="container-fluid h-full ">
        <div className="row flex-nowrap">
          <Sidebar setActiveModel={setActiveModel} activeModel={activeModel}/>
        </div>
        <div className="mx-auto col-md-8" id="formContent">
          <main className="d-flex align-items-end flex-column bd-highlight ">
            {addPress ? (
              // <div className="flex justify-start">
              <button className="p-2 bd-highlight flex flex-nowrap rounded animate-bounce bg-[#f43f08] hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-300" id="addButton" onClick={addPressed} > <PersonPlus className="pr-1" size={25}/>Add </button>
            ) : (
              <motion.div animate={{x:100,scale:1}} initial={{scale:0}} className='col-md-12 align-items-start' id="animation1">
              <AddSeva addPressed={addPressed} addList={addList} eid={eid} editPress={editPress} setEditPress={setEditPress} lists={list} sname={sname} setSName={setSName} editPerson={editPerson}/>
              </motion.div>
            )}
          </main>
        </div>
      <DisplayList lists={list} removePerson={removePerson} updatePerson={updatePerson} listLoading={listLoading}/>
      </div>
    </div>
  );
}

export default SevaList;
