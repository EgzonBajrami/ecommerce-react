import React,{useState} from 'react'
import {

  CCard,
  CButton,
  CCardBody,
  CCardHeader,

  CForm,
  CFormInput,
  CFormLabel,

  CFormSelect,
  CRow,
} from '@coreui/react'

import {api,endpoints} from '../../../Lib/Api';
import { getHeaderStructure } from '../../../Lib/helper';
import {useSelector} from 'react-redux';



const FormControl = () => {
  const auth = useSelector((state)=>state.auth.data);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [section, setSection] = useState('');
  const [productImage, setProductImage] = useState('');
  const config = {
    headers: getHeaderStructure(auth.token),
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const data ={
      id,
      name,
      price,
      section,
      productImage
    }
    config.data = data;
    const result = await api.call(endpoints.createProduct,config);
    console.log(result);
  }
  return <>
  <CRow>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Add a product</strong>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Product id:</CFormLabel>
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  required
                  placeholder="Type either barcode of product or a randomId:"
                  onChange={(e)=>{setId(e.target.value)}}
                  value={id}
                />

          </div>
          <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Product title:</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  required
                  placeholder="Type product title:"
                  onChange={(e)=>{setName(e.target.value)}}
                  value={name}
                />

          </div>
          <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Product price:</CFormLabel>
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  required
                  placeholder="Type product price:"
                  onChange={(e)=>{setPrice(e.target.value)}}
                  value={price}
                />

          </div>
          <div className="mb-3">
              <CFormSelect aria-label="Default select example"
              onChange={(e)=>{setSection(e.target.value)}}
              value={section}>
                 <option>Section:</option>
                <option value='Furniture'>Furniture & Organization</option>

                </CFormSelect>
                </div>
                <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Product image:</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  required
                  placeholder="Type product image URL:"
                  onChange={(e)=>{setProductImage(e.target.value)}}
                  value={productImage}
                />

          </div>
                <CButton type="submit">Submit</CButton>
        </CForm>
      </CCardBody>
    </CCard>
  </CRow>
  </>
}

export default FormControl
