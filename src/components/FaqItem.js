function FaqItem(props){
    return (
        
        <div className="faq-item">
        <input type="checkbox" id={props.id}/>
        <label for={props.id}>{props.question}<span><img src="./images/icon-arrow-down.svg" alt=""/></span></label>
        <div className="content">{props.children}
        </div>
      </div>
      
    );
}

export default FaqItem;