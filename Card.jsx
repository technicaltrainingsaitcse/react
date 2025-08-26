import './Card.css';

const Card = ({ productName, price, stockStatus }) => {
  return (
    <div className='card'>
      <h3>{productName}</h3>
      <p>Price: ${price}</p>
      <p>Status: {stockStatus}</p>
    </div>
  );
};

export default Card;