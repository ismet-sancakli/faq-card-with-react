function Banner(props) {
    return (
        <>
      <img className="outher" src= "./images/illustration-box-desktop.svg" alt=""/>
      <div className="image-container">
      <div className="inner">
        <picture>
          <source srcSet="./images/illustration-woman-online-mobile.svg" media=
          "(max-width:890px)"/>
          <img src="./images/illustration-woman-online-desktop.svg" alt=""/> 
        </picture>
        <picture>
          <source srcSet="./images/bg-pattern-mobile.svg" media=
          "(max-width:890px)"/>
          <img className="second-img" src="./images/bg-pattern-desktop.svg" alt=""/> 
        </picture>
      </div>      
    </div>
    </>
    );  
  }

  export default Banner;