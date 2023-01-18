import React,{useState} from 'react'
import {

  CCard,
  CButton,
  CCardBody,
  CCardHeader,
  CFormLabel,

  CForm,
  CFormInput,

  CRow,
} from '@coreui/react'

import {api,endpoints} from '../../../Lib/Api';
import { getHeaderStructure } from '../../../Lib/helper';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const FormChosen = () =>{
    const auth = useSelector((state)=>state.auth.data);
    const navigate = useNavigate('');
    const [id,setId] = useState('');
    const [name, setName] = useState('');
    const [editor, setEditor] = useState(false);
    const [res, setRes] = useState(false);
    const [mongoId, setMongoId] = useState('');

    const config = {
        headers: getHeaderStructure(auth.token),
      }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data ={
            id,
            name
        }
        config.data = data;
        const result = await api.call(endpoints.findProduct, config);
        console.log(result);
        if(result.data){
            setEditor(true);
            setRes(true);
            setMongoId(result.data._id);
        }
        if(!result.data){
            setEditor(true);
            setRes(false);
            setTimeout(()=>{
                setEditor(false);
                setRes(false);
            },3000)
        }
    }
    const secondSubmit = async(e) =>{
        e.preventDefault();
        const data ={
            mongoId,
        }
        config.data = data;
        const result = await api.call(endpoints.addToEditor, config);
        if(result.success){
           
            setTimeout(()=>{
                navigate('/')
            },3000)
        }

    }
    return <>
    {editor? (
        <>
        {
            res ? (<>
           
               <CRow>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Add it to editors choice</strong>
      </CCardHeader>
      <CCardBody>
            <CForm onSubmit={secondSubmit}>
                <CButton type="submit">Add</CButton>

            </CForm>
            </CCardBody>
            </CCard>
            </CRow>
            </>):(<>
            <CRow>
            <CCard className="mb-4">
      <CCardHeader>
        <strong>Add it to editors choice</strong>
      </CCardHeader>
      <CCardBody>
        <CCardHeader>
            <strong>Product by that name or ID does not exist.</strong>
        </CCardHeader>
        </CCardBody>
        </CCard>
                
            </CRow>
            </>)
        }
        </>
    ):(

  
    <CRow>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Search by either barcode or product name</strong>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Find by productId:</CFormLabel>
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  
                  placeholder="Type either barcode of product or a randomId:"
                  onChange={(e)=>{setId(e.target.value)}}
                  value={id}
                />

          </div>
          <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Find by productName:</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  
                  placeholder="Type product name:"
                  onChange={(e)=>{setName(e.target.value)}}
                  value={name}
                />

          </div>
          <CButton type="submit">Submit</CButton>
            
        </CForm>
       </CCardBody>
       </CCard>
       </CRow>
       )}
    </>
}
export default FormChosen;