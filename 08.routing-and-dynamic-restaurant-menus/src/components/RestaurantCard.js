import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#fff8b7",
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        name,
        avgRating,
        cuisines,
        sla: { deliveryTime },
        cloudinaryImageId
    } = resData;
    // console.log(resData);
    return (
        <div className="restaurant-card" style={styleCard}>
            <img
                className="restaurant-logo"
                alt="restaurant-logo"
                src={`${CDN_URL}${cloudinaryImageId}`}
            />

            <h3>{name}</h3>
            <h3>{avgRating} stars</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{`${deliveryTime - 5}-${deliveryTime}`} mins</h4>
        </div>
    );
}

export default RestaurantCard;