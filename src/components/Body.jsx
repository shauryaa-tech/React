import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from "../utils/mockData";


const Body = () => {
  // State Variable - Super powerfull variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([])

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, [])


    const fetchData = async () => {
    
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3732629&lng=72.9157884&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    };

    // Conditional rendering 
    if(listOfRestaurant.length === 0) {
      return <Shimmer />
    }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className="Search" 
            value={searchText} 
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button onClick={() => {
            // filter the restaurant card and update the ui.
            // searchText

            const filteredRestaurant = listOfRestaurant.filter(
              (res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            // console.log(searchText);

            setfilteredRestaurant(filteredRestaurant);

          }}>
            Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          // filter logic here
          const filteredList = listOfRestaurant.filter(
            res => res.info.avgRating > 4.4
          );
          setfilteredRestaurant(filteredList);
          console.log(listOfRestaurant);
        }}>
          Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          filteredRestaurant.map((restaurant) => (
          <Link 
            to={"/restaurants/" * restaurant.info.id}
          >
            <RestaurantCard resData={restaurant}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;