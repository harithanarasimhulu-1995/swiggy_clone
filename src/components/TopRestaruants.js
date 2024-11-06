import React from 'react';
import { TOPREST } from '../utils/Constants';

const TopRestaruants = (props) => {
    console.log(props)
    const topRestData = props.data2.data.cards[1].card.card;
  return (
    <div>
      {topRestData.header.title}
      <div className='flex'>
      {topRestData.gridElements.infoWithStyle.restaurants.map((data)=>{
        return (
        <div className='flex'>
             <img className="w-16 h-16 rounded-lg" src ={`${TOPREST}${data.info.cloudinaryImageId}`} alt="" />
        </div>
           
        )
      })}
      </div>
      
    </div>
  )
}

export default TopRestaruants
