import React from 'react';
import './App.css';
import {useSelector , useDispatch} from 'react-redux';
import {IncrNumber,DcrNumber} from './actions'
function App() {
  const dispatch = useDispatch();
  const State=useSelector((state)=>state.Counter);
  return (
   <div >
     <button onClick={()=>dispatch(IncrNumber())}>Add Number</button>
     <h3>{State}</h3>
     <button onClick={()=>dispatch(DcrNumber())}>decreament</button>

   </div>
  );
}

export default App;
