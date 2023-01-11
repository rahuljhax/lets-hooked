import { FoodAPI } from "../Constant";
import FoodCard from "./FoodCard";
import { useState } from "react";

const filterData = (searchInput,restaurantData)=>{
  const filteredData =  restaurantData.filter((res)=>{
    return res.name.includes(searchInput);
  })
  return filteredData;
}

const FoodBox = () => {
  const [restaurantData, setRestaurantData] = useState(FoodAPI);
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <section>
        <div className="container">
          <div className="searchbox">
            <div className="search">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                placeholder="@kshay's kitchen welcomes you......"
              />
            </div>
            <div className="search-btn">
              <button onClick={()=>{
                const data = filterData(searchInput,restaurantData);
                setRestaurantData(data);
              }}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="foodCard-section">
        <div className="container">
          <div className="foodBox">
            {restaurantData.map((item) => {
              return (
                <FoodCard
                  key={Math.floor(Math.random() * 99) + item.name}
                  {...item}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodBox;
