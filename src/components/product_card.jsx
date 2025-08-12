import Product_Desc './product_desc_card'
import Product_Card_Gallery from "./product_card_gallery"

function Product_Card({cart}){
    return({
        <div className="product-card">
        <Product_Card_Gallery />
        <Product_Desc
        cart={cart}
        />
        </div>
    })
}
export default Product_Card;
