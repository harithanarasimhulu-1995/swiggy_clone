import React from 'react'
import { useRef } from 'react';

const WhatsonYourMind = (props) => {
  const scrollContainerRef = useRef(null);
  function scrollLeft(){
    if(scrollContainerRef.current){
      scrollContainerRef.current.scrollBy({left:-800,behavior:'smooth'})
    }
  }
  function scrollRight(){
  if(scrollContainerRef.current){
    scrollContainerRef.current.scrollBy({left:800,behavior:'smooth'})
  }
  }
const first = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
const horizontal_scroll_data = props.data1.data.cards[0].card.card.imageGridCards.info;
  return (
    <div className=''>
      <h4 className='font-bold text-2xl'>{props.data1.data.cards[0].card.card.header.title}</h4>
      <div className='flex justify-end'>
<button onClick={scrollLeft}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
<button onClick={scrollRight}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
      </div>
  
      <div className="scroll_container flex overflow-x-auto space-x-4 whitespace-nowrap no-scrollbar" ref={scrollContainerRef}>
        {horizontal_scroll_data.map((data)=>{
        return  <img key={data.id} className="w-44 h-44" src={`${first}${data.imageId}`} alt="horizontal_Scroll_image" />
       })}
      </div>
    </div>
  )
}

export default WhatsonYourMind

