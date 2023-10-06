import {StylesHeader} from './header.styles.js'
import Logo from '../../assets/LogoNinjaa.png'
const HeaderLandingPage = () => {
  return (
    <StylesHeader>
    <div>
      <img className={'logo'} src={Logo} alt="Logo To Do Ninja" />
    </div>
    </StylesHeader>
  )
}

export default HeaderLandingPage