import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/scrolling.css'
import { useRef,useEffect } from "react";
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
function Scrolling() {
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray('.container');
        gsap.to(sections, {
            width: "100vw" * (sections.length -1),
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.content',
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                markers: false,
                end: () => `+=${contentRef.current.offsetWidth }`, 
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    
  
    return (
        <>
         <div className="content" ref={contentRef}>
    
            <div className="container gmizi">
            <div className="pCont ">
            <NavLink className='link'>KOMPLEKS</NavLink>
                </div>
            </div>
            <div className="container fejzzz">
            <div className="pCont ">
            <NavLink className='link'>PALERMO</NavLink>
                </div>
            </div>

            <div className="container neoni">
                <div className="pCont ">
                <NavLink className='link'>NEONI</NavLink>  
                </div>
            </div>

            <div className="container rafali">
                <div className="pCont ">
                <NavLink className='link'>RAFALI</NavLink>

                </div>
            </div>

        </div>
        </>
    )
}

export default Scrolling