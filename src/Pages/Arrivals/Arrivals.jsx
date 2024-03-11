import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import "./Arrival.css";
import Button from "./Button";
import { Link } from "react-router-dom";
const Arrivals = () => {

  const [products , setProducts] = useState([])

  const [category , setCategory] = useState([]);

  const [categoryProduct , setCategoryProduct] = useState(null);


  const getCategory = ()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategory(json))
  }

  const getProducts = ()=>{ 
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }

  const getCategoryProduct = (category)=>{
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>setCategoryProduct(json))
    
  }


  useEffect(()=>{
    getProducts()
    getCategory()
  },[])
  return (
    <div className="arrival-wrapper">
      <h1>New Arrivals</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil optio
        soluta iure .<br /> Sed et nesciunt enim cumque ipsa molestias
        recusandae quia laudantium totam ullam.
      </p>
      <div className="arrival-btn">
        {category?.map((category)=>(
          <Button name={category} key={category.id} onclick={()=>getCategoryProduct(category)}/>
        ))}
      </div>
      {categoryProduct?<div className="arrival-cards">
        {categoryProduct?.map((product)=>(
          <Link to={`/product/${product.id}`} key={product.id}>
          <Card product={product} /></Link>
        ))}
      </div> : <div className="arrival-cards">
        {products?.map((product)=>(
          <Link to={`/product/${product.id}`} key={product.id}>
          <Card product={product} /></Link>
        ))}
      </div>}
      
 
      <Button name={"Show More"} />
    </div>
  );
};
export default Arrivals;
