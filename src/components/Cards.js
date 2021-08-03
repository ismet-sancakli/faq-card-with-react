import { createServer } from 'miragejs';
import { useEffect, useState } from 'react';
import FaqItem from './FaqItem';

let server = createServer()
server.get("/api/cards", {cards: [
  { 
    id: "1", 
    question: "How many team members can I invite?", 
    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  },
  { 
    id: "2", 
    question: "What is the maximum file upload size?", 
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  { 
    id: "3", 
    question: "How do I reset my password?", 
    answer: "Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
  },
  { 
    id: "4", 
    question: "Can I cancel my subscription?", 
    answer: "Yes! Send us a message and we’ll process your request no questions asked."
  },
  { 
    id: "5", 
    question: "Do you provide additional support?", 
    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.Chat and email support is available 24/7."
  }
]})

const Cards = () => {
    let [cards, setCards] = useState([])

  useEffect(() => { // fetched the data in thid section.

    fetch("/api/cards")
      .then((response) => response.json())
      .then((json) => {
        setCards(json.cards)
      })
  }, [])

    return (
        <>
<div className="faq-container">
      
      <h2>FAQ</h2>

      {cards.map((card) => (
        <FaqItem key={card.id} id={card.id} question={card.question}>{card.answer}</FaqItem>
      ))}

    </div>
        </>
    )
}

export default Cards;
