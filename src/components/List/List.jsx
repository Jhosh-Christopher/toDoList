import React from 'react'
import { ListStyles } from './list.styles'
const List = () => {
  return (
    <ListStyles>
        <div>
          <ul>
              <p>TERMINAR O PROJETO</p>
              <section>
                <button><i class='bx bx-check-circle'></i></button>
                <button><i class='bx bxs-trash'></i></button>
              </section>
          </ul>
        </div>
    </ListStyles>
  )
}

export default List