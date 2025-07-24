import React, { useState, useEffect, useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  // State Variable - Super powerfull variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Body Rendered", listOfRestaurant)

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3732629&lng=72.9157884&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

    const {loggedInUser, setUserName} = useContext(UserContext);

  // Conditional rendering
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 mx-4 rounded-lg"
            onClick={() => {
              // filter the restaurant card and update the ui.
              // searchText

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              // console.log(searchText);

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              // filter logic here
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.4
              );
              setfilteredRestaurant(filteredList);
              console.log(listOfRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input type="text" className="border border-black p-2 "
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurants/" * restaurant.info.id}>
            {restaurant.data.promoted ? ( 
              <RestaurantCardPromoted  resData={restaurant} />
            ) : (
               <RestaurantCard  resData={restaurant} />
            )}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
