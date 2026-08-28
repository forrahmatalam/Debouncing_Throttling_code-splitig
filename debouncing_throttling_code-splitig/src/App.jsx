import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

  const [searchData, setSearchData] = useState(null);





  const [productsData, setproductsData] = useState([]);
  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setproductsData(res.data);
  };



let filterData = ()=>{
  console.log("filtering running");
  let result = productsData.filter((val)=>{ 
  return val.title.toLowerCase().includes(searchData.toLowerCase())
  })
  setproductsData(result)
};

  useEffect(() => {
    if(!searchData) return;
    filterData();
  }, [searchData]);

  useEffect(() => {
    getProducts();
  }, []);

 
  return (
    <div>
      
<input className="bg-blue-300 border-1 p-1 m-1 rounded-1xl" type="text" placeholder="Search Products" onChange={(e)=>{
setSearchData(e.target.value)
}}/>

      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
