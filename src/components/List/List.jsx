import React from 'react'
import { Item, ListStyles } from './list.styles'
const List = ({todoList}) => {

  const Lista = todoList.map(task =>{
    
  })

  return (
    <ListStyles>
        <div>
          <ul>
            {todoList.map((task)=>
            <Item>
              <p>{task}</p>
              <section>
                <button><i class='bx bx-check-circle'></i></button>
                <button><i class='bx bxs-trash'></i></button>
              </section>
              </Item>
              )}
          </ul>
        </div>
    </ListStyles>
  )
}

export default List