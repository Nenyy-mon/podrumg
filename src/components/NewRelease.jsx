import release from "../assets/release/Screenshot_17.png"
import "../styles/release.css"
import youtube from "../assets/music/1x/Asset 1.png"
import deezer from "../assets/music/1x/Asset 2.png"
import spotify from "../assets/music/1x/Asset 3.png"
function NewRelease() {
    return (
      <div className="parallax">
      
        <div className="bodyRelease">
           <div className="pictureRelease">
            <img className="picture" src={release} alt="releasePic"  />
           </div>
            <h1 className="newRelHead">NEEW REELEEASEE</h1>
          
        </div>
        <div className="sitesRelease">
              <div className="icons">
                <img className="youtube" src={youtube} alt="" />
                <img className="deezer" src={spotify} alt="" />
                <img className="spotify" src={deezer} alt="" />
              </div>
           </div>
        </div>
    )
}

export default NewRelease