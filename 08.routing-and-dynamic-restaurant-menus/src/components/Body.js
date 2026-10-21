import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; // Named import for useState hook
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API } from "../utils/constants";
const Body = () => {

    const [resObj, setResObj] = useState([]); // Original List of Restaurant
    const [searchedResObj, setSearchedResObj] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        console.log("Body useEffect called");
        fetchData();
    }, []);
    console.log("Body Rendered");
    /**
     * This is the only place where the original list of restaurant is modified. 
     * Initially it is empty.
     */
    const fetchData = async () => {
        const data = await fetch(
            RESTAURANT_LIST_API
        )
        const json = await data.json();
        console.log(json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        /**
         * Iniatially, `resObj` and `searchedResObj` are set as empty.
         * Here, we are updating both the state variable with the data.
         */
        setResObj(restaurants);
        setSearchedResObj(restaurants);

    }

    /**
     * Conditional Rendering: If the resObj is empty, render the Shimmer component. Otherwise, render the restaurant cards.
     * if (resObj.length === 0) return <Shimmer />;
     * Below is the same logic using ternary operator.
     */

    return resObj.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button onClick={() => {
                        console.log(searchText);
                        const searchedRestaurant = resObj.filter(
                            (x) => x.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        /**
                         * We are maintaining another copy of state variable for list of restaurant.
                         */
                        setSearchedResObj(searchedRestaurant);
                    }}>
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log("Top Rated Restaurants - Button Clicked!");
                        const filteredRes = resObj.filter((restaurant) => restaurant.info.avgRating > 4);
                        setResObj(filteredRes);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {searchedResObj.map((restaurant) => (
                    <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                        <RestaurantCard
                            resData={restaurant.info}
                        />
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Body;