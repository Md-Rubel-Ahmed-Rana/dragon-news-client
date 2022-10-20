import Carousel from 'react-bootstrap/Carousel';
import  Image1  from "../../assets/images/image-1.png";
import  Image2  from "../../assets/images/image-2.png";

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image1}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BrandCarousel;