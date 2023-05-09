import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    totalQuantity:0,
    totalAmount:0
}

const cartSlice=createSlice({

    name:'cart',
    initialState:initialState,

    reducers:{
        addItem(state,action){
            const newItem=action.payload
            const existingItem=state.cartItems.find(item=>item.id===newItem.id)
            state.totalQuantity++

            if(!existingItem){

                // =Nese  e perdorim veq redux mos e bo mute state array veq e bon clone state array nese perdor
                // redux toolkit atehere ska problem se redux toolkit e bon vet clone


                state.cartItems.push({
                    id:newItem.id,
                    title:newItem.title,
                    image01:newItem.image01,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice=Number(existingItem.totalPrice)+Number(newItem.price)
            }

            state.totalAmount=state.cartItems.reduce((total,item)=>(
                total+Number(item.price)*Number(item.quantity)
            ))

        }

    }

});

export  const cartActions=cartSlice.actions
export default cartSlice