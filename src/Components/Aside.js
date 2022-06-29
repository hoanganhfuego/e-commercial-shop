function Aside(props){
    const isChoose = props.isChoose
    const defaultValue = {
        allproduct: true,
        tshirt: false,
        short: false,
        jean: false,
        shirt: false,
    }

    return(
        <ul className="category">
            <li className="row-5 cs" id="1" onClick={props.handleClick} style={isChoose.allproduct?{border: 'solid 2px black'}:{border:'none'}}>all products</li>
            <li className="row-5 cs" id="2" onClick={props.handleClick} style={isChoose.tshirt?{border: 'solid 2px black'}:{border:'none'}}>t-shirt</li>
            <li className="row-5 cs" id="3" onClick={props.handleClick} style={isChoose.short?{border: 'solid 2px black'}:{border:'none'}}>short</li>
            <li className="row-5 cs" id="4" onClick={props.handleClick} style={isChoose.jean?{border: 'solid 2px black'}:{border:'none'}}>jean</li>
            <li className="row-5 cs" id="5" onClick={props.handleClick} style={isChoose.shirt?{border: 'solid 2px black'}:{border:'none'}}>shirt</li>
        </ul>
    )
}

export default Aside;