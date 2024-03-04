
const Card = ({ item }) => {
    const { product, price, img } = item;
    console.log(img);
    return (
        <>
            <h2>caed</h2>
            <div className="card">
                <img src={img} alt="" />
                <p >{product}</p>
                <p >{price}</p>

            </div>
        </>
    )
};
export default Card;