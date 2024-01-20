import React from 'react'
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: pink;
  position: relative; 
  overflow: hidden;
`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.90;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
`;


const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const Img = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
height: 100%;
width: 100%;/* Add this line to make sure the image takes the full width */
object-fit: cover;
`;

const Info = styled.div`
   flex: 1;
   padding: 50px;
`;
const Title = styled.h1`
   font-size: 70px;
   
`;
const Description = styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
`;
const Button = styled.button`
   font-size: 20px;
   padding: 10px;
   background-color: transparent;
   cursor: pointer;
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
    <Arrow direction="left" onClick={() => handleClick("left")}>
    <ArrowLeftOutlined />
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <Img>
              <Image src={item.img} />
            </Img>
            <Info>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOW NOW</Button>
            </Info>
          </Slide>
        ))}
      </Wrapper>
    
    <Arrow direction="right" onClick={() => handleClick("right")}>
    <ArrowRightOutlined /> 
    </Arrow>
  </Container>
  )
}

export default Slider
