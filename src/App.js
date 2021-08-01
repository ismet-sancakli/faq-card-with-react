import './App.css';
import Banner from './components/Banner';
import FaqItem from './components/FaqItem';

function App(props) {
  return (
  <div className="container">
    <Banner />
    
    <div className="faq-container">
      
      <h2>FAQ</h2>

      <FaqItem id="faq-one" question="Fisrt Question">answer1</FaqItem>
      
      <FaqItem id="faq-two" question="Second Question">answer2</FaqItem>

      <FaqItem id="faq-theree" question="Third Question">answer3</FaqItem>

      <FaqItem id="faq-four" question="Fourth Question">answer4</FaqItem>

      <FaqItem id="faq-five" question="Fifth Question">answer5</FaqItem>

    </div>
  </div>
  );
}




export default App;
