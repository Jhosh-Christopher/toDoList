import React from 'react'
import {BarraStyles} from './barra.styles.js'
import  {SetBtn} from '../../assets/SetBtn.jsx'
import { theme } from '../../../styles/theme.js'
const BarraSearch = () => {
  return (
    <BarraStyles>
        <input className={'input-box'} type="text" placeholder="Digite Aqui" />
        <button className={'button'}>ALL</button>
        <button className={'BtnSvg'}><SetBtn fill={theme.gray}></SetBtn></button>
    </BarraStyles>
  )
}

export default BarraSearch