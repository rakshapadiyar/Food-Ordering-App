import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.jpeg";
import meghanaFood from "./images/meghana-food.jpeg";

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
      <img className="res-logo" alt="meghana food" src={meghanaFood} />
      <h4>{resObj.cuisine.join(", ")}</h4>
      <h4>{s}</h4>
      <p>{resObj.time}</p>
    </div>
  );
};

const meghnaFoodObj = {
  resName: "Meghna Food",
  cuisine: ["Asian", "Mexican"],
  starRating: 4,
  time: 20,
};

const McDonaldsObj = {
  resName: "McDonalds",
  cuisine: ["American", "Italian"],
  starRating: 5,
  time: 30,
};

const AlexandrosFoodObj = {
  resName: "Alexandro's",
  cuisine: ["Italian", "Greek"],
  starRating: 5,
  time: 50,
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resObj={meghnaFoodObj} />
        <RestaurantCard resObj={McDonaldsObj} />
        <RestaurantCard resObj={AlexandrosFoodObj} />
      </div>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
