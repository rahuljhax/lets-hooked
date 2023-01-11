import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodBox from "./components/FoodBox";

const App = () => {
  return (
    <>
      <Header />
      <FoodBox/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
