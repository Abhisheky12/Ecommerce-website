import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products,search,showSearch}=useContext(Shopcontext);
  const [showFilter,setshowFilter]=useState(false);
  const [filterproducts,setfilterproducts]=useState([]);
  const [category,setcategory]=useState([]);
  const[subCategory,setsubCategory]=useState([]);
  const[sortType,setSortType]=useState("relavent");


  const toggleCategory=(e)=>{
           if(category.includes(e.target.value)){
            setcategory(prev=>prev.filter(item=>item!==e.target.value))
           }
           else{
            setcategory(prev=>[...prev,e.target.value])
           }
  }


  const togglesubcategory=(e)=>{
       if(subCategory.includes(e.target.value)){
        setsubCategory(prev=>prev.filter(item=>item!==e.target.value))
       }
       else{
        setsubCategory(prev=>[...prev,e.target.value])
       }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice();
    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setfilterproducts(productsCopy);
    
  }
  const sortProduct=()=>{
   const fpcopy=filterproducts.slice();
      switch(sortType){
                case 'low-high':
                  setfilterproducts(fpcopy.sort((a,b)=>(a.price-b.price)));
                  break;
                case 'high-low':
                  setfilterproducts(fpcopy.sort((a,b)=>(b.price-a.price)));
                  break;

                default:
                  applyFilter();
                  break;

      }

  }
 useEffect(()=>{
     sortProduct()
 },[sortType])

useEffect(()=>{
  applyFilter();
},[category,subCategory,search,showSearch])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* {filter option} */}
      


      <div className='min-w-60' >
        <p onClick={()=>setshowFilter(!showFilter)}className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter?'':'rotate-90'}`}alt="" />
        </p>
        {/* {catergory} */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'hidden':''}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value='Men'onChange={toggleCategory} />Men
              </p>
              <p className='flex gap-2' >
                <input type="checkbox" className='w-3' value='Women'onChange={toggleCategory} />Women
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value='Kids'onChange={toggleCategory} />Kids
              </p>
          </div>

        </div>
        {/* {sub Category} */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'hidden':''}`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value='Topwear'onChange={togglesubcategory}/>Topwear
              </p>
              <p className='flex gap-2' >
                <input type="checkbox" className='w-3' value='Bottomwear'onChange={togglesubcategory} />Bottomwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value='Winterwear'onChange={togglesubcategory} />Winterwear
              </p>
          </div>

        </div>

      </div>
      {/* {Right side} */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1='ALL' text2='COLLECTIONS'/>
          {/* {product Sort} */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm mb-4'>
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>

        </div>
         {/* {map product} */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterproducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
        </div>

      </div>
    </div>
  )
}

export default Collection
