import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';
import { useState } from 'react';
import Modal1 from './component/Handler1';

function App() {
  const [time,setTime]=useState({h:0,s:0,m:0});
  const [interv,setInterv]=useState();
  const [status,setStatus]=useState(0);
  var updateS=time.s,updateM=time.m,updateH=time.h;

  const run =()=>{
    if(updateM === 60)
    {
      updateH++;
      updateM=0;
    }
    if(updateS===60)
    {
      updateM++;
      updateS=0;
    }
    updateS++;
    return setTime({h:updateH,s:updateS,m:updateM})
  }
  function start(){
    run();
    setStatus(1);
    setInterv(setInterval(run,10));
  }

  function stop(){
    clearInterval(interv);
    setStatus(2);
  }

  function save(){
    clearInterval(interv);
  }

  function zero()
  {
    setTime({h:0,s:0,m:0})
  }

  return (
    <>
      <Timer time={time} start={start} stop={stop} zero={zero} save={save} status={status}/>
    </>
  );
}

export default App;
