import Carousel from 'react-bootstrap/Carousel'

export default function BannerCarousel() {
  return (

  
  <Carousel>
    <Carousel.Item>
      <img id="banner-image" 
        alt="new-zealand" 
        src="https://drive.google.com/uc?export=view&id=1rrxT9Ar6josuOssuj0QJIViPRqDn7CXF">
      </img>
    </Carousel.Item>

    <Carousel.Item>
      <img id="banner-image" 
        alt="new-zealand" 
        src="https://drive.google.com/uc?export=view&id=1QL87ZW2GZ_D9LQmh84QXQqW6HKjy4ziW">
      </img>
    </Carousel.Item>

    <Carousel.Item>
      <img id="banner-image" 
        alt="new-zealand" 
        src="https://drive.google.com/uc?export=view&id=1TLdVHk3kNRGOGHz2_YY6WkJFWAWdpq1Z">
      </img>
    </Carousel.Item>
   
   
  </Carousel>
  )
};