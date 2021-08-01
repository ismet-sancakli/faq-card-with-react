import { useState } from "react";

function FaqItem(props){

  
  let [isvisible, setVisible]= useState(false);
  
    
  return (
        
    <div className="faq-item">
      <input type="checkbox" id={props.id}/>
      <label for={props.id} onClick= {() => setVisible(isvisible = !isvisible)}>{props.question}<span><img src="./images/icon-arrow-down.svg" alt=""/></span></label>
      
      {
        isvisible ? <div className="content">{props.children}</div> : null
      } 
    </div>
      
  );
}

export default FaqItem;