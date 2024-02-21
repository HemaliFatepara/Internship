import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "70vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const imageStyle = {
  width: "59rem", 
  height: "34rem", 
};

const Slider = () => (
  <Carousel autoplay>
    <div style={contentStyle}>
      <div className="flex justify-around ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="font-extrabold text-3xl max-w-[60%]">
            50% off for your first shopping
          </h2>
          <p className="max-w-[54%]">
            Enjoy a fantastic 50% discount on your inaugural purchase! Shop now
            and save big on your first order! Limited time offer—grab your
            favorites at half the price!
          </p>
        </div>
        <div>
          <img
            style={imageStyle} 
            src="https://img.freepik.com/free-photo/shopping-trolley-with-little-snooze_23-2147957113.jpg?w=900&t=st=1708407734~exp=1708408334~hmac=27264bbc498addd42f6b56c632c70d5e8a92e8410e9c7f737ef51088e50924f2"
            alt="..."
          />
        </div>
      </div>
    </div>

    <div style={contentStyle}>
      <div className="flex justify-around ">
        <div className="flex flex-col justify-center items-center ">
        <h2 className="font-extrabold text-3xl max-w-[60%]">Discover unbeatable deals and fill your cart with joy!</h2>
        <p className="max-w-[54%]">
            Explore a world of unbeatable bargains and indulge in the joy of
            saving while you shop 'til you drop!
          </p>
        </div>
        <div>
          <img
            style={imageStyle} 
            src="https://img.freepik.com/free-photo/many-colorful-paper-shopping-bags-cart_23-2147892174.jpg?w=900&t=st=1708409737~exp=1708410337~hmac=353ec6fd17dd11540fab1e718eaeeb2850f0b95f3c8ce5c2f8f01561dc15713a"
            alt="..."
          />
        </div>
      </div>
    </div>

    <div style={contentStyle}>
      <div className="flex justify-around ">
        <div className="flex flex-col justify-center items-center ">
        <h2 className="font-extrabold text-3xl max-w-[60%]">
            Discover the art of smart shopping and watch your savings grow
            with every purchase!
          </h2>
          <p className="max-w-[54%]">
            Transform your routine shopping trips into opportunities to
            stretch your budget further and live more abundantly!
          </p>
        </div>
        <div>
          <img
            style={imageStyle} 
            src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1060&t=st=1708409773~exp=1708410373~hmac=39e4662abf5192e3c3d0b13e96691788d8075dce4a43c63df9e16ac093ebfe7d"
            alt="..."
          />
        </div>
      </div>
    </div>

    <div style={contentStyle}>
      <div className="flex justify-around ">
        <div className="flex flex-col justify-center items-center ">
        <h2 className="font-extrabold text-3xl max-w-[60%]">
            Embrace the joy of discovery with every click, and let your style
            shine!
          </h2>
          <p className="max-w-[54%]">
            Uncover hidden gems and express your unique personality through our
            curated collection of must-have items.
          </p>
        </div>
        <div>
          <img
            style={imageStyle} 
            src="https://img.freepik.com/free-photo/photocomposition-horizontal-online-shopping-banner_23-2151201763.jpg?w=1060&t=st=1708410539~exp=1708411139~hmac=19761f9eb2acd5ae7cc3047258dc9f507d4c21a017d91d86c3fd97e2cfe6bd1b"
            alt="..."
          />
        </div>
      </div>
    </div>

    <div style={contentStyle}>
      <div className="flex justify-around ">
        <div className="flex flex-col justify-center items-center ">
        <h2 className="font-extrabold text-3xl max-w-[60%]">
            Discover a world of endless possibilities right at your fingertips!
          </h2>
          <p className="max-w-[54%]">
            Get ready to explore our vast selection of products and unlock new
            adventures in shopping excellence.
          </p>
        </div>
        <div>
          <img
            style={imageStyle} 
            src="https://img.freepik.com/free-photo/digital-wardrobe-transparent-screen_53876-105380.jpg?w=900&t=st=1708410766~exp=1708411366~hmac=319aadd478659ab0650108066790cf593a8baacc08611cbead02c71536aac9d6"
            alt="..."
          />
        </div>
      </div>
    </div>
  </Carousel>
);

export default Slider;
