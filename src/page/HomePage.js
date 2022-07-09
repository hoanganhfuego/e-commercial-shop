import {Link} from "react-router-dom";
import './homepage.css'
import { useEffect, useState } from "react";
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
    const about = (
        <>
            <div className="homepage-pop-up-main-content-img">
                <h1>About H&amp;M Group</h1>
            </div>
            <div className="homepage-pop-up-main-content-context">
                <p>
                    H&amp;M Group is a family of brands and businesses, making it possible for customers around the world
                    to express themselves through
                    fashion and design, and to choose a more sustainable lifestyle. We create value for people and
                    society in general by delivering our customer offering and by developing with a focus on susta
                    inable and profitable growth.
                </p>
            </div>
            <div className="homepage-pop-up-main-content-imgs">
                <img src="https://hmgroup.com/wp-content/uploads/2021/03/Foundation-Large-top-cropped-2-1024x422.jpg"></img>
                <img src="https://hmgroup.com/wp-content/uploads/2022/01/market_and_expansion-1024x576.jpg"></img>
                <img src="https://hmgroup.com/wp-content/uploads/2022/01/our_values-1024x576.jpg"></img>
            </div>
        </>
    )
    const contact = (
        <div className="pop-up-contact">
            <p>VIET NAM</p>
            <p >Identity of H&amp;M Group controller(s):</p>
            <p>Authorized representative: Nguyen Hoang Long</p>
            <p>H&amp;M</p>
            <p>dataprotection.vn@hm.com</p>
            <p>H&amp;M Hennes &amp; Mauritz GBC AB</p>
            <p>Address: Mäster Samuelsgatan 46</p>
            <p>ZIP: 106 38 Stockholm</p>
            <p>Sweden</p>
            <p>Companies register: Bolagsverket/Swedish Companies Registration Office</p>
            <p>Authorised representative: Helena Helmersson</p>
            <p>VAT registration number: VAT NO. SE556070171501</p>
            <p>The named H&amp;M Group controller(s) above are throughout this Privacy Notice individually or collectively referred to as “H&amp;M”, “we” or “us”.</p>
            <p>Under certain circumstances the responsibility for data protection and your privacy is shared with third parties, such as banking and financial institutes, postal services or electronic comunication providers.</p>
            <p>More information can be found under each specific section of the Privacy Notice.</p>
        </div>
    )
    const location = (
        <div className="pop-up-location">
            <p style={{fontWeight:'bold', color:'red'}}>Stores in Vietnam</p>
            <div className="pop-up-location-main">
                <div className="location">
                    <p>Can Tho</p>
                    <p>Vincom Hung Vuong</p>
                    <p>94000 Can Tho</p>
                    <p>Opening Hours</p>
                    <p>Mon	10:00 - 22:00</p>
                    <p>Tue	10:00 - 22:00</p>
                    <p>Wed	10:00 - 22:00</p>
                    <p>Thu	10:00 - 22:00</p>
                    <p>Fri	10:00 - 22:00</p>
                    <p>Sat	09:30 - 22:00</p>
                    <p>Sun	09:30 - 22:00</p>
                </div>
                <div className="location">
                    <p>Da Nang</p>
                    <p>Vincom Ngo Quyen</p>
                    <p>50000 Da Nang</p>
                    <p>Opening Hours</p>
                    <p>Mon	10:00 - 22:00</p>
                    <p>Tue	10:00 - 22:00</p>
                    <p>Wed	10:00 - 22:00</p>
                    <p>Thu	10:00 - 22:00</p>
                    <p>Fri	10:00 - 22:00</p>
                    <p>Sat	09:30 - 22:00</p>
                    <p>Sun	09:30 - 22:00</p>
                </div>
                <div className="location">
                    <p>Ha Long</p>
                    <p>Vincom Ha Long</p>
                    <p>20000 Ha Long</p>
                    <p>Opening Hours</p>
                    <p>Mon	10:00 - 22:00</p>
                    <p>Tue	10:00 - 22:00</p>
                    <p>Wed	10:00 - 22:00</p>
                    <p>Thu	10:00 - 22:00</p>
                    <p>Fri	10:00 - 22:00</p>
                    <p>Sat	09:30 - 22:00</p>
                    <p>Sun	09:30 - 22:00</p>
                </div>
                <div className="location">
                    <p>Hanoi</p>
                    <p>AEON Mall Ha Dong</p>
                    <p>10000 Hanoi</p>
                    <p>Opening Hours</p>
                    <p>Mon	10:00 - 22:00</p>
                    <p>Tue	10:00 - 22:00</p>
                    <p>Wed	10:00 - 22:00</p>
                    <p>Thu	10:00 - 22:00</p>
                    <p>Fri	10:00 - 22:00</p>
                    <p>Sat	09:00 - 22:00</p>
                    <p>Sun	09:00 - 22:00</p>
                </div>
                <div className="location">
                    <p>HoChiMinh</p>
                    <p>AEON Mall Tan Phu</p>
                    <p>70000 HoChiMinh</p>
                    <p>Opening Hours</p>
                    <p>Mon	10:00 - 22:00</p>
                    <p>Tue	10:00 - 22:00</p>
                    <p>Wed	10:00 - 22:00</p>
                    <p>Thu	10:00 - 22:00</p>
                    <p>Fri	10:00 - 22:00</p>
                    <p>Sat	09:00 - 22:00</p>
                    <p>Sun	09:00 - 22:0</p>
                </div>
            </div>
        </div>
    )
    const service = (
        <div className="pop-up-service">
            <p>SERVICE</p>
            <p>WE HAVE NO RETURN POLICIES, YOU DUMB B*TCH</p>
        </div>
    )
    const [popUp, setPopUp] = useState('')
    const [isChoosePop, setIsChoosePop] = useState(false)
    console.log(isChoosePop)

    function handleNavbar(event){
        const navbarItem = event.target.innerHTML
        setIsChoosePop(true)
        if(navbarItem == 'About us')setPopUp(about)
        if(navbarItem == 'Location')setPopUp(location)
        if(navbarItem == 'Contact')setPopUp(contact)
        if(navbarItem == 'Service')setPopUp(service)
    }

    return(
        <div className="homepage">
            {isChoosePop && 
            <div className="homepage-pop-up">
                <div className="homepage-pop-up-main-content">
                    {popUp}
                </div>
                <div className="homepage-cover" onClick={()=>setIsChoosePop(false)}></div>
            </div>}
            <div className="homepage-navbar">
                <div className="homepage-navbar-menu"  onClick={handleNavbar}>
                    <i className="fa-solid fa-bars"></i>
                    <p>About us</p>
                </div>
                <Link to={`/products`} >
                    <div className="homepage-navbar-logo"><strong>EMAS</strong></div>
                </Link>
                <ul>
                    <li onClick={handleNavbar}>Location</li>
                    <li onClick={handleNavbar}>Contact</li>
                    <li onClick={handleNavbar}>Service</li>
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