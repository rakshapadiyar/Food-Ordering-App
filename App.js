import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.jpeg";
import meghanaFood from "./images/meghana-food.jpeg";

const stylecard = {
  backgroundColor: "#f5ede2",
};

const RestaurantCard = (props) => {
  var s = "";
  for (let i = 0; i < props.starRating; i++) s = s + "⭐";
  return (
    <div className="res-card" style={stylecard}>
      {/* INline style
    or stylr{{ backgroundColor: "#f5ede2"}} */}
      <h3>{props.resName}</h3>
      <img className="res-logo" alt="meghana food" src={meghanaFood} />
      <h4>{props.cuisine}</h4>
      <h4>{s}</h4>
      <p>{props.time}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Food"
          cuisine="Asian, Mexican"
          starRating="4"
          time="20 minutes"
        />
        <RestaurantCard
          resName="McDonalds"
          cuisine="American Fast Food"
          starRating="5"
          time="30 minutes"
        />
        <RestaurantCard
          resName="Alexandro's"
          cuisine="Greek"
          starRating="3"
          time="50 minutes"
        />
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
