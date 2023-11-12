import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  let c = 0;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            restaurantList = restaurantList.filter(
              (res) => res.starRating >= 4
            );
            console.log(restaurantList);
            //  useTempList(temp_list);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={c++} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
