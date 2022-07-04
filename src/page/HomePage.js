import {Link} from "react-router-dom";
import './homepage.css'
import { useEffect } from "react";

export default function HomePage(){
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
                        <button><Link to={`/products`} style={{ textDecoration: 'none', color: 'black' }}>VIEW NOW</Link></button>
                    </div>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/FNP-1006A-3x2-summer-stunners-1920x1280.jpg" width={'100%'}></img>
            </div>
            <div className="row-homepage">
                <div className="test">
                    <div className="product-content">
                        <h3><strong>NEW T-SHIRT COLECTION</strong></h3>
                        <h4><strong>BLAST THIS SUMMER</strong></h4>
                        <button><Link to='/products' style={{ textDecoration: 'none', color: 'black' }}>VIEW NOW</Link></button>
                    </div>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/5026F-3x2-1-1920x1280.jpg" width={'100%'}></img>
                </div>
            <div className="row-homepage">
                <div className="test">
                    <div className="product-content" >
                        <h3><strong>NEW SHIRT COLECTION</strong></h3>
                        <h4><strong>BLAST THIS SUMMER</strong></h4>
                        <button><Link to='/products' style={{ textDecoration: 'none', color: 'black' }}>VIEW NOW</Link></button>
                    </div>
                </div>
                    <img src="https://www.hm.com/nt-north/uploads/2022/06/4076A-3x2-paw-patrol-1920x1280.jpg" width={'100%'}></img>
                </div>
            <div className="row-homepage">
                <div className="test">
                    <div className="product-content" >
                        <h3><strong>NEW SHORT COLECTION</strong></h3>
                        <h4><strong>BLAST THIS SUMMER</strong></h4>
                        <button><Link to='/products' style={{ textDecoration: 'none', color: 'black' }}>VIEW NOW</Link></button>
                    </div>
                </div>
                <img src="https://www.hm.com/nt-north/uploads/2022/06/4115C-3x2-making-a-splash-1920x1280.jpg" width={'100%'}></img>
            </div>
            <div className="homepage-footer">
                <div className="homepage-footer-main">
                    <div className="homepage-footer-infor">
                        <p><strong>Coporate infor</strong></p>
                        <ul>
                            <li>Career at H&amp;M</li>
                            <li>About H&amp;M Group</li>
                            <li>Sustainability</li>
                            <li>Press</li>
                            <li>Investor Relations</li>
                            <li>Corporate Governance</li>
                        </ul>
                    </div>
                    <div className="hoempage-footer-help">
                        <p><strong>Help</strong></p>
                        <ul>
                            <li>Customer Service</li>
                            <li>Privacy Notice</li>
                            <li>Enable high contrast mode</li>
                        </ul>
                    </div>
                </div>
                <p style={{marginTop: '50px'}}>H&amp;M’s business concept is to offer fashion and quality at the best price in a sustainable way.</p>
                <p> H&amp;M has since it was founded in 1947 grown into one of the world’s leading fashion companies. The content of this site is copyright-protected and is the property of H&amp;M Hennes &amp; Mauritz AB.</p>
            </div>
        </div>
    )
}