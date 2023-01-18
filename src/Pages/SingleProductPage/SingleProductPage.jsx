import './SingleProductPage.scss'
import {useEffect, useState, useMemo} from 'react';
import {api,endpoints} from '../../Lib/Api';
import {useLocation} from 'react-router-dom';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';
import Reviews from '../../Components/Reviews/Reviews';
import SimiliarProducts from '../../Components/SimiliarProducts/SimiliarProducts';
const SingleProductPage = () =>{
    const location = useLocation();
    const [data,setData] = useState();
    const postId = 
    useMemo(()=>{
        return location.pathname.split('/')[2]},[location]);
    console.log(postId);
  
    useEffect(()=>{
        const getData = async () =>{
       
            const config ={
                params:[postId]
            }
            const result = await api.call(endpoints.getSingleProduct,config);
            console.log(result);
            if(result.success){
                setData(result.data);
            }

        }
        const addPoint = async() =>{
            const config = {
                params:[postId]
            }
            const result = await api.call(endpoints.addPopular, config);
            console.log(result);
        }
        addPoint();
        getData();
          
    },[postId])
    return <>
    {data &&(<>
        <div className="single-product-wrapper">
        <div>
            <SingleProduct data={data}/>
        </div>
        <div className="reviews-similar">
            <div className="reviews">
                <Reviews />
            </div>
            <div className="similar">
                <SimiliarProducts data={data} />
            </div>
        </div>
      

    </div>

    </>
        )}

    </>
}
export default SingleProductPage;