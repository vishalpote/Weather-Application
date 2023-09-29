import React, { useReducer } from 'react'
const reducer=(state,action)=>{
    if(action.type==="Incr")
    {
        state=state+1
    }
    if( state>0 && action.type==="Decr"){
        state=state-1;
    }
    return state
}
const Usereducer = () => {
    const data=0;
    const [state,dispatch]=useReducer(reducer,data);
  return (
    <div>
      <h1>Count : {state}</h1>
      <button onClick={()=>dispatch({type:"Incr"})}>INCR</button>
      <button onClick={()=>dispatch({type:"Decr"})}>INCR</button>
    </div>
  )
}

export default Usereducer
