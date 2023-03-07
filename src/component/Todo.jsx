import React, { useEffect, useState } from 'react'
import './todo.css'
import AddInput from './AddInput'
import checked from '../assets/img/check.png'
import trash from '../assets/img/trash.png'
import check from '../assets/img/checked.png'

function Todo() {

    const [todos,setTodos]=useState([])

    const addItem=(toodoo)=>{

        setTodos([...todos,toodoo])
    }
    function deleteItem(id){
        try {
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
        } catch (error) {
            console.log(error)}
    }

    function checkedItem(todoItem){
        console.log(todoItem)
        const updateTodo=todos.map(todo=> todo.id === todoItem.id? {...todo, complete:true}:todo)
        setTodos(updateTodo)
        console.log(todos)
    }

  return (
    <div className='todoBox'>
        <AddInput onAdd={addItem}/>
        <div className="listBox ">
            <h1 className="titleListBox">my Todo</h1>
            <div className="listsbox">
                <ul className="lists">
                        {/*items   */}
                    {todos.map(value=>{
                return(<li className="list" >
                            <div className="list_box" >
                                <span>{value.title}</span>
                                    <div className="buts">
                                        
                                        {!value.complete?<button onClick={()=> checkedItem(value) }><img src={checked} alt="" /></button>
                                        :<button><img src={check} alt="" /></button>}
                                        <button onClick={()=>deleteItem(value.id)}  ><img src={trash} alt="" /></button>
                                    </div>
                                </div>  
                        </li>)
                    })} 
                        
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo