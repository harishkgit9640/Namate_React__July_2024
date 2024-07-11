import cardImg from '../assets/biriyani.webp'

const Card = ({ restList }) => {

    const { name, rest, price, rating, imgUrl } = restList;


    return (
        <div className="card">
            <div className="img">
                <img src={imgUrl} alt="card-img" />
            </div>
            <p>{name} </p>
            <p>{rest}</p>
            <p><b>Price : {price} </b></p>
            <p><b>Rating : {rating}⭐ </b></p>
            <button> Order Now </button>

        </div>
    )
}
export default Card