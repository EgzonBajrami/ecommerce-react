import './SingleProduct.scss'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../../Lib/store/slices/cart.js'
const SingleProduct = ({data}) =>{
    const dispatch = useDispatch();
    const [value, setValue] = useState(data.totalScore)
    const [dis, setDisabled] = useState(false);
    const [btnclass, setBtnclass] = useState('button-holder')
    const [addToCart, setAddToCart] = useState('Add to cart')
    const handleButtonClick = async() =>{
        if(!dis){
            dispatch(add(data._id));
            setDisabled(true);
            setBtnclass('button-holder-disabled');
            setAddToCart('Added to cart');
            

        }
      

   
    }
    console.log(value);
    console.log(data.totalScore);
    return <>
   
    <div className="single-wrapper">
        <div className="image-holder">
            <img src={data.productImage} alt="product" />

        </div>
        <div className="data-holder">
            <div className="data-title">
                <h3>{data.name}</h3>
            </div>
            <div className="data-paragraph">
                <p>Price - ${data.price}</p>
            </div>
            <div className="ratings-container">
            <Typography component="legend" className="typo">Total Rating:</Typography>
            <Rating name="read-only" value={value}
            onChange={(e)=>{
                setValue(e.target.value);
            }}
        precision={0.5}
       readOnly />
            
      

            </div>
            <div className={btnclass} disabled={dis}>
                <button onClick={handleButtonClick}>{addToCart}</button>
            </div>

        </div>

    </div>
    </>
}
export default SingleProduct;