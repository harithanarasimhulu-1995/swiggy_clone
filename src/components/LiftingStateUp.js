import React from 'react';
import { useState } from 'react';

// function LiftingStateUp() {
//   return (
//     <div>
//       <Panel title={"Panel1"}>Hello how are you</Panel>
//       <Panel title={"Panel2"}>Hello how are you.Im fine</Panel>
//     </div>
//   )
// }

// function Panel(props){
//     const [para,setPara]=useState(false);
//     return(
//         <div>
//           <h1>hello</h1>
//          <h3>{props.title}</h3>
//          {para?(<p>{props.children}</p>):<button onClick={()=>setPara(!para)}>Show</button>}
//         </div>
//     )
// }

function LiftingStateUp(){
  const [isActive,setIsActive]=useState(0)
  return(
    <>
    <Panel title={"Panel1"} onShow={()=>setIsActive(0)} isActive={isActive===0}>Hello Im from Panel1</Panel>
   <Panel title={"Panel2"} onShow={()=>setIsActive(1)} isActive={isActive===1}>Hello Im from Panel2</Panel>
   <Panel title={"Panel3"} onShow={()=>setIsActive(2)} isActive={isActive===2}>Hello Im from Panel3</Panel>
   {/* <Panel title={"Panel3"} onShow={()=>setIsActive(1)} isActive={isActive}>Hello Im from Panel1</Panel> */}
    </>
  
  )
};

function Panel(props){
  const {title,isActive,onShow,children}=props
  return(
    <div>
      <h2>{title}</h2>
      {isActive?<p>{children}</p>:
      <button onClick={onShow}>Show</button>}
    </div>
  )
}

export default LiftingStateUp
