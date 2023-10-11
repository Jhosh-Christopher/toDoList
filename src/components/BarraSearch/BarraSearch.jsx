import React from 'react'
import {BarraStyles} from './barra.styles.js'
import { theme } from '../../../styles/theme.js'
const BarraSearch = () => {
  return (
    <BarraStyles>
        <input className={'input-box'} type="text" placeholder="Digite Aqui" />
        <button className={'button'}>ALL</button>
    </BarraStyles>
  )
}

export default BarraSearch