import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import Slider from "react-slick";
import Cards from "./Cards";


const LatestCollection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4001/product")
        const data2 = res.data.filter((item)=> item.category === "Flat 28% OFF")
        console.log(data2)
        setProducts(data2)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, [])
  
  // const Filterdata = filter((item)=> item.category === "Flat 28% OFF");
  // console.log(Filterdata);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4 px-4 mb-12">
        <div className="mb-5">
          <h1 className="text-black bg-white text-2xl mb-4 font-bold">Best Offers !!</h1>
        <p className="text-black bg-white text-xl space-y-2">
          Upgrade your wardrobe without breaking the bank!
          <br/>
          <b>Hurry!</b> Limited-time offer. <b>Enjoy Flat 28% OFF </b>on our Free Collection!
        </p>
        </div>
      <div>
        <Slider {...settings}>
        {products.map((item)=> (
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
      </div>
    </>
  );
};

export default LatestCollection;
