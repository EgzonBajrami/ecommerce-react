import {api,endpoints} from '../../Lib/Api';
import {useState, useEffect, useRef} from 'react';
import {  useScroll } from "framer-motion";
import cart from '../../assets/cart.svg'
import Rating from '@mui/material/Rating';
import {useNavigate} from 'react-router-dom';


import './PopularProducts.scss'
const PopularProducts = () =>{
    const ref = useRef(null);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    //eslint-disable-next-line
    const { scrollXProgress } = useScroll({ container: ref });
 
    useEffect(()=>{
        const getEditors = async() =>{
            const result = await api.call(endpoints.getPopular);
            console.log(result);
            if(result.success){
         
              setData(result.data);
            }
          
        }
        getEditors();

    },[])
    return <>
    <div className="popular-wrapper">
        <div className="popular-title">
            <h3>Popular gifts right now</h3>
        </div>
      
      <ul ref={ref}>
      {data &&data.map((elem)=>(
         
              <div className="editors-elements-wrapper" 
              onClick={()=>{
                navigate(`/products/${elem._id}`)

            }} key={elem._id}>

<div className="editors-image">
    <img src={elem.productImage} alt='product'/>

<div className="products-title">
    <p>{elem.name}</p>
    <Rating name="read-only" value={elem.totalScore}
        precision={0.5}
       readOnly />
    </div>
    <div className="products-price">
        <p>${elem.price}</p>
        </div>
        <div className="products-cart" onClick={()=>{
                            console.log('clicked');
                        }}>
                            <img src={cart} alt="cart" />
                        </div>
        
</div>
</div>
            
        

      ))}
          </ul>

    </div>
    </>
}
export default PopularProducts;