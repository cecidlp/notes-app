import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AddTask from '../Components/AddTask'
import Home from '../Components/Home'
import { GlobalContextProvider } from '../context/GlobalContextProvider'


const RouterPage = () => {
    return (

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addtask' element={<AddTask />} />
                </Routes>

    )
}

export default RouterPage