import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.jpeg";
import meghanaFood from "./images/meghana-food.jpeg";

const stylecard = {
  backgroundColor: "#f5ede2",
};

<<<<<<< HEAD
const RestaurantCard = (props) => {
  let starCount = props.stars;
  var s = "";
  for (let i = 0; i < starCount; i++) s = s.concat("⭐");

=======
const RestaurantCard = () => {
>>>>>>> ea6f3c9f5146b1f5c4c602a5da46355c720f12f2
  return (
    <div className="res-card" style={stylecard}>
      {/* INline style
    or stylr{{ backgroundColor: "#f5ede2"}} */}
<<<<<<< HEAD
      <h3>{props.resName}</h3>
      <img className="res-logo" alt="meghana food" src={meghanaFood} />
      <h4>{props.cuisine}</h4>
      <p>{s}</p>
      <p>{props.timeSLA} minutes</p>
=======
      <h3>Meghana Food</h3>
      <img className="res-logo" alt="meghana food" src={meghanaFood} />
      <h4>Asian, Chinese, Mexican</h4>
      <h4>⭐⭐⭐⭐</h4>
      <p>38 minutes</p>
>>>>>>> ea6f3c9f5146b1f5c4c602a5da46355c720f12f2
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
<<<<<<< HEAD
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
=======
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
>>>>>>> ea6f3c9f5146b1f5c4c602a5da46355c720f12f2
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
