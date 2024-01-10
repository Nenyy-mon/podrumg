import '../styles/artmain.css'
import pic1 from '../assets/artworks/269624318_634682204241852_4339154954319583394_n.jpg'
import pic2 from '../assets/artworks/fejzcetvrti.png'
import pic3 from '../assets/artworks/zxczcxzzcxcxz.png'

function ArtworksMid() {
    return (
        <div className="artMain">
            <div className="upDiv">
            </div>
        <div className="artworkP">
            <img src={pic1} alt="neoni" className='picP' />
            <p className='artP'>SOME NAME</p>

        </div>
        <div className="artworkP">
            <img src={pic2} alt="neoni" className='picP' />
            <p className='artP'>SOME NAME</p>
        </div>
        <div className="artworkP">
            <img src={pic3} alt="neoni" className='picP' />
            <p className='artP'>SOME NAME</p>

        </div>
        <div className="artworkP">
            <img src={pic3} alt="neoni" className='picP' />
            <p className='artP'>SOME NAME</p>

        </div>
        <div className="artworkP">
            <img src={pic3} alt="neoni" className='picP' />
            <p className='artP'>SOME NAME</p>

        </div>
        
        </div>
    )
}

export default ArtworksMid