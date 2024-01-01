import { NavLink } 
from "react-router-dom"
import logo from "../assets/1x/Asset 1.png"
import "../styles/playlistnav.css"
function PlaylistNav() {
    return (
        <>
        <div className="main">
            <div className="logo">
            <NavLink
            className="log" to="/"> 
            <img className="podrumL" src={logo} alt="PODRUMLogo" />
        </NavLink>
            </div>
            <div className="goback">
                <NavLink to='/' className='linkBack'>BBACCK</NavLink>
            </div>
        </div>
        </>
    )
}

export default PlaylistNav