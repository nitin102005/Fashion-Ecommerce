import React, {createContext,useState,useEffect} from 'react'
export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  //Product State
    const[products,setProducts]=useState(()=>{
      const savedProducts = sessionStorage.getItem('products');
      return savedProducts ? JSON.parse(savedProducts) : [];
    })
    
    // Poducts fetch
    useEffect(()=>{
      const fetchProducts=async () =>{
        if (products.length === 0) {
          const response=await fetch('https://fakestoreapi.com/products')
          const data= await response.json();
          setProducts(data)
          // Save to sessionStorage
          sessionStorage.setItem('products', JSON.stringify(data));
    }}
    fetchProducts();
    },[])

    useEffect(() => {
      if (products.length > 0) {
        sessionStorage.setItem('products', JSON.stringify(products));
      }
    }, [products]);

    // Method to get product by ID
    const getProductById = (id) => {
      return products.find(product => product.id === parseInt(id));
    };

  return <ProductContext.Provider value={{ products, getProductById }}>{children}</ProductContext.Provider>
};

export default ProductProvider;
