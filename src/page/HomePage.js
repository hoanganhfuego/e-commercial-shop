import {Link} from "react-router-dom";
import './homepage.css'
import { useEffect } from "react";
import Footer from "../Components/Footer";
import { actionAside } from "../store/asideSlice";
import { actionCategory } from "../store/categorySlice";
import { action } from "../store/dataSlice";
import { useDispatch } from "react-redux";

export default function HomePage(){
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scroll(0,0)
    },[])

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
                <div className="test">
                    <div className="product-content">
                        <h3><strong>NEW COLECTION</strong></h3>
                        <h4><strong>BLAST THIS SUMMER</strong></h4>
                        <Link to={`/products`} style={{ textDecoration: 'none', color: 'black' }}><button value=''>VIEW NOW</button></Link>
                    </div>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/FNP-1006A-3x2-summer-stunners-1920x1280.jpg" width={'100%'}></img>
            </div>
            <div className="row-homepage">
                <div className="test">
                    <div className="product-content">
                        <h3><strong>NEW T-SHIRT COLECTION</strong></h3>
                        <h4><strong>BLAST THIS SUMMER</strong></h4>
                        <Link to={`/products`} style={{ textDecoration: 'none', color: 'black' }}><button value='t-shirt'>VIEW NOW</button></Link>
                    </div>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/5026F-3x2-1-1920x1280.jpg" width={'100%'}></img>
                </div>
            <div className="row-homepage">
                <div className="test">
                    <div className="product-content" >
                        <h3><strong>NEW SHORT COLECTION</strong></h3>
                        <h4><strong>BLAST THIS SUMMER</strong></h4>
                        <Link to={`/products`} style={{ textDecoration: 'none', color: 'black' }}><button value='short'>VIEW NOW</button></Link>
                    </div>
                </div>
                    <img src="https://www.hm.com/nt-north/uploads/2022/06/4076A-3x2-paw-patrol-1920x1280.jpg" width={'100%'}></img>
                </div>
            <div className="row-homepage">
                <div className="test">
                    <div className="product-content" >
                        <h3><strong>NEW JEAN COLECTION</strong></h3>
                        <h4><strong>BLAST THIS SUMMER</strong></h4>
                        <Link to={`/products`} style={{ textDecoration: 'none', color: 'black' }}><button value='jean'>VIEW NOW</button></Link>
                    </div>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/4115C-3x2-making-a-splash-1920x1280.jpg" width={'100%'}></img>
            </div>
            <div className="row-homepage">
                <div className="test">  
                    <div className="product-content" >
                        <h3><strong>NEW SHIRT COLECTION</strong></h3>
                        <h4><strong>BLAST THIS SUMMER</strong></h4>
                        <Link to={`/products`} style={{ textDecoration: 'none', color: 'black' }}><button value='shirt'>VIEW NOW</button></Link>
                    </div>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/FNP-5115A-3x2-2-smiley-collection-1920x1280.jpg" width={'100%'}></img>
            </div>
            <Footer />
        </div>
    )
}