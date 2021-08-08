import { useState } from "react";
const FaqItem = ({id, question, children}) => {  
  const [isvisible, setVisible]= useState(false);  
    
  return (        
    <div className="faq-item">
      <input type="checkbox" id={id}/>
      <label for={id} onClick= {() => setVisible(!isvisible)}>{question}<span><img src="./images/icon-arrow-down.svg" alt=""/></span></label>      
      {
        isvisible ? <div className="content">{children}</div> : null
      } 
    </div>      
  );
}
export default FaqItem;
