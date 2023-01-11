const FoodCard = ({ name, img, distance, cousins }) => {
    return (
      <>
        <div className="foodCard">
          <div className="food-img">
            <img src={img} alt="Food Image" />
          </div>
          <span className="food-title">{name}</span>
          <span className="food-cousins">{cousins.join(", ")}</span>
          <span className="how-far">{distance} Kms</span>
        </div>
      </>
    );
  };

  export default FoodCard;