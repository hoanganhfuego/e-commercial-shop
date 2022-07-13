import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { actionAside } from "../store/asideSlice";
import { actionCategory } from "../store/categorySlice";

function Aside(){
    const dispatch = useDispatch()
    const productsCategory = useSelector(state => state.asideSlice)
    const [category, setCategory] = useState('all products')
    const param = useParams()
    const cateChoose = {
        all: false,
        tshirt: false,
        short: false,
        jean: false,
        shirt: false
    }
    const category1 = ()=>{
        if(param.type == 'all-collection') return {...cateChoose, all : true}
        if(param.type == 'tshirt') return {...cateChoose, tshirt : true}
        if(param.type == 'short') return {...cateChoose, short : true}
        if(param.type == 'jean') return {...cateChoose, jean : true}
        if(param.type == 'shirt') return {...cateChoose, shirt : true}
    }
    console.log(param)
    function handleChangeCategory(event){
        dispatch(actionAside.changeCategory(event.target.innerHTML))
        setCategory(event.target.innerHTML)
    }

    return(
        <div className="category">
            <div className="category-default">
                category: {category}
            </div>
            <div className="category-dropdown">
                <Link to={`${'all-collection'}`}><li className="row-5 cs" id="1" onClick={category1()} style={cateChoose.all ?{border: 'solid 2px black'}:{border:'none'}}>all products</li></Link>
                <Link to={`${'tshirt'}`}><li className="row-5 cs" id="2" onClick={category1()} style={cateChoose.tshirt ?{border: 'solid 2px black'}:{border:'none'}}>tshirt</li></Link>
                <Link to={`${'short'}`}><li className="row-5 cs" id="3" onClick={category1()} style={cateChoose.short ?{border: 'solid 2px black'}:{border:'none'}}>short</li></Link>
                <Link to={`${'jean'}`}><li className="row-5 cs" id="4" onClick={category1()} style={cateChoose.jean ?{border: 'solid 2px black'}:{border:'none'}}>jean</li></Link>
                <Link to={`${'shirt'}`}><li className="row-5 cs" id="5" onClick={category1()} style={cateChoose.shirt ?{border: 'solid 2px black'}:{border:'none'}}>shirt</li></Link>
            </div>
        </div>
    )
}

export default Aside;