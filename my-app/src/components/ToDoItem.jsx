import React from 'react'
import tick from '../assets/tick.png'
import notTick from '../assets/not_tick.png'
import delelteIcon from '../assets/delete.png'

const ToDoItem = ({text, id, isComplete, del, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img onClick={()=>{toggle(id)}} src={isComplete ? tick:notTick} alt="" className='w-7'/>
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <img onClick={()=>del(id)} src={delelteIcon} alt="" className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default ToDoItem
