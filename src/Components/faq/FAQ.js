import React, { useState, useEffect } from 'react'
import { Accordion, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchFaqList } from '../../Redux/Actions';
import './FAQ.css';

function FAQ(props) {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    //Fetch FAQ data from API 
    props.fetchFaqList();
  }, [])


  useEffect(() => {
    //set API data tostate
    if (props.faqList) {
      setFaqData(props.faqList);
    }
  }, [props.faqList])

  if (props.loading) {
    return (
      <div className='faq-container'>
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading answers...</p>
      </div>
    );
  }

  if (props.error) {
    return (
      <div className='faq-container text-center'>
        <h2 className='faq-title'>FAQ</h2>
        <div className='text-danger mt-4 fw-bold'>Something went wrong!!</div>
        <p className="text-muted small">{props.error}</p>
      </div>
    );
  }

  return (
    <div className='faq-container' id="faq">
      <h2 className='faq-title'>FAQ</h2>
      <div className='faq-subtitle'>Answers to the frequently asked questions</div>
      <Accordion className='faq-acc'>
        {faqData && faqData.map((faq) => (
          <Accordion.Item className='faq-item' eventKey={faq._id} key={faq._id}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body className='faq-ans'>{faq.answers && faq.answers[0]?.text}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const mapStateToProps = (state) => ({
  faqList: state.faq.data,
  loading: state.faq.loading,
  error: state.faq.error,
});

const mapDispatchToProps = {
  fetchFaqList,
};

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
