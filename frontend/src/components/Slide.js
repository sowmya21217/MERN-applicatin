import Carousel from "react-bootstrap/Carousel";
import pic from './Images/image.jpeg';
import pic1 from './Images/image1.jpeg';
import pic2 from './Images/image3.jpeg';


const Slide = () => {
 
  return (
    <Carousel variant="dark" className="mt-4">
      <Carousel.Item>
        <img xs={9} md={5} lg={2}
          className="d-block w-100"
          src= {pic}
          alt="First slide"
          style={{ width:'50rem', height: '20rem'}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p style={{ color: 'red' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img xs={9} md={5} lg={2}
          className="d-block w-100 "
          src= {pic1}
          alt="Second slide"
          style={{ width:'50rem', height: '20rem'}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img xs={9} md={5} lg={2}
          className="d-block w-100"
          src= {pic2}
          alt="Third slide"
          style={{ width:'50rem', height: '20rem'}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
