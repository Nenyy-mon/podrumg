import release from "../assets/release/Screenshot_17.png"
import "../styles/release.css"
import youtube from "../assets/music/1x/Asset 1.png"
import { NavLink } from "react-router-dom"
import sound1 from "../assets/rafaliMusic/rafali.mp3"
import useSound from "use-sound"
import { useState } from "react"


function NewRelease() {
  const [playMe, {stop}] = useSound(sound1, {volume: 0.03},{once:true})
  const [truth, setTruth] = useState(false)

  function changePlayable() {
    if(truth == false) {
      setTruth(true)
      playMe()
    } else {
      setTruth(false)
      stop()
    }
  }

    return (
      <div className="parallax">
        
        <div className="bodyRelease">
           <div className="pictureRelease">
            <img className="picture" src={release} alt="releasePic"  />
           </div>
            <NavLink onClick={() => changePlayable()} className="newRelHead">NEEW REELEEASEE</NavLink>
          
        </div>
        <div className="sitesRelease">
              <div className="icons">
              <a href="https://www.youtube.com/c/PodrumGang" target="blank"><img className="youtube" src={youtube} alt="youtube" /></a>
              </div>
           </div>
        </div>
    )
}

export default NewRelease