import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar";

import { mobile } from "../responsive";
import { useNavigate } from 'react-router-dom'; 
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";
import { Add, Remove } from '@material-ui/icons';
import { useState } from 'react';  // Import useState


const Container = styled.div`

`;
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection:"column" })}
`;
const ImgCont = styled.div`
flex:1.2;
padding: 0px 0px;
`;
const Img = styled.img`
width: 100%;
  height: 90vh;
object-fit: cover;
${mobile({ height: "40vh" })}
`;
const InfoCon = styled.div`
flex:1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`;
const Title1 = styled.h1`
font-weight: 800;
font-size: 38px;
color: rgb(74, 10, 43);
`;
const Title2 = styled.p`
font-weight: 1000;
font-size: 32px;
color: gray;
`;
const Desc= styled.p`
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 200;
`;
const Price = styled.span`
font-weight: 400;
font-size: 50px;
color: rgb(74, 10, 43);
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid rgb(175, 65, 117);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid rgb(175, 65, 117);
  background-color: rgb(243, 218, 222);
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: rgb(175, 65, 117);
  }
`;


const Product = () => {
    const navigate = useNavigate();  // Initialize useNavigate
  
    // State for the quantity
    const [quantity, setQuantity] = useState(1);
  
    // Function to handle the click on "ADD TO CART"
    const handleAddToCart = () => {
      // Navigate to the cart page
      navigate('/cart');
    };
  
    // Function to handle the click on "Add" icon
    const handleAdd = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    // Function to handle the click on "Remove" icon
    const handleRemove = () => {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };
  
    return (
      <Container>
        <Navbar />
        <Announcements />
        <Wrapper>
          <ImgCont>
            <Img src="https://i.pinimg.com/564x/71/b7/7c/71b77c82806846ae9102a7d5908f8921.jpg" />
          </ImgCont>
          <InfoCon>
            <Title1>Anouk</Title1>
            <Title2> Buy Multi Color Raw Silk; Blazer Lining: Double Breasted Jacket And Pant Set For Women</Title2>
            <Desc>All you beautiful Brides to-be!! Check out this new silhouette which would look trendy, Chic and Gorgeous. A Brocade sharara like such would be an apt choice for your intimate wedding!!</Desc>
            <Price>
              ₹2099(65% OFF)
            </Price>
            <FilterContainer>
              <Filter>
                <FilterTitle> Colors </FilterTitle>
                <FilterColor color="Teal" />
                <FilterColor color="rgb(74, 10, 43);" />
                <FilterColor color="grey" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove cursor="pointer" onClick={handleRemove}/>
                <Amount>1</Amount>
                <Add cursor="pointer" onClick={handleAdd} />
              </AmountContainer>
              <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </AddContainer>
          </InfoCon>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    );
  };
  
  export default Product;