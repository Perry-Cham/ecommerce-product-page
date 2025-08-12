import useState from 'react'
function Product_Card_Gallery(){
    const [imageNo, setImageNo] = useState(1);
    const sources = ["/images/image--product-1", "/images/image-product-2",
"/images/image-product-3", "/images/image-product-4"]
    return(
        <div className="product-card-gallery">
        <div className="main-image">
        <img src=`{${sources[imageNo]}}`/>
        </div>

        <div className="thumbnails">
        <img src="/images/image-product-1-thumbnail.jpg" onChange={() =>
setImageNo(1)}>
<img src="/images/image-product-2-thumbnail.jpg" onChange={() =>
    setImageNo(2)}>
    <img src="/images/image-product-3-thumbnail.jpg" onChange={() =>
        setImageNo(3)}>
        <img src="/images/image-product-4-thumbnail.jpg" onChange={() =>
            setImageNo(4)}>
        </div>
        </div>
    )
}
export default Product_Card_Gallery;
