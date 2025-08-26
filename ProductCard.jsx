import Card from './Card.jsx'
import './ProductCard.css'
const ProductCard=()=>{
    return(
        <div className='box'>
        <h2>Product List</h2>
        <div className='flex-row'>
            <Card productName="Wireless Mouse" price="25.99" stockStatus="In Stock"  />
            <Card productName="Keyboard" price="45.5" stockStatus="Out of Stock"  />
            <Card productName="Monitor" price="199.99" stockStatus="In Stock"  />
        </div>
        </div>
    );
};

export default ProductCard;