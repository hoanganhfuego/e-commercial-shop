function Product(props){
    const {id, name, price, img, status, category} = props
   
    return(
        <div key={id} name={name} className='product col-3'>
            <div className="product-img-btn">
                <div className="product-img">
                    <span>{status}</span>
                    <img src={img}></img>
                </div>
                <div className="product-btn row">
                    <button className="btn col-2 cs">more detail</button>
                    <button className="btn2 btn col-2 cs">buy now</button>
                </div>
            </div>
            <div className="product-detail tc">
                <h2>{category}</h2>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Product;