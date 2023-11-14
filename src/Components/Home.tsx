import React from 'react'
import TodoTask from './TodoTask'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { ITask } from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom'

const Home = () => {
  const context = useGlobalContext();
  
  if (!context) {
    return <div>Error: Global context is not defined</div>;
  }

  const { todoList, setTodoList } = context

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((task) => task.taskName !== taskNameToDelete)
    );
  };

  return (
    <div className='container-home'>
      <h1>Your notes:</h1>

      <div>
        {todoList.length > 0 ? todoList.map((task: ITask, key: number) => { 
          return <TodoTask onComplete={() => completeTask(task.taskName)} task={task} key={key}/>  }) : <p className='container'>There are no notes to display. Create one</p>}
      </div>      
      <Link to={'/addTask'} className='add-button'>+</Link>
    </div>

  )
}

export default Home