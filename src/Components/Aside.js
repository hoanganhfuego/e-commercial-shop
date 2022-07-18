import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Aside(){
    const [category, setCategory] = useState('all products')
    const param = useParams()
    function categoryChange(e){
        setCategory(e.target.innerHTML)
    }

    return(
        <div className="category">
            <div className="category-default">
                category: {category}
            </div>
            <div className="category-dropdown">
                <Link to={`/products/${'all-collection'}`}>
                    <li className="row-5 cs" id="1" onClick={categoryChange} style={param.type == 'all-collection' ?{border: 'solid 2px black'}:{border:'none'}}>all products</li>
                </Link> 
                <Link to={`/products/${'tshirt'}`}>
                    <li className="row-5 cs" id="2" onClick={categoryChange} style={param.type == 'tshirt'?{border: 'solid 2px black'}:{border:'none'}}>tshirt</li>
                </Link>
                <Link to={`/products/${'short'}`}>
                    <li className="row-5 cs" id="3" onClick={categoryChange} style={param.type == 'short'?{border: 'solid 2px black'}:{border:'none'}}>short</li>
                </Link>
                <Link to={`/products/${'jean'}`}>
                    <li className="row-5 cs" id="4" onClick={categoryChange}style={param.type == 'jean'?{border: 'solid 2px black'}:{border:'none'}}>jean</li>
                </Link>
                <Link to={`/products/${'shirt'}`}>
                    <li className="row-5 cs" id="5" onClick={categoryChange} style={param.type == 'shirt'?{border: 'solid 2px black'}:{border:'none'}}>shirt</li>
                </Link>
            </div>
        </div>
    )
}

export default Aside;