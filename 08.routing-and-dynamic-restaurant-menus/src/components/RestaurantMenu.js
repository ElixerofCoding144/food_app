import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API, CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resMenu, setResMenu] = useState(null);

    /**
     * App.js has a route defined as:
     *
     * {
     *     path: "/restaurants/:resId",
     *     element: <RestaurantMenu />,
     * }
     *
     * resId is a dynamic parameter coming from the URL.
     * Example:
     * localhost:1234/restaurants/30034
     *
     * Here:
     * resId = "30034"
     */
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    // Fetch restaurant menu data
    const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_API + resId);
            const json = await response.json();

            setResMenu(json?.data);

        } catch (error) {
            console.error("Failed to fetch restaurant menu:", error);
        }
    };

    console.log("AAAA - resMenu", resMenu);

    // Show shimmer while API data is being fetched
    if (!resMenu) {
        return <Shimmer />;
    }

    // Restaurant information
    const {
        name,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        locality,
        cuisines,
        timingsInfo,
    } = resMenu?.cards?.[2]?.card?.card?.info ?? {};

    // Get menu items from the first ItemCategory
    const itemCards =
        resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
            ?.card?.card?.itemCards ?? [];

    console.log("BBBB - itemCards", itemCards);

    return (
        <div className="restaurant-menu">

            <h1>{name}</h1>

            <p>
                {avgRating} ({totalRatingsString}) - {costForTwoMessage}
            </p>

            <h3>{locality}</h3>

            <h4>{cuisines?.join(", ")}</h4>

            <p>
                {timingsInfo?.status} {timingsInfo?.message}
            </p>
            <br />
            <h2>Menu Items:</h2>

            <ul>
                {itemCards.map((item) => {

                    const info = item?.card?.info;

                    return (
                        <li key={info?.id}>

                            <h3>{info?.name}</h3>

                            {info?.price && (
                                <p>₹{info.price / 100}</p>
                            )}

                            {info?.description && (
                                <p>{info.description}</p>
                            )}

                            {info?.imageId && (
                                <img
                                    className="menu-item-image"
                                    src={`${CDN_URL}${info.imageId}`}
                                    alt={info?.name ?? "Menu item"}
                                />
                            )}

                        </li>
                    );
                })}
            </ul>

        </div>
    );
};

export default RestaurantMenu;