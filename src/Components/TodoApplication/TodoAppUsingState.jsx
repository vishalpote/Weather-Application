import React, { useState } from 'react'

const TodoAppUsingState = () => {
    const [inputData,setInputData]=useState("")
    const [editItems,setEditItems]=useState("")
    const [items,setItems]=useState([])
    const [toggleadd,setToggleAdd]=useState(false)

    const additems=()=>{
        if(!inputData){
            alert("please enter the data")
        }else if(inputData && toggleadd){
            setItems(
                items.map((ele)=>{
                    if(ele.id===editItems){
                        return {...ele,name:inputData}
                    }
                    return ele
                })
            )
        }
        else
        {
            const mydata={
                id: new Date().getTime().toString(),
                name:inputData,
            };
            setItems([...items,mydata])
            setInputData("")
        }
    }

    const DeleteItem=(index)=>{
            const updated=items.filter((ele)=>{
                return ele.id !==index
            })
            return setItems(updated)
    }
    const editItem=(index)=>{
        const newEditItem=items.find((ele)=>{
            return ele.id===index
        });
        setInputData(newEditItem.name)
        setEditItems(index);
        setToggleAdd(true)
    }
  return (
    <>
      <h1>Todo List</h1>
      <input type="text"
      value={inputData}
      onChange={(e)=>setInputData(e.target.value)}
      />
      <button onClick={additems}>ADD</button>
      
    <hr />
    {items.map((ele)=>{
        return(
            <li key={ele.id}>{ele.name}
            <span><button onClick={()=>editItem(ele.id)}>Edit</button></span>
            <span><button onClick={()=>DeleteItem(ele.id)}>Delete</button></span>
            </li>
        )
    })}
    </>

  )
}

export default TodoAppUsingState
