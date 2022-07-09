import Navbar from "../Components/Navbar";
import Aside from "../Components/Aside";
import Products from "../Components/Products";
import Header from "../Components/Header";
import SeenProduct from "../Components/SeenProduct";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductRender from "../Components/ProductRender";
import Footer from "../Components/Footer";

export default function ProductShowCase(){
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <>
            <div className="main-body">
                <Navbar />
                <Header/>
                <div className="body-main-content">
                    <Aside/>
                    <Routes>
                        <Route path="*" element={<Products />}></Route>
                        <Route path=":type/*" element={<ProductRender />} exact/>
                    </Routes>
                </div>
                <SeenProduct />
                <Footer />
            </div>
        </>
    );
}