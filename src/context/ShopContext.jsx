import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$'; ///currency
    const delivery_fee = 10;

    const [search, setSearch] = useState('');

    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    const addToCart = async(itemId,size)=>{
        // if(!size){
        //     alert('Please select a size');
        //     return;
        // }

        if(!size){
            toast('Please select Product size');
            return;
        }

        let cartData = structuredClone(cartItems); //this creates a copy of the object

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }



    // useEffect(()=>{
    //     console.log(cartItems)
    // },[cartItems])

    const getCartCount= ()=>{
        let totalCount = 0;

        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    // update cart
    const updateQuantity = async(itemId,size, quantity)=>{
        let cartData = structuredClone(cartItems); //create an exact replica of the cartItems

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;

        for(const items in cartItems) {
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]) {
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }

        return totalAmount;
    }


    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity, 
        getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;