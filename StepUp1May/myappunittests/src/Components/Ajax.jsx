import { useEffect, useState } from 'react';
import './App.css';

function Ajax() {
  const [data,setData]=useState([])
 const fetchData=async()=>{
  try{
    let res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts=await res?.json()
    setData(posts)
  }
 catch(e){
    console.log(e)
 }
 }
useEffect(() => {
  fetchData()
}, []); 
  return (
    <div className="App">
      <ol>
   {
    data?.slice(0,4)?.map((obj)=>{
      return <li>{obj?.title}</li>
    })
   }
   </ol>
    </div>
  );
}

export default Ajax;
