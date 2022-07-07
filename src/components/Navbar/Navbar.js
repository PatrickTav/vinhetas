import {NavLink} from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='continer-nav'>
      <ul>
        <NavLink to='/'>Vinhetas Faro</NavLink>
        <NavLink to='/ratin'>Vinhetas Ratinho</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        
      </ul>
    </nav>
  )
}

export default Navbar