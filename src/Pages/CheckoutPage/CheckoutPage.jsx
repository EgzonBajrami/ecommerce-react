import './CheckoutPage.scss';
import {useState, useEffect} from 'react';
import {api,endpoints} from '../../Lib/Api';
import {useSelector} from 'react-redux';
import CheckoutItems from '../../Components/CheckoutItems/CheckoutItems';
import CheckOutCard from '../../Components/CheckOutCard/CheckOutCard';
const CheckoutPage = () =>{
    const cart = useSelector((state)=>state.cart.data);
    console.log(cart);
    const [data, setData] = useState();
    useEffect(()=>{
        const config ={

        }
        config.data = cart;
        const getData = async() =>{
            const result = await api.call(endpoints.getItems,config);
            if(result.success){
                setData(result.data);
            }
        }
        getData();

    },[cart])
    console.log(data);
    return<>
    <div className="checkout-main">
        <div className="checkout-title">
            <h3>Check Out</h3>
        </div>
    
    <div className="checkout-wrapper">
        <div className="checkout-items">
            {data&&(
                <CheckoutItems data={data}/>

            )}
            
           
        </div>
        <div className="czard">
        {data&&(
                <CheckOutCard data={data} />
            )}
        </div>

    </div>
        
    </div>
    </>
}
export default CheckoutPage;