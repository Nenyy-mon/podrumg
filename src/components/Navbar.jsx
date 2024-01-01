import logo from "../assets/1x/Asset 1.png"
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
    <div className="navbar">
        <div className="logoText">
        <NavLink className="LOG" to="/"> 
            <img className="p" src={logo} alt="PODRUMLogo" />
            <h1 className="odrum">ODDRUUM</h1>
        </NavLink>
        </div>

        <div className="gang-list">
        <h3 className="sheen"><NavLink to='/'>SHEEN</NavLink></h3>
        <h3 className="gmizzi"><NavLink to='/'>GMIZZI</NavLink></h3>
        <h3 className="fejzz"><NavLink to='/'>FEJZZ</NavLink></h3>
        <h3 className="s"><NavLink to='/template'>s</NavLink></h3>
        </div>
    </div>
    )
}

export default Navbar