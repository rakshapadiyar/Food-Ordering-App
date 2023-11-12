import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let c = 0;
  let temp_list = restaurantList;
  let [list, setList] = useState(temp_list);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            list = restaurantList.filter((res) => res.starRating >= 4);
            console.log(list);
            setList(list);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {list.map((restaurant) => (
          <RestaurantCard key={c++} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
