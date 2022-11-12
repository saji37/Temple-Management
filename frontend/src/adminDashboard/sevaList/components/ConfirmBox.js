import { Modal, Button } from "react-bootstrap";
import {useState} from 'react'
function ConfirmBox({setShow,show,id,removePerson}) {

  const handleClose = () => setShow(false);
  function remove(){
    removePerson(id);
    setShow(false);
  }
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this record ? bcz later it cannot be undone !!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={remove}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmBox;
