import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo } from '../feature/Todo/todoSlice'

function Todo() {
    const todos= useSelector(state => state.todo)
    const dispatch=useDispatch()
  return (
    
    <>
    <div>Todods</div>
    {todos.map((todo)=>(
        <li key='todo.id'> {todo.txt}
        <button onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
        
        </li>
    ))}
    </>
  )
}

export default Todo

