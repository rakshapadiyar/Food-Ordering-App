import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let c = 0;
  let [restaurantList2, setRestaurantList] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            restaurantList2 = restaurantList.filter(
              (res) => res.starRating >= 4
            );
            console.log(restaurantList2);
            setRestaurantList(restaurantList2);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList2.map((restaurant) => (
          <RestaurantCard key={c++} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
