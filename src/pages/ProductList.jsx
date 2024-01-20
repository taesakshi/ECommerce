import styled from "styled-components";
import Navbar from "../components/Navbar";

import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Title = styled.h1`

margin: 20px;


`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 3px;
  margin-right: 20px;
  background-color: rgb(253, 219, 225);
  
  font-weight: 600;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
background-color: rgb(220, 139, 154);
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
