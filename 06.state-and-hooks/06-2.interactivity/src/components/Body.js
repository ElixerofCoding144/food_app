import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; // Named import for useState hook
import { resList } from "../utils/mockData";

const Body = () => {
    // State variable: maintains the state of the component.
    //const [resObj, setResObj] = useState([]); // Initialize with an empty array
    const [resObj, setResObj] = useState(resList);

    /**
     * This is a normal Javascript variable which stores an array of restaurant objects.
    //  let resObj = [
    //     {
    //         "info": {
    //             "id": "10583",
    //             "name": "Pizza Hut",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/42eb0361-ebd7-4570-affe-a6894ea0d2ee_10583.JPG",
    //             "locality": "Coles Road",
    //             "areaName": "Frazer Town",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //                 "Pizzas"
    //             ],
    //             "avgRating": 4.2,
    //             "totalRatingsString": "20K+",
    //             "sla": {
    //                 "deliveryTime": 42,
    //                 "lastMileTravel": 3.9,
    //                 "slaString": "40-45 mins",
    //                 "lastMileTravelString": "3.9 km"
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "50% OFF",
    //                 "discountTag": "FLAT DEAL"
    //             }
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "657644",
    //             "name": "Barbeque Nation",
    //             "cloudinaryImageId": "a536e38a8033ed9c86f46ee0b3bf849a",
    //             "locality": "GLOBAL MALLS",
    //             "areaName": "RAJAJI NAGAR",
    //             "costForTwo": "₹600 for two",
    //             "cuisines": [
    //                 "North Indian",
    //                 "Barbecue",
    //                 "Kebabs",
    //                 "Biryani",
    //                 "Street Food",
    //                 "Snacks"
    //             ],
    //             "avgRating": 3.8,
    //             "totalRatingsString": "785",
    //             "sla": {
    //                 "deliveryTime": 42,
    //                 "lastMileTravel": 4.2,
    //                 "slaString": "40-50 mins",
    //                 "lastMileTravelString": "4.2 km"
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "70% OFF",
    //                 "subHeader": "UPTO ₹130"
    //             }
    //         }
    //     }
    // ]
     * 
     */

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log("Top Rated Restaurants - Button Clicked!");
                        // Filter the restaurants with avgRating > 4
                        // resObj = resObj.filter((restaurant) => restaurant.info.avgRating > 4);
                        // console.log(resObj);
                        const filteredRes = resObj.filter((restaurant) => restaurant.info.avgRating > 4);
                        setResObj(filteredRes);
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resObj.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant.info}
                    />
                ))}
            </div>

        </div>
    )
}

export default Body;