import Carousel from 'react-bootstrap/Carousel';
import hoodies from '../../assets/hoodies.jpg'
import furniture from '../../assets/furniture.jpg'
import jewelry from '../../assets/jewelry.jpg';
import enga from '../../assets/enga.jpg'
import './Carousel.css';

const Carousels = () =>{
    return <>
    <Carousel
    className="carousel-container"
    autoPlay={true}
    interval={4500}
    indicators={false}
    >
        <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src={hoodies}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="first-caption">
            <h3>Hoodies & sweaters</h3>
          </div>
          <div className="second-caption">
            <p>Find chosen hoodies & sweaters by our best designers.</p>
          </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src={furniture}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="first-caption">
            <h3>Furniture & Organization</h3>
          </div>
          <div className="second-caption">
            <p>The best furnitures are the ones that are designed and organized for you.</p>
          </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src={jewelry}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="first-caption">
            <h3>Unique Jewelry</h3>
          </div>
          <div className="second-caption">
            <p>Elegant and Unique, that is the word for you when you are wearing our jewelry!</p>
          </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src={enga}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="first-caption">
            <h3>Engagement & Wedding Gifts</h3>
          </div>
          <div className="second-caption">
            <p>Someone you know is getting marrying soon? You came to right place for the gifts!</p>
          </div>
        </Carousel.Caption>
        </Carousel.Item>
        
        
    </Carousel>
    </>
}
export default Carousels;