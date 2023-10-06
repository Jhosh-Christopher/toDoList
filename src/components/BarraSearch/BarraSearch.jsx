import React from 'react'
import {BarraStyles} from './barra.styles.js'
const BarraSearch = () => {
  return (
    <BarraStyles>
    <div>
        <input className={'input-box'} type="text" placeholder="Digite Aqui" />
    </div>
    </BarraStyles>
  )
}

export default BarraSearch