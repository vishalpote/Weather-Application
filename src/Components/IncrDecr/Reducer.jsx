import React, { useReducer} from 'react'
import "./Main.css"
const Main = () => {

// useState use for the changing the intial input as you want there are two arguments one are ex[count,setcount]=useState(count)


    // const [Count,setCount]=useState(0);
    // useEffect(()=>{
    //   document.title=`Notification(${Count+1})`
    // },)
    // [] this use for the only one time that are you refresh the page value will be its intial state and not increase
    // if u are not use [] this then when you click on any button value will be increase 
    // const Increament=()=>{
        // setCount(Count+1)
    // }

    // const Decrement=()=>{
        // Count>0?setCount(Count-1):setCount(0)
        // }
        const reducer=(state,action)=>{
            if(action.type==="INCR")
            {
                state=state+1;
            }
            if(state>0 && action.type==="DECR")
            {
                state=state-1;
            }
            return state
        }
        
        const intaialData=0;
           const [state,dispatch] =useReducer(reducer,intaialData)
  return (
    <div className='main'>
        <p className='data'>{state}</p>
      <button className='button1' onClick={()=>dispatch({type:"INCR"})}>INCR</button>
      <button className='button2' onClick={()=>dispatch({type:"DECR"})}>DECR</button>
    </div>
  )
}

export default Main