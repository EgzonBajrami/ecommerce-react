import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {CForm,
    CCard,
  
    CCardBody,
    CCardHeader,
    CFormTextarea,
    CButton,
CFormLabel,
CFormInput} from '@coreui/react';
import './Reviews.scss'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {api,endpoints} from '../../Lib/Api';
import UserReviews from '../UserReviews/UserReviews';
const Reviews = () =>{
    const location = useLocation();
    const postId = location.pathname.split('/')[2];
    const [reviewing, setReviewing] = useState(true);
    const [name,setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [finished, setFinished] = useState();
    const [msg, setMsg] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const data = {
            name,
            review,
            rating
        }
        const config = {
            params:[postId]

        }
        config.data = data;
        const result = await api.call(endpoints.postRating, config);
        console.log(result);
        if(result.success){
            setFinished(true);
            setMsg('Your review has been successfully submitted. Thank you!')
            setTimeout(()=>{
                setFinished(false);
                setReviewing(false);

            },3000)

        }
        if(!result.success){
            setFinished(true);
            setMsg('Something went wrong, please check your inputs once again. We are very sorry.')
        }
    }
    return <>
    <div className="reviews-wrapper">

    <CCard className="mb-4">
      <CCardHeader
      onClick={()=>{
        setReviewing(!reviewing);
      }}>
        <strong>Drop a review</strong>
      </CCardHeader>
      {reviewing ?(<>
      <UserReviews postId={postId}/>
      </>):(<>
        <CCardBody>
        <CForm onSubmit={handleSubmit}>
            {finished && (
                <>
                <p>{msg}.</p>
                </>
            )}
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Your name:</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  required
                  placeholder="Please tell us your name:"
                  onChange={(e)=>{setName(e.target.value)}}
                  value={name}
                />

          </div>
          <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">What do you think about the product?</CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3"
                onChange={(e)=>{setReview(e.target.value)}}
                value={review}></CFormTextarea>
              </div>
              <div className="mb-3">
              <Typography component="legend">Please rate the product:</Typography>
              <Rating
        name="half-rating"
        value={rating}
        precision={0.5}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      />
              </div>
              <CButton type="submit">Submit</CButton>
          </CForm>

          </CCardBody>
         
          
      </>)}
      </CCard>
    
       

    </div>
    </>
}
export default Reviews;