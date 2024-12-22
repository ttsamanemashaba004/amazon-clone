import "./Product.css"

//eslint-disable-next-line react/prop-types
function Product({id, image, title, rating, price}) {
  return (
    <div className="product">
        <img src={image} alt="" />
        <div className="product_info">
            <p className="">{title}</p>
            <div className="product_rating"><p>{rating}</p></div>
            <p className="product_price">{price}</p>
        </div>
        <button className="product_button">Add to Basket</button>
    </div>
  )
}

export default Product