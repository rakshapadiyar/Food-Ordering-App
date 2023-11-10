import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.jpeg";
import meghanaFood from "./images/meghana-food.jpeg";

const stylecard = {
  backgroundColor: "#f5ede2",
};

const RestaurantCard = (props) => {
  let starCount = props.stars;
  var s = "";
  for (let i = 0; i < starCount; i++) s = s.concat("⭐");

  return (
    <div className="res-card" style={stylecard}>
      {/* INline style
    or stylr{{ backgroundColor: "#f5ede2"}} */}
      <h3>{props.resName}</h3>
      <img className="res-logo" alt="meghana food" src={meghanaFood} />
      <h4>{props.cuisine}</h4>
      <p>{s}</p>
      <p>{props.timeSLA} minutes.</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          // passing props to a component
          resName="Meghana Foods"
          cuisine="Asian, Chinese, Mexican"
          stars="5"
          timeSLA="38"
        />
        <RestaurantCard
          resName="McDonald's"
          cuisine="American Fast Food"
          stars="4"
          timeSLA="20"
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
