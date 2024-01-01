import "../styles/artworks.css"
import pic from '../assets/artworks/faze.png'
import pic2 from '../assets/artworks/Screenshot_1.png'
import pic3 from '../assets/artworks/Screenshot_17.png'
import pic4 from '../assets/artworks/Screenshot_3.png'
import pic5 from '../assets/artworks/zxczcxzzcxcxz.png'
import pic6 from "../assets/artworks/191881639_762311644651230_5739836110066220780_n.jpg"
import pic7 from '../assets/artworks/269624318_634682204241852_4339154954319583394_n.jpg'
function Artworks() {
    return (
        <>
        <div className="gap"></div>
        <div className="artwork">
            <figure className="item--1">
            <img src={pic} className="images" alt="fejzzSkw"/>
            </figure>
            <figure  className="item--2">
            <img src={pic2} className="images" alt="kompleks"/>
            </figure>
            <figure  className="item--3">
            <img src={pic3} className="images" alt="fejzzSkw"/>
            </figure>
            <figure  className="item--4">
            <img src={pic4} className="images" alt="fejzzSkw"/>
            </figure>
            <figure  className="item--5">
            <img src={pic5} className="images" alt="fejzzSkw"/>
            </figure>
            <figure  className="item--6">
            <img src={pic6} className="images" alt="fejzzSkw"/>
            </figure>
            <figure  className="item--7">
            <img src={pic7} className="images" alt="fejzzSkw"/>
            </figure>
            <figure  className="item--8">
            <img src={pic2} className="images" alt="fejzzSkw"/>
            </figure>
        </div>
        </>
    )
}

export default Artworks