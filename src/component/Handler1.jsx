import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

export default function Handler1(props) {
  const [title,setTitle]=useState();
  const [id,setId]=useState(1);
  const [content,setContent]=useState();
  const [a,setA]=useState([]);
  // const [newArray,setNewArray]=useState([]);
  
  function handleClick() {
    const newArray = [...a,{id:id,title:title,content:content,h:props.time.h,m:props.time.m,s:props.time.s}];
    setA(newArray);
    // console.log('newArray',a);
    props.onDataFromChild(newArray);
    props.handleClose();
    props.handleClick();
    setId(id+1);
  }
  


  
  return (
    <div>
    <Modal show={props.show}>
      <Modal.Header style={{width:'100%'}}>tittle</Modal.Header>
      <input type="text" class="form-control" id="recipient-name" onChange={(e)=>setTitle(e.target.value)}></input>
      <Modal.Header style={{width:'100%'}}>Content</Modal.Header>
      <input type="text" class="form-control" id="recipient-name" onChange={(e)=>setContent(e.target.value)}></input>
      <Modal.Footer>
        <button onClick={props.handleClose}>Cancle</button>
        <button onClick={handleClick}>Save</button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
