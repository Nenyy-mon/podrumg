import Artworks from "../components/Artworks"
import Navbar from "../components/Navbar"
import NewRelease from "../components/NewRelease"
import Scrolling from "../components/Scrolling"
import '../styles/release.css'
function MainPage() {
    return (
        <>
        <Navbar/>
        <NewRelease/>
        <Scrolling/>
        <Artworks/>
        </>
    )
}

export default MainPage