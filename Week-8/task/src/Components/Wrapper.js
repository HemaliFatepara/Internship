import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "./Wrapper.css";
import { FaCar } from "react-icons/fa";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
import { ImHeadphones } from "react-icons/im";

const Wrapper = () => {
  const serviceData = [
    {
      icon: <FaCar />,
      title: "Free Shipping",
      subtitle: "Free shipping on all orders! Shop now.",
      bg: "#fdefe6",
    },
    {
      icon: <BsCreditCard2BackFill />,
      title: "Safe Payment",
      subtitle: "Secure checkout for worry-free shopping!",
      bg: "#ceebe9",
    },
    {
      icon: <GrSecure />,
      title: "Secure Payment",
      subtitle: "Shop confidently with our secure payment system!",
      bg: "#e2f2b2",
    },
    {
      icon: <ImHeadphones />,
      title: "Money-Back Guarantee",
      subtitle: "Shop worry-free with easy returns on all products!",
      bg: "#d6e5fb",
    },
  ];

  return (
    <div>
      <section className='wrapper background'>
        <Container>
          <Row>
            {serviceData.map((val, index) => {
              return (
                <Col md={3} sm={5} xs={9} style={{backgroundColor:val.bg}} className='feature' key={index}>
                  <div className='icon'>
                    {val.icon}
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.subtitle}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Wrapper;
