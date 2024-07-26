import ProductItem from "./ProductItem";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";




const Products = () => {  
    
  const[products, setProducts] = useState([]);
 
    console.log(products);
    return(
        <div className="products-wrapper">

             <NewProduct setProducts = {setProducts} products={products}/>
             <h1>Products</h1>
             <div className="products">
               {products.length === 0 ? (<p>Hiç eklenen ürün yok</p>) : (products.map((product) => (
                  <ProductItem 
                  key={product.id}
                  product ={product}
                 />   
               )))}
              
                
                
             </div> 
        </div>
    )
}

export default Products; 