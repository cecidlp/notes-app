import React, { FC, useState, ChangeEvent } from 'react'
import "./index.css"
import TodoTask from './Components/TodoTask';
import Home from '../src/Components/Home'
import RouterPage from './router/RouterPage';

const App: FC = () => {
  return (
    <div>
      <RouterPage/>
    </div>
  )
}

export default App