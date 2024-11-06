import React from 'react';
import { useState,useEffect } from 'react';
import WhatsonYourMind from './WhatsonYourMind';
import TopRestaruants from './TopRestaruants';

const Body = () => {
  const [data,setData]=useState("");
  const pageData = async()=>{
    try{
      const jsonData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0234605&lng=77.5966852&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      if(!jsonData.ok){
        throw new Error(`HTTP Error status:${jsonData.status}`)
      }
      const apiData = await jsonData.json();
      // console.log(apiData)
      // console.log(apiData.data.cards[0].card.card.imageGridCards.info);
      setData(apiData);
    }catch(e){

    }

  }
  useEffect(()=>{
    pageData();
  },[])
  return (
    <div>
      <div className="body mx-44 width-auto">
        {data!==""&&<WhatsonYourMind data1={data}/>}
        {data!==""&&<TopRestaruants data2={data}/>}
      </div>
    </div>
  )
}

export default Body
