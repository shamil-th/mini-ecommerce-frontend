import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../features/productSlice';
import ItemCard from './ItemCard';
import { Box } from '@mui/material';

const ProductListing = () => {
    const products = useSelector((state) => state.products.products);
let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    },[])
  return (
    <Box sx={{display:'flex', flexWrap:'wrap', gap:'20px 15px'}}>
        {products?.map((product) => (
        <ItemCard product={product} key={product._id}/>
        ))
        }
    </Box>
  )
}

export default ProductListing