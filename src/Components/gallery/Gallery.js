import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';
import contactImg from "./../Images/bookingImg.jpg";
import cimg1 from "./../Images/NewsImage1.png";
import cimg2 from "./../Images/NewsImage2.png";
import cimg3 from "./../Images/NewsImage3.png";
import aboutImg1 from "./../Images/aboutImg1.jpg";
import aboutImg2 from "./../Images/aboutImg2.png";
import aboutImg3 from "./../Images/aboutImg3.png";

const galleryData = [
  {
    id: 1,
    title: "Moroccan leg of the UAE President Cup Series",
    imageCount: 30,
    images: [cimg1, cimg2, contactImg, cimg3, aboutImg1, aboutImg2]
  },
  {
    id: 2,
    title: "Moroccan leg of the UAE President Cup Series",
    imageCount: 30,
    images: [cimg3, aboutImg1, aboutImg2, cimg1, cimg2]
  },
  {
    id: 3,
    title: "Moroccan leg of the UAE President Cup Series",
    imageCount: 30,
    images: [aboutImg3, cimg1, aboutImg1, cimg2, cimg3, aboutImg2]
  },
  {
    id: 4,
    title: "Moroccan leg of the UAE President Cup Series",
    imageCount: 30,
    images: [cimg2, cimg3, aboutImg2, aboutImg1, aboutImg3, cimg1]
  },
  {
    id: 5,
    title: "Moroccan leg of the UAE President Cup Series",
    imageCount: 30,
    images: [aboutImg1, aboutImg3, cimg1, cimg2, cimg3, aboutImg2]
  },
  {
    id: 6,
    title: "Moroccan leg of the UAE President Cup Series",
    imageCount: 30,
    images: [cimg1, cimg2, contactImg, cimg3, aboutImg1, aboutImg2]
  }
];

const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (gallery, index = 0) => {
    setSelectedGallery(gallery);
    setActiveIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedGallery(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-container">
      <Container className="py-5">
        <div className="gallery-header text-center mb-5">
          <h1 className="gallery-main-title">A Year-by-Year Journey Horse Racing Galleries</h1>
          <p className="gallery-sub-title">
            Immerse yourself in the timeless beauty and thrilling moments of horse racing as we take you on a captivating visual journey through our year-by-year horse racing galleries
          </p>
        </div>

        <Row className="gy-5">
          {galleryData.map((item) => (
            <Col lg={4} md={6} key={item.id}>
              <div className="gallery-card" onClick={() => openLightbox(item)}>
                <div className="image-cluster d-flex gap-2 mb-3">
                  <div className="cluster-left d-flex flex-column gap-2">
                    <div className="small-img-container">
                      <img src={item.images[0]} alt="gallery-item" className="gallery-img-small" />
                    </div>
                    <div className="small-img-container">
                      <img src={item.images[1]} alt="gallery-item" className="gallery-img-small" />
                    </div>
                  </div>
                  <div className="cluster-right flex-grow-1">
                    <img src={item.images[2]} alt="gallery-item" className="gallery-img-large" />
                  </div>
                </div>
                <div className="gallery-card-content">
                  <h5 className="gallery-item-title">{item.title}</h5>
                  <p className="gallery-item-count text-muted">{item.images.length} Image</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal */}
      {selectedGallery && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="main-image-wrapper">
              <img
                src={selectedGallery.images[activeIndex]}
                alt="Enlarged gallery view"
                className="lightbox-main-img"
              />
            </div>

            <div className="thumbnail-strip-container mt-4">
              <div className="thumbnail-strip d-flex gap-3 justify-content-center">
                {selectedGallery.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`thumb-item ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="thumb-img" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
