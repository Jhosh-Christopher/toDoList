import React from 'react'
import {BarraStyles} from './barra.styles.js'
import { theme } from '../../../styles/theme.js'
const BarraSearch = () => {
  return (
    <BarraStyles>
        <input className={'input-box'} type="text" placeholder="Digite Aqui" />
        <button className={'button'}><i class='bx bx-plus-circle'></i></button>
    </BarraStyles>
  )
}

export default BarraSearch