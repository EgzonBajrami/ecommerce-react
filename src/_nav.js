import React from 'react'
import CIcon from '@coreui/icons-react'
import {


  cilNotes,

  cilSpeedometer,

} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  
  
  {
    component: CNavTitle,
    name: 'Products',
  },
 
  {
    component: CNavGroup,
    name: 'Products Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add a product',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Editors choice products',
        to: '/forms/form-chosen',
      },


    
    ],
  },

  
  
 
 
]

export default _nav
