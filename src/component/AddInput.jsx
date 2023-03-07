import React, { useEffect, useState } from 'react'

const AddInput = ({onAdd}) => {

    const [inputDaata,setInputData] =useState('')
    const [status,setStatus] =useState('empty')
    const [addButtondisable,setAddButtondisable] =useState(true)

    const handlInput=(e)=>{
        e.preventDefault()
        setInputData(e.target.value)  
        setStatus("submit")
    }
    
    useEffect(()=>{
        setAddButtondisable( status === "empty" || inputDaata.trim() === ""|| inputDaata === null ? true :false )
    },[inputDaata])

    const addClick=(e)=>{
        try {
        if(inputDaata){
            setStatus("empty")
            setInputData('')
            setAddButtondisable(true)
            onAdd({
            id:Math.random() *1000 ,
            title:inputDaata,
            complete:false
           })
            
        }
        } catch (error) {
            console.log(error)}
    }

  return (

    <div className="inputBox">
        <input type="text" value={inputDaata} onChange={handlInput} placeholder='Enter todo' />
        <button disabled={addButtondisable} style={{backgroundColor:addButtondisable? "#666":"white"}} type='submit' onClick={addClick}>Add</button>
   </div>
  )
}

export default AddInput