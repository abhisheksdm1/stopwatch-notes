import React, { useState } from "react";
import Modal1 from "./Handler1";
import { Modal } from "react-bootstrap";
export default function Timer(props) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);
  // const handleModal = () =>{
  //     setShow(true);
  // }

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);

  const [dataFromChild, setDataFromChild] = useState([]);
  const [updateState, setUpdateState] = useState();

  function handleDataFromChild(outcome) {
    setDataFromChild(outcome);
  }

  function handleClick() {
    props.stop();
  }

  const handleEdit = (id) => {
    setUpdateState(id);
  };

  function Edit({ data, dataFromChild, setDataFromChild }) {
    const [t1, setT1] = useState("");
    const [c1, setC1] = useState("");

    function handleInput(e) {
      const newList = dataFromChild.map((list1) =>
        list1.id === data.id ? { ...list1, title: t1, content: c1 } : list1
      );
      setDataFromChild(newList);
      console.log(dataFromChild);
      handleClose2();
    }

    return (
      <div>
        <Modal show={show2}>
          <Modal.Header style={{ width: "100%" }}>tittle</Modal.Header>
          <input
            type="text"
            defaultValue={data.title}
            onChange={(e) => setT1(e.target.value)}
          ></input>
          <Modal.Header style={{ width: "100%" }}>Content</Modal.Header>
          <input
            type="text"
            defaultValue={data.content}
            onChange={(e) => setC1(e.target.value)}
          ></input>
          <Modal.Footer>
            <button onClick={handleClose2}>Cancle</button>
            <button onClick={handleInput}>Update</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div
            class="col d-flex align-items-center justify-content-center"
            style={{ width: "100%", height: "50vh" }}
          >
            <div>
              <span style={{ fontSize: "100px" }}>
                {props.time.h >= 10 ? props.time.h : "0" + props.time.h}
              </span>
              <span style={{ fontSize: "100px" }}>:</span>
              <span style={{ fontSize: "100px" }}>
                {" "}
                {props.time.m >= 10 ? props.time.m : "0" + props.time.m}
              </span>
              <span style={{ fontSize: "100px" }}>:</span>
              <span style={{ fontSize: "100px" }}>
                {" "}
                {props.time.s >= 10 ? props.time.s : "0" + props.time.s}
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          {props.status === 0 ? (
            <button
              style={{
                background: "green",
                color: "white",
                border: "none",
                padding: "10px 30px",
              }}
              onClick={props.start}
            >
              Start
            </button>
          ) : (
            ""
          )}
          {props.status === 1 ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ margin: "20px" }}>
                <button
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "10px 30px",
                  }}
                  onClick={props.stop}
                >
                  Stop
                </button>
              </div>
              <div style={{ margin: "20px" }}>
                <button
                  style={{
                    background: "blue",
                    color: "white",
                    border: "none",
                    padding: "10px 30px",
                  }}
                  onClick={handleShow}
                  data-toggle="modal"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {props.status === 2 ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ margin: "20px" }}>
                <button
                  style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    padding: "10px 30px",
                  }}
                  onClick={props.start}
                >
                  Start
                </button>
              </div>
              <div style={{ margin: "20px" }}>
                <button
                  style={{
                    background: "blue",
                    color: "white",
                    border: "none",
                    padding: "10px 30px",
                  }}
                  onClick={handleShow}
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {dataFromChild.map((data) =>
        updateState === data.id ? (
          <Edit
            data={data}
            dataFromChild={dataFromChild}
            setDataFromChild={setDataFromChild}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <div style={{ margin: "50px" }}>
              <span>{data.h >= 10 ? data.h : "0" + data.h}</span>:
              <span>{data.m >= 10 ? data.m : "0" + data.m}</span>:
              <span>{data.s >= 10 ? data.s : "0" + data.s}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Title :</label>
              <h1>{data.title}</h1>
              <label>Content :</label>
              <h1>{data.content}</h1>
            </div>
            <div style={{ margin: "50px" }}>
              <button
                style={{
                  background: "orange",
                  color: "white",
                  border: "none",
                  padding: "10px 30px",
                }}
                onClick={() => handleEdit(data.id)}
              >
                Edit
              </button>
            </div>
          </div>
        )
      )}
      <Modal1
        time={props.time}
        show={show}
        handleClose={handleClose}
        onDataFromChild={handleDataFromChild}
        handleClick={handleClick}
      />
    </div>
  );
}
