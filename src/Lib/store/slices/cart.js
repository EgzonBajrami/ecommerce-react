import {createSlice} from '@reduxjs/toolkit'

const data = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):['']

const initialState = {
    data,
};

console.log(initialState);
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
         
            const send = [...initialState.data]
            send.push(action.payload);
            console.log(action.payload);

       
        
            localStorage.setItem('cart',JSON.stringify(send))
            state.data = send;
          
            
           
 

        },
        removeOne:(state,action) =>{
            let send = [...initialState.data];
            const d = send.indexOf(action.payload);
            send.splice(d,1);
            console.log(send);
            localStorage.setItem('cart', JSON.stringify(send));
            state.data = [''];
            

        },
        checkOut:(state,action) =>{
            localStorage.removeItem('cart');
            state.data = null;
        }
    }
})
export const {add,removeOne,checkOut} = cartSlice.actions
export default cartSlice.reducer