/* eslint-disable react/prop-types */
const FoodCard = ({ name, image, description, price }) => {
  return (
    <div className="container">
      <div className="food-card">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className = "food-name">
        <h3>{name}</h3>
        </div>
          
        <p>{description}</p>
        <p>Price: ${price.toFixed(2)}</p>
       <div className = "button-container">
        <button className="buy-button">Buy</button>
        <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
