import React from 'react';
import todoIcon from '../assets/todo_icon.png';
import ToDoItem from './ToDoItem';
import useToDoLogic from '../logic/ToDoLogic';

const ToDo = () => {
  const { todoList, inputRef, add, deleteTodo, toggle } = useToDoLogic();

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todoIcon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          type="text"
          placeholder='Add your task'
        />
        <button
          onClick={add}
          className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
        >
          Add +
        </button>
      </div>
      <div>
        {todoList.map((item, index) => (
          <ToDoItem
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            del={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDo;
