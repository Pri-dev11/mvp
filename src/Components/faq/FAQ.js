import React, { useState, useEffect } from 'react'
import { Accordion } from 'react-bootstrap';
import './FAQ.css';


const faqInfo = [
  {faqIndex:0, question: 'What is the UAE President Cup?',
    answer: 'The UAE President Cup is a series of races for purebred Arabian horses.The UAE President Cup is a series of races for purebred Arabian horses.The UAE President Cup is a series of races for purebred Arabian horses.The UAE President Cup is a series of races for purebred Arabian horses.'},
  {faqIndex:1, question: 'When and where is the 29th edition taking place?',
    answer: 'The UAE President Cup is a series of races for purebred Arabian horses.'},
  {faqIndex:2, question: 'Where can I find the full Competition Calendar?',
    answer: 'The UAE President Cup is a series of races for purebred Arabian horses.'},
  {faqIndex:3, question: 'How do I purchase tickets?',
    answer: 'The UAE President Cup is a series of races for purebred Arabian horses.'},
];

function FAQ() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    //Fetch FAQ data from API and set state
    setFaqData(faqInfo);
  },[])

  return (
    <div className='faq-container'>
      <h2 className='faq-title'>FAQ</h2>
      <div>Answers to the frequently asked questions</div>
      <Accordion className='faq-acc'>
        {faqData.map((faq) => (
          <Accordion.Item className='faq-item' eventKey={faq.faqIndex} key={faq.faqIndex}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body className='faq-ans'>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export default FAQ