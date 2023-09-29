import React, { useReducer, useState } from 'react'
const reducer=(todo,action)=>{
    switch (action.type) {
        case "ADD_ITEM":
            return [...todo,{
                id:todo.length+1,
                name:action.payload
            }];
     
        case "DELETE":
            return todo.filter((d)=>{ return d.id!==action.payload});
       
        case "Done":
            return todo.map((e)=>e.id===action.payload
            ? {...e}
            :e
            )
    
        default:return todo
            
    }
}
const TodoApp = () => {
    const [todos,dispatch]=useReducer(reducer,[]);
    const [newTodo,setNewTodo]=useState("")
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" 
      value={newTodo} 
      onChange={(e)=>setNewTodo(e.target.value)}
      />
      <button onClick={()=>dispatch({type:"ADD_ITEM",payload:newTodo})}>ADD-ITEM</button>
      <hr />
      {
        todos.map((e)=>{
            return(
                <>
                <li key={e.id} >{e.name}
                <span><button onClick={()=>dispatch({type:"Done",payload:e.id})} checked={e.completed}>DONE</button></span>
                <span><button onClick={()=>dispatch({type:"DELETE",payload:e.id})}>Delete</button></span>
                </li>
                </>
            )
        })
      }
    </>
  )
}

export default TodoApp
