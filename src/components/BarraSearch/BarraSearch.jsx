import React, { useState } from 'react'
import {BarraStyles} from './barra.styles.js'

const BarraSearch = ({addList}) => {

  const  [todo, setTodo] = useState('')

  function clicou(){
    addList(todo)
  }
  

  return (
    <BarraStyles>
        <input className={'input-box'} type="text" value={todo} placeholder="Digite Aqui" 
        onChange={(e) => setTodo(e.target.value)}/>
        <button className={'button'}  onClick={clicou}><i class='bx bx-plus-circle'></i></button>
    </BarraStyles>
  )
}

export default BarraSearch