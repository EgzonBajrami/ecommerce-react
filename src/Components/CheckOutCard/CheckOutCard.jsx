import './CheckOutCard.scss'
import {useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import americanexpress from '../../assets/americanexpress.svg';
import mastercard from '../../assets/mastercard.svg';
import visacreditcard from '../../assets/visacreditcard.svg';
import {checkOut} from '../../Lib/store/slices/cart'
import {useDispatch} from 'react-redux';
const CheckOutCard = ({data}) =>{
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [ccNumber, setCcNumber] = useState("");
    const [ccv, setCCV] = useState('');
    const [expiry, setExpiry] = useState('');
    const formatAndSetExpiry = e => {
        const inputVal = e.target.value.replace(/ /g, ""); 
        let inputNumbersOnly = inputVal.replace(/\D/g, "/");
    
        if (inputNumbersOnly.length > 4) {

            inputNumbersOnly = inputNumbersOnly.substr(0, 4);
        }
    

        const splits = inputNumbersOnly.match(/.{1,2}/g);
    
        let spacedNumber = "";
        if (splits) {
            spacedNumber = splits.join(" "); 
        }
    
        setExpiry(spacedNumber);
     
    }

    const formatAndSetCcNumber = e => {
        const inputVal = e.target.value.replace(/ /g, ""); 
        let inputNumbersOnly = inputVal.replace(/\D/g, "");
    
        if (inputNumbersOnly.length > 16) {

            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }
    

        const splits = inputNumbersOnly.match(/.{1,4}/g);
    
        let spacedNumber = "";
        if (splits) {
            spacedNumber = splits.join(" "); 
        }
    
        setCcNumber(spacedNumber); 
    };
    const handleSubmit = async(e) =>{
        e.preventDefault();
        dispatch(checkOut());
    }
    
    return <>
    <div className="checkout-card-wrapper">
    <Form className="" onSubmit={handleSubmit} >
        <div className="half-it">

       
        <Form.Group className="to-bdz mb-3">
    <Form.Label className="to-bdz">Name</Form.Label>
    <input
      type='text'
      required
      className="form-control"
      value={name}
      onChange={(e) => {
        setName(e.target.value)
      }}
      placeholder="Name on the card:"
    />
  </Form.Group>
  </div>
  <div className="half-it">

       
<Form.Group className="to-bdz mb-3">
<Form.Label className="to-bdz">Email:</Form.Label>
<input
type='email'
required
className="form-control"
value={email}
onChange={(e) => {
setEmail(e.target.value)
}}
placeholder="Your email:"
/>
</Form.Group>
</div>
<div className="half-itt">

<div className="half-its">
       
<Form.Group className="to-bdz mb-3">
<Form.Label className="to-bdz">Card Number:</Form.Label>
<input
type='text'
required
className="form-control"
value={ccNumber}
onChange={formatAndSetCcNumber}
placeholder="Your card number:"
/>
</Form.Group>
</div>
<div className="card-icon">
    {parseInt(ccNumber.charAt(0))===5 &&(<>
    <div className="master-holder">
        <img src={mastercard} alt="mastercard" />

    </div>
    </>)}
    {parseInt(ccNumber.charAt(0))===2 &&(<>
    <div className="master-holder">
        <img src={mastercard} alt="mastercard" />

    </div>
    </>)}
    {parseInt(ccNumber.charAt(0))===4 &&(<>
    <div className="master-holder">
        <img src={visacreditcard} alt="visacreditcard" />

    </div>
    </>)}
    {parseInt(ccNumber.charAt(0))===3 &&(<>
    <div className="master-holder">
        <img src={americanexpress} alt="americanexpress" />

    </div>
    </>)}

</div>
</div>
<div className="half-it-ccv">


<div className="half-itz">

       
<Form.Group className="to-bdz mb-3">
<Form.Label className="to-bdz">CCV:</Form.Label>
<input
type='number'
required
className="form-control"
value={ccv}
onChange={(e) => {
setCCV(e.target.value)
}}
placeholder="Number on card:"
/>
</Form.Group>
</div>
<div className="half-itz">

       
<Form.Group className="to-bdz mb-3">
<Form.Label className="to-bdz">Expiry date:</Form.Label>
<input
type='text'
required
className="form-control"
value={expiry}
onChange={formatAndSetExpiry}
placeholder="MM/YY:"
/>
</Form.Group>
</div>
</div>
<div className="btn-holder">


<Button type="submit">Submit</Button>
</div>
  </Form>

    </div>
    </>
}
export default CheckOutCard;