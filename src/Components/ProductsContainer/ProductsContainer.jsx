import './ProductsContainer.scss'
import {api, endpoints} from '../../Lib/Api';
import {useState, useEffect} from 'react'
import cart from '../../assets/cart.svg'
import ReactPaginate from 'react-paginate'
import {useNavigate} from 'react-router-dom';
import Rating from '@mui/material/Rating';

const ProductsContainer = ({section}) =>{
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    let title = section;
    if(section==='Furniture'){
        title='Furniture & Organization'
    }
    if(section==='Engagement'){
        title = 'Engagement & Wedding Gifts'
    }
    if(section==='Hoodies'){
        title = 'Hoodies & Sweaters'
    }
    if(section==='Jewelry'){
        title = 'Unique Jewelry'
    }
    if(section==='MakeUp'){
        title= 'Make Up'
    }
    if(section==='Shoes'){
        title = 'Unique Shoes';
    }
 
    

    useEffect(()=>{
        const getData = async () =>{
            const config = {
                params:[section],
            }
            const result = await api.call(endpoints.getBySection, config);
            console.log(result);
            if(result.success){
                setData(result.data);
            }

        }
        getData();

    },[section])
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 18;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / 18);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 18) % data.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  


    return <>
    <div className="productscontainer">
        <div className="productscontainer-title">
            <h3>{title}</h3>
        </div>
        <div className="productscontainer-data">
            {currentItems &&currentItems.map((elem)=>(
                <div className="productscontainer-move">

                        <div className="editors-elements-wrapper">

                        <div className="editors-image">
                            <img
                            onClick={()=>{
                                navigate(`/products/${elem._id}`)
                            }}
                             src={elem.productImage} alt='product'/>
                        
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
                        </div>
            ))}
        </div>
  

       

    
    </div>
    <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
  
    </>
}
export default ProductsContainer;