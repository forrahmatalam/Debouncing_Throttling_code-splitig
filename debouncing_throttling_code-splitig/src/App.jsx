import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



const App = () => {

  const [searchData, setSearchData] = useState(null);

  const [productsData, setproductsData] = useState([]);

  const [scrollY, setScrollY] = useState(null);

  let throttle = false;


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


    //Debouncing.....
  useEffect(() => {
    if(!searchData) return;
    
let timeOut =setTimeout(() => {
  filterData();
}, 700);

return ()=> clearTimeout(timeOut); //isse rest piche wale timeout ko clear ho rha hai like mens to men ka clear ho gya 

  }, [searchData]);



  useEffect(() => {
    getProducts();
  }, []);

 
//Throttling.....
useEffect(()=>{

  let handleScroll = ()=>{
   if(throttle) return;

    throttle = true;

    console.log("scroll triggered...")
    setScrollY(window.scrollY);

    setTimeout(() => {
      throttle = false;
    }, 5000);
  }

  window.addEventListener("scroll", handleScroll);

  return ()=>{
    window.removeEventListener("scroll", handleScroll);
  }
},[]);





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
