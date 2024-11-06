import React from 'react';
import { useState } from 'react';

function UseMemo() {
    const[text,setText]=useState("")
  return (
    <div className='usememoeg'>
<div classNames="usememoinput">
    <input type="text" value={text} name="" id="" onChange={(e)=>setText(e.target.value)}/>
    <p>{text}</p>
</div>
    </div>
  )
}

export default UseMemo
