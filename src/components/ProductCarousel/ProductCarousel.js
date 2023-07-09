import React from 'react';

const ProductCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwZGUlMjB0ZWNub2xvZyVDMyVBRGF8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      description: 'Descripción del producto 1',
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwZGUlMjB0ZWNub2xvZyVDMyVBRGF8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      description: 'Descripción del producto 2',
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwZGUlMjB0ZWNub2xvZyVDMyVBRGF8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      description: 'Descripción del producto 3',
    },
    // Agrega más objetos de producto según sea necesario
  ];

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="Producto" />
          <p>{product.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
