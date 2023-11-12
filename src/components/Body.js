import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  let c = 0;
  let temp_list = restaurantList;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            temp_list = restaurantList.filter((res) => res.starRating >= 4);
            console.log(temp_list);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {temp_list.map((restaurant) => (
          <RestaurantCard key={c++} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
