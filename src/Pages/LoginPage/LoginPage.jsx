import hoodies from '../../assets/hoodies.jpg'
import {Form, Button,Alert} from 'react-bootstrap'
import {useState} from 'react';
import {api,endpoints} from '../../Lib/Api'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { login } from '../../Lib/store/slices/auth';
const LoginPage = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [log, setLog] = useState(false);
    const [variant, setVariant] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const data ={
            email,
            password
        }
        const config = {
            data:data
            
        }
        const result = await api.call(endpoints.login, config);
        console.log(result);
        if(result.success){
            setLog(true);
            dispatch(login(result.data));
            setVariant('success');
            setMessage('Successfully logged in!')
            setTimeout(()=>{
                navigate('/')
            },3000)
        }
        if(!result.success){
            setLog(true);
            setVariant('danger');
            setMessage('Password or email is incorrect.')
            setTimeout(()=>{
                setLog(false);
                

            },3000)
        }
    }
    return <>
    {log ? (<>
    <Alert variant={variant}>{message} </Alert>
    </>):(<> 

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
  <Button type="submit">Log in</Button>

        </Form>
        </div>

                </div>

                </div>
                </>)}

    </>
}
export default LoginPage;