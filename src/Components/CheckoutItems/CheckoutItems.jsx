import './Checkoutitems.scss'

import Rating from '@mui/material/Rating';
import x from '../../assets/x.svg'
import {removeOne} from '../../Lib/store/slices/cart';
import {useDispatch} from 'react-redux';
const CheckoutItems = ({data}) =>{
    const dispatch = useDispatch();
    const items = data;
  

    const handleDelete = (elem) =>{
        console.log(elem);
        dispatch(removeOne(elem));
        window.location.reload();
     
    }
    console.log(items);
    return <>
    <div className="checkout-items-holder">

  
    {items &&items.map((elem,index)=>(
  
          <div className="checkout-items-wrapper" key={elem._id+index}>
        <div className="checkout-items-icon">
        <img src={elem.productImage} alt="product" />
        </div>
        <div className="checkout-items-title">
            <p>{elem.name}</p>
            <Rating name="read-only" defaultValue={elem.totalScore}
       
        precision={0.5}
       readOnly />
            </div>
            <div className="checkout-items-icons">
                <img src={x} alt="x" onClick={()=>handleDelete(elem._id)} />

                </div>

    </div>
    
    ))}
      </div>
  
    </>
}
export default CheckoutItems;