import './SimiliarProducts.scss'
import {useEffect, useState} from 'react';
import {api, endpoints} from '../../Lib/Api';
import Rating from '@mui/material/Rating';
import {
    CCard,
  
    CCardBody,
    CCardHeader,
  
} from '@coreui/react';
import {useNavigate} from 'react-router-dom';

const SimiliarProducts = ({data}) =>{
    const [similar, setSimilar] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const config = {
            params:[data.section]
        }
        const getSimilar = async() =>{
            const result = await api.call(endpoints.similarProducts, config);
            console.log(result);
            if(result.success){
                setSimilar(result.data);
            }

        }
        getSimilar();
    },[data])
    return <>
    {
        similar && (<>
        <div className="similar-products">
        <CCard className="mb-4">
            <CCardHeader>
        <strong>Similar products</strong>
      </CCardHeader>
      <CCardBody  className="similar-products-wrapper">
        {similar && similar.map((elem)=>(<>
        <div className="similar-holder" onClick={()=>{
            navigate(`/products/${elem._id}`)

        }}>
            <div className="similar-img">
                <img src={elem.productImage} alt="product" />
            </div>
            <div className="similar-title">
                <p>{elem.name}</p>
            </div>
            <div className="similar-ratings">
            <Rating name="read-only" value={elem.totalScore}
        precision={0.5}
       readOnly />

            </div>
            </div></>))}

      </CCardBody>

            </CCard>
        </div>
        </>)
    }
    </>
}
export default SimiliarProducts;