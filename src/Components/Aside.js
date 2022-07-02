import { useDispatch, useSelector } from "react-redux";
import { actionAside } from "../store/asideSlice";
import { action } from "../store/dataSlice";

function Aside(){
    const dispatch = useDispatch()
    const productsCategory = useSelector(state => state.asideSlice)
    function handleChangeCategory(event){
        dispatch(actionAside.changeCategory(event.target.innerHTML))
        dispatch(action.newData(event.target.innerHTML))
    }

    return(
        <ul className="category">
            <li className="row-5 cs" id="1" onClick={handleChangeCategory} style={productsCategory.allproduct?{border: 'solid 2px black'}:{border:'none'}}>all products</li>
            <li className="row-5 cs" id="2" onClick={handleChangeCategory} style={productsCategory.tshirt?{border: 'solid 2px black'}:{border:'none'}}>t-shirt</li>
            <li className="row-5 cs" id="3" onClick={handleChangeCategory} style={productsCategory.short?{border: 'solid 2px black'}:{border:'none'}}>short</li>
            <li className="row-5 cs" id="4" onClick={handleChangeCategory} style={productsCategory.jean?{border: 'solid 2px black'}:{border:'none'}}>jean</li>
            <li className="row-5 cs" id="5" onClick={handleChangeCategory} style={productsCategory.shirt?{border: 'solid 2px black'}:{border:'none'}}>shirt</li>
        </ul>
    )
}

export default Aside;