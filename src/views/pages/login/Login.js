import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import {api,endpoints} from '../../../Lib/Api'
import {useState} from 'react'
import {useDispatch} from 'react-redux';
import {login} from '../../../Lib/store/slices/auth'
import {useNavigate} from 'react-router-dom'
import conadLogo from '../../../assets/images/conadLogo.jpg'
import './Login.css'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [bad,setBad] = useState();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log('clicked')
    const data = [email,password];
    const config = {
        data
    }
    const result = await api.call(endpoints.login,config);
    console.log(result);
   if(result.success){ 
    dispatch(login(result.data));
    navigate('/')
}else{
  setBad('Passwordi ose email është gabim.')
}
}
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer className="move-top-mobile">
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                      type="email"
                      placeholder="Email" autoComplete="username" 
                                              onChange={(e)=>{setEmail(e.target.value)}}
                                              value={email}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        value={password}

                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      {bad&&(<>
                      <h6>{bad}</h6>
                      </>)}
                       
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white width-check py-5">
                <CCardBody className="text-center">
                  <div className="logo-container-login">
                    <img src={conadLogo} alt="conadLogo" />
                  </div>
                
                    
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
