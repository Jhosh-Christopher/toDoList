import React, { useState } from 'react'
import HeaderLandingPage from '../components/Header/HeaderLandingPage'
import BarraSearch from '../components/BarraSearch/BarraSearch'
import List from '../components/List/List.jsx'

const LandingPage = () => {

  const [todoList, setTodoList] = useState([])

  function addList(todo){
    setTodoList([...todoList, todo])
  }

  return (
    <div>
        <HeaderLandingPage/>
        <BarraSearch addList={addList}/>
        <List todoList={todoList}/>
    </div>
  )
}

export default LandingPage