import HomePage from "../../Pages/HomePage/HomePage"
import LoginPage from "../../Pages/LoginPage/LoginPage"
import RegisterPage from "../../Pages/RegisterPage/RegisterPage"
import React from 'react';
import FurniturePage from "../../Pages/FurniturePage/FurniturePage";
import SingleProductPage from "../../Pages/SingleProductPage/SingleProductPage";
import CheckoutPage from "../../Pages/CheckoutPage/CheckoutPage";
const DefaultLayout = React.lazy(() => import('../../layout/DefaultLayout'))



export const routeData = {
    
    public:[
        {
            path:'/',
            element:<HomePage />
        },
        {
            path:'/register',
            element:<RegisterPage />
        },
        {
            path:'/login',
            element:<LoginPage />
        },
        {
            path:'/Section/:id',
            element:<FurniturePage />
        },
        {
            path:'/products/:id',
            element:<SingleProductPage />
        },
        {
            path:'/checkout',
            element:<CheckoutPage />
        }


    ],
    private:[
        {
            path:'*',
            element:<DefaultLayout />
        }

    ]
}