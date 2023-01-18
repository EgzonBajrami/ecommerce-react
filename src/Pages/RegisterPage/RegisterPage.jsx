import './RegisterPage.css'
import hoodies from '../../assets/hoodies.jpg'
import {Form, Button, Alert} from 'react-bootstrap'
import {useState} from 'react';
import {api, endpoints} from '../../Lib/Api'
import {useNavigate}  from 'react-router-dom';
const RegisterPage =  () =>{
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [registering, setRegistering] = useState(false);
    const [variant, setVariant] = useState('');
    const [msg, setMsg] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
       const data ={
            firstName,
            lastName,
            email,
            password,
            age
        }
        const config ={
           data:data
        }
        const result = await api.call(endpoints.addUser, config);
        console.log(result);
        if(result.success){
            setRegistering(true);
            setVariant('success');
            setMsg('Successfully registered!')
            setTimeout(()=>{
                navigate('/')

            },3000)

        }
    }
    return <>
    {registering ? (
        <Alert variant={variant}>{msg}</Alert>

    ):(

  
    <div className="register-wrapper">
        <div className="img-holder">
            <img src={hoodies} alt="hoodie" />

        </div>
        <div className="register-inputs">
            <div className="register-inputs-wrapper">

            
            <div className="register-title">
                <h3>Welcome to our store!</h3>
            </div>
        <Form className="center-form" onSubmit={handleSubmit} >
        <Form.Group className="mx-width mb-3">
    <Form.Label className="to-bd">First Name</Form.Label>
    <input
      type='text'
      required
      className="form-control"
      value={firstName}
      onChange={(e) => {
        setFirstName(e.target.value)
      }}
      placeholder="Your first name:"
    />
  </Form.Group>
  <Form.Group className="mx-width mb-3">
    <Form.Label className="to-bd">Last Name</Form.Label>
    <input
      type='text'
      required
      className="form-control"
      value={lastName}
      onChange={(e) => {
        setLastName(e.target.value)
      }}
      placeholder="Your last name:"
    />
  </Form.Group>
  <Form.Group className="mx-width mb-3">
    <Form.Label className="to-bd">Email</Form.Label>
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
  <Form.Group className="mx-width mb-3">
    <Form.Label className="to-bd">Password</Form.Label>
    <input
      type='password'
      required
      className="form-control"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      placeholder="Your password:"
    />
  </Form.Group>
  <Form.Group className="mx-width mb-3">
    <Form.Label className="to-bd">Age:</Form.Label>
    <input
      type='number'
      required
      className="form-control"
      value={age}
      onChange={(e) => {
        setAge(e.target.value)
      }}
      placeholder="Your age:"
    />
  </Form.Group>
  <Button type="submit">Submit</Button>

            </Form>

        </div>
        </div>
      

    </div>
    )}
    </>
}
export default RegisterPage;