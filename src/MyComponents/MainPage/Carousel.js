import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../Images/1.svg';
import pic2 from '../Images/2.svg';
import pic3 from '../Images/3.svg';

function ImageSlideShow() {
    return (
        <Carousel className='p-0 mt-5'>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageSlideShow;