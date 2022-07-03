import Aside from "../Components/Aside";
import Products from "../Components/Products";
import Header from "../Components/Header";

export default function ProductsCase(){
    return(
        <>
            <Header/>
            <div className="body-main-content">
                <Aside/>
                <Products />      
            </div>
        </>
    )
}