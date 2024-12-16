import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import{useNavigate} from 'react-router-dom';

export const Shopcontext=createContext();
const ShopContextProvider=(props)=>{
    const currency ='$';
    const delivery_fee=10;
    const[search,setSearch]=useState("");
    const [showSearch,setshowSearch]=useState(false);
    const [cartItems,setCartItems]=useState({});
     const navigate=useNavigate();
    
    
    const addtocart=async(itemID,size)=>{
        
        
        if(!size){
            toast.error("Select Product Size");
            return;
        }
          let cartData=structuredClone(cartItems);
          console.log(cartData);
          

          if(cartData[itemID]){
              if(cartData[itemID][size]){
                   cartData[itemID][size] +=1;
              }
              else{
                cartData[itemID][size]=1;
              }
          }
          else{
            cartData[itemID]={};
            cartData[itemID][size]=1;
          }
          setCartItems(cartData);
    }
    // useEffect(()=>{
    //   console.log(cartItems);
      
    // },[cartItems])

    const getcartcount=()=>{
          let totalcount=0;
          for(const i in cartItems){
            for(const j in cartItems[i]){
                try {
                    if(cartItems[i][j]>0){
                        totalcount+=cartItems[i][j];
                    }
                } catch (error) {
                    
                }
            }
          }
          return totalcount;
    }

    const updatequantity=async(itemID,size,quantity)=>{
        let cartData=structuredClone(cartItems);
        cartData[itemID][size]=quantity;
        console.log(cartData);
        setCartItems(cartData);

    }
    const getCartAmount=()=>{
        let totalAmount=0;
        for(const i in cartItems){
            let itemInfo=products.find((product)=>product._id===i);
            for(const j in cartItems[i]){
                try {
                    if(cartItems[i][j]>0){
                        totalAmount+=itemInfo.price *cartItems[i][j];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }
      

    const value={
        products,currency,delivery_fee,search,setshowSearch,setSearch,showSearch,cartItems,setCartItems,addtocart,getcartcount,updatequantity,getCartAmount,navigate
    }

    return(
        <Shopcontext.Provider value={value}>
          {props.children}
        </Shopcontext.Provider>
    )
}
export default ShopContextProvider;


// itemID="123" if
// cartData["123"]: Accesses the object representing the sizes and quantities for product "123".
// cartData["123"]["M"]: Accesses the quantity for size "M" of product "123".
// cartData["123"]["M"] = 1;: Sets the quantity of size "M" for product "123" to 1.