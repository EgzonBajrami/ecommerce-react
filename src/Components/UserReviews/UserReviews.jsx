import './UserReviews.scss';
import {useState, useEffect} from 'react';
import {api, endpoints} from '../../Lib/Api';
import Rating from '@mui/material/Rating';
import user from '../../assets/user.svg'
import {CCard} from '@coreui/react'
import ReactPaginate from 'react-paginate'
const UserReviews = ({postId}) =>{
    const [data, setData] = useState([]);
    const [reviews, setReviews] = useState(false);
    const [msg, setMsg] = useState('');
    useEffect(()=>{
        const config ={
            params:[postId]
        }
        const getData = async() =>{
            const result = await api.call(endpoints.getReviews, config);
            console.log(result);
            if(result.success){
                
                setData(result.data);
            }
            if(!result.success){
                setMsg('No reviews yet!')
                setReviews(true);
                
            }

        }
        getData();

    },[postId])
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 6;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / 6);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 6) % data.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    return <>
    {reviews ? (<>
    <p>{msg}</p>
    </>):(<>
    <div className="ratings-wrapper">
        {currentItems &&currentItems.map((elem,index)=>(
            <>
            <CCard className="margin-card">
                
            <div className="ratings-data-wrapper" key={elem._id}>
                <div className="ratings-name">
                    <div className="user-icon">
                        <img src={user} alt="user" />
                        <p>{elem.name}</p>

                    </div>
                    
                    <Rating name="read-only" value={elem.rating}
        precision={0.5}
       readOnly />

                </div>
                <div className="ratings-paragraph">
                    <p>{elem.review}</p>
             
                </div>
                </div>
                
            </CCard>
                </>
        ))}

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
    </>)}
    </>
}
export default UserReviews;