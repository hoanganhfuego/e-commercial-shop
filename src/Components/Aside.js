import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionAside } from "../store/asideSlice";
import { actionCategory } from "../store/categorySlice";

function Aside(){
    const dispatch = useDispatch()
    const productsCategory = useSelector(state => state.asideSlice)
    const [category, setCategory] = useState('all products')

    function handleChangeCategory(event){
        dispatch(actionAside.changeCategory(event.target.innerHTML))
        // dispatch(action.newData(event.target.innerHTML))
        // dispatch(actionCategory.reset())
        dispatch(actionCategory.resetPage())
        setCategory(event.target.innerHTML)
    }

    return(
        <div className="category">
            <div className="category-default">
                category: {category}
            </div>
            <div className="category-dropdown">
                <Link to={`${'all-collection'}`}><li className="row-5 cs" id="1" onClick={handleChangeCategory} style={productsCategory.allproduct?{border: 'solid 2px black'}:{border:'none'}}>all products</li></Link>
                <Link to={`${'tshirt'}`}><li className="row-5 cs" id="2" onClick={handleChangeCategory} style={productsCategory.tshirt?{border: 'solid 2px black'}:{border:'none'}}>t-shirt</li></Link>
                <Link to={`${'short'}`}><li className="row-5 cs" id="3" onClick={handleChangeCategory} style={productsCategory.short?{border: 'solid 2px black'}:{border:'none'}}>short</li></Link>
                <Link to={`${'jean'}`}><li className="row-5 cs" id="4" onClick={handleChangeCategory} style={productsCategory.jean?{border: 'solid 2px black'}:{border:'none'}}>jean</li></Link>
                <Link to={`${'shirt'}`}><li className="row-5 cs" id="5" onClick={handleChangeCategory} style={productsCategory.shirt?{border: 'solid 2px black'}:{border:'none'}}>shirt</li></Link>
            </div>
        </div>
    )
}

export default Aside;