import React, { useState } from 'react';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import CustomButton from "./../common/CustomButton";
import contactImg from "./../Images/bookingImg.jpg";
import SocialLinks from '../common/SocialLinks';
import './ContactModal.css';

function ContactModal({ show, handleClose }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <Modal show={show} onHide={handleClose} size="lg" className="contact-modal">
      <Modal.Body className="p-0 position-relative">
        <button className="contact-close-btn" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <Row className="g-0">
          <Col md={5}>
            <div className="contact-image-container">
              <img src={contactImg} alt="Contact Us" className="contact-image" />
            </div>
          </Col>
          <Col md={7}>
            <div className="contact-form-container p-4 p-md-5">
              <h2 className="write-to-us mb-3">Write to us</h2>
              <p className="contact-description mb-4">
                For any inquiries or complaints please contact us <br />
                E-mail: <strong>info@thepresidentcup.ae</strong>
                <div className="contact-socials">
                  <SocialLinks />
                </div>
              </p>

              <Form>
                <Form.Group className="mb-3" controlId="contactForm.Name">
                  <Form.Label className="ticket-label">Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter your name"
                    onChange={(e) => handleChange(e)} className="custom-input" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactForm.Email">
                  <Form.Label className="ticket-label">Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="name@example.com"
                    onChange={(e) => handleChange(e)} className="custom-input" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="contactForm.Message">
                  <Form.Label className="ticket-label">Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Your message..."
                    onChange={(e) => handleChange(e)} className="custom-input" />
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <CustomButton innerText="Send" onClick={handleSubmit} />
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ContactModal;
