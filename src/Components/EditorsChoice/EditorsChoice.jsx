import {useState, useEffect} from 'react';
import {api,endpoints} from '../../Lib/Api'
import Rating from '@mui/material/Rating';
import cart from '../../assets/cart.svg'
import './EditorsChoice.css'
import {useNavigate} from 'react-router-dom';

const EditorsChoice = () =>{
    const [data, setData] = useState([]);
     const navigate = useNavigate();
 
    useEffect(()=>{
        const getEditors = async() =>{
            const result = await api.call(endpoints.getEditors);
            console.log(result);
            if(result.success){
         
              setData(result.data);
            }
          
        }
        getEditors();

    },[])
    return<>
        <div className="editors-wrapper" >
            <div className="editors-choice-title">
                <h3>Explore one-of-a-kind products chosen by our editors.</h3>
            </div>
            <div className="editors-products-wrapper">
    {data && data.map((elem)=>(
      <>
     
         
                <div className="editors-elements-wrapper" onClick={()=>{
                    navigate(`/products/${elem._id}`)

                }} key={elem._id}>

                <div className="editors-image"
               >
                    <img src={elem.productImage}
                     onClick={()=>{
                        console.log('image');
                    }} alt='product'/>
              
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
                
                
                </>

     
        

    ))}
           </div>
     </div>
   
    </>
}
export default EditorsChoice;