import React, {useState, useEffect} from 'react'
import { Container, Card, Col, Row, Image } from 'react-bootstrap';
import aboutImg1 from './../Images/aboutImg1.jpg';
import aboutImg2 from './../Images/aboutImg2.png';
import aboutImg3 from './../Images/aboutImg3.png';
import './About.css';

const boardMembers = [
  {name: 'John Doe', position: 'Chairman',image: 'https://picsum.photos/id/1/200/300',id:1},
  {name: 'Jane Smith', position: 'CEO',image: 'url',id:2},
  {name: 'John Doe', position: 'Chairman',image: 'url',id:3},
  {name: 'Jane Smith', position: 'CEO',image: 'url',id:4},
  {name: 'John Doe', position: 'Chairman',image: 'url',id:5},
  {name: 'Jane Smith', position: 'CEO',image: 'url',id:6},
  {name: 'John Doe', position: 'Chairman',image: 'url',id:7},
  {name: 'Jane Smith', position: 'CEO',image: 'url'},
];

const aboutInfo = {
  title: 'UAE President Cup',
  desc1: `The series of races for the UAE President's Cup for Purebred Arabian Horses began in 1994, envisioned by the late founder, Sheikh Zayed bin Sultan Al Nahyan, may Allah rest his soul.

The aim was to highlight the importance of purebred Arabian horses and to elevate their status while celebrating the heritage of the Emirates on a global scale.`,
  img1: aboutImg1,
  desc2: `Today, the prestigious cup has become one of the most important and historic classic races in the world, attracting the elite of horse owners.

In this challenge for titles, the best horses are supervised by the finest trainers and jockeys, and the races are held at some of the most historic tracks around the world. The series is supported and guided by His His Highness Sheikh Mansour Bin Zayed Al Nahyan, UAE Vice President, Deputy Prime Minister and President of the Presidential Court, reflecting his commitment to developing the Arabian horse racing industry and supporting Arabian horse owners and breeders worldwide. This support underscores the UAE's plans to maintain the stature of Arabian horses and enhance their global presence.

Over 31 years, the series has made a notable international impact, highlighting the UAE's rich equestrian legacy and its pivotal role in preserving the journey of the Arabian horse.`,
  img2: aboutImg2,
  img3: aboutImg3
}

function About() {
  const [aboutDetails, setAboutDetails] = useState({});
  const [boardMemberList, setBoardMemberList] = useState([]);
  
  useEffect(() => {
    //Fetch about details from API and set state
    setAboutDetails(aboutInfo);
  }, [])

    useEffect(() => {
    //Fetch board members from API and set state
    setBoardMemberList(boardMembers);
  }, [])

  return (
    <div className='about-main'>
      <Container className='about-section1'>
        <Card >
          <Row className='about-section-row'>
            <Col md={6}>
              <Card.Body className='about-text'>
                <Card.Title className='about-title'>{aboutDetails.title}</Card.Title>
                <Card.Text>{aboutDetails.desc1}</Card.Text>
              </Card.Body>
            </Col>
             <Col md={6}>
              <Card.Img className='about-img1' src={aboutDetails.img1} />
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className='about-section-row g-0'>
            <Col md={3}> 
              <Image src={aboutDetails.img2} alt="Image 2" fluid className="about-img2" />
            </Col>
            <Col md={3}> 
              <Image src={aboutDetails.img3} alt="Image 3" fluid className="about-img3" />
            </Col>
            <Col md={6} className='about-text'>
              <Card.Body>
                <Card.Text>{aboutDetails.desc2}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
      <Container className='board-member-section'>
        <div className='board-member-header'>Board Members</div>
        <p className='.board-member-title'>Meet the board</p>
        <Row lg={3} md={4} sm={6} xs={12} className='g-4'>
          {boardMemberList.map((member) => (
            <Col key={member.id} lg={3} md={4} sm={6} className="mb-4">
              <Card className='board-member-card'>
                <Card.Img className='board-member-img' variant="top" src={member.image} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.position}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default About