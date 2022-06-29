import { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";
import './homepage.css'

export default function HomePage(){
    
    const [scrollBottomChild, setScrollBottomChild] = useState([])
    const [scrollBottomParent, setScrollBottomParent] = useState([])
    const [scrollDown, setSrollDown] = useState(0)
    const scrollRef = useRef()
    
    function scrollEvent(event){
        if (event.deltaY > 0) {
            setSrollDown(prev => prev + 1)
            let i
            for(i = 0; i<scrollBottomChild.length; i++){
                if(scrollBottomChild[i] == scrollBottomParent[i]){
                    setSrollDown(prev => prev)
                }
            }
        }
        if (event.deltaY < 0){
            setSrollDown(prev => prev - 1)
        }
    }
    console.log('xin chao')
    useEffect(()=>{
        setScrollBottomChild(scrollRef.current.getBoundingClientRect().bottom)
    }, [])
    useEffect(()=>{
        window.addEventListener('wheel', scrollEvent)
        const scrollBottomParentsValue = []
        const scrollBottomParents = document.querySelectorAll('.row-homepage').forEach(item => scrollBottomParentsValue.push(item.getBoundingClientRect().bottom))
        setScrollBottomParent(scrollBottomParentsValue)
        const scrollBottomChildsValue = []
        const scrollBottomChilds = document.querySelectorAll('.row-homepage').forEach(item => scrollBottomParentsValue.push(item.getBoundingClientRect().bottom))
        setScrollBottomChild(scrollBottomChildsValue)
    }, [scrollDown])



    return(
        <div className="homepage">
            <div className="homepage-navbar">
                <div className="homepage-navbar-menu"><i className="fa-solid fa-bars"></i> About us</div>
                <div className="homepage-navbar-logo"><strong>EMAS</strong></div>
                <ul>
                    <li>Location</li>
                    <li>Contact</li>
                    <li>Service</li>
                </ul>
            </div>
            <div className="row-homepage">
                <div className="product-content" ref={scrollRef} style={{bottom: `${300-scrollDown}px`}}>
                    <h3><strong>NEW COLECTION</strong></h3>
                    <h4><strong>BLAST THIS SUMMER</strong></h4>
                    <button>VIEW NOW</button>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/FNP-1006A-3x2-summer-stunners-1920x1280.jpg" width={'100%'}></img>
            </div>
            <div className="row-homepage">
                <div className="product-content" style={{bottom: `${300-scrollDown}px`}}>
                    <h3><strong>NEW T-SHIRT COLECTION</strong></h3>
                    <h4><strong>BLAST THIS SUMMER</strong></h4>
                    <button>VIEW NOW</button>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/5026F-3x2-1-1920x1280.jpg" width={'100%'}></img>
                </div>
            <div className="row-homepage">
                <div className="product-content" style={{bottom: `${300-scrollDown}px`}}>
                    <h3><strong>NEW SHIRT COLECTION</strong></h3>
                    <h4><strong>BLAST THIS SUMMER</strong></h4>
                    <button>VIEW NOW</button>
                </div>
                    <img src="https://www.hm.com/nt-north/uploads/2022/06/4076A-3x2-paw-patrol-1920x1280.jpg" width={'100%'}></img>
                </div>
            <div className="row-homepage">
                <div className="product-content" style={{bottom: `${300-scrollDown}px`}}>
                    <h3><strong>NEW SHORT COLECTION</strong></h3>
                    <h4><strong>BLAST THIS SUMMER</strong></h4>
                    <button>VIEW NOW</button>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/4115C-3x2-making-a-splash-1920x1280.jpg" width={'100%'}></img>
            </div>
            <Link to='/products'>explore</Link>
            <Link to='/productDetail'>explore</Link>
        </div>
    )
}