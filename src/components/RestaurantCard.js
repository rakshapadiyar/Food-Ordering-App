import { CDN_URLs } from "../utils/constants";
const stylecard = {
  backgroundColor: "#f5ede2",
};

const RestaurantCard = (props) => {
  const { resObj } = props;
  var s = "";
  for (let i = 0; i < resObj.starRating; i++) s = s + "⭐";
  return (
    <div className="res-card" style={stylecard}>
      {/* INline style
      or stylr{{ backgroundColor: "#f5ede2"}} */}
      <h3>{resObj.resName}</h3>
      <img
        className="res-logo"
        alt="meghana food"
        src={CDN_URLs + resObj.cloudinaryId}
      />
      <h4>{resObj.cuisine.join(", ")}</h4>
      <h4>{s}</h4>
      <p>{resObj.time + " minutes"}</p>
    </div>
  );
};

export default RestaurantCard;
