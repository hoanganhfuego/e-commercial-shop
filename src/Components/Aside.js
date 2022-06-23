function Aside(props){
    return(
        <ul className="category">
            <li className="row-5 cs" onClick={props.handleClick}>all products</li>
            <li className="row-5 cs" onClick={props.handleClick}>t-shirt</li>
            <li className="row-5 cs" onClick={props.handleClick}>short</li>
            <li className="row-5 cs" onClick={props.handleClick}>jean</li>
            <li className="row-5 cs" onClick={props.handleClick}>shirt</li>
        </ul>
    )
}

export default Aside;