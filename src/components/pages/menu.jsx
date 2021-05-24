import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PageHeader from "./pageHeader";
import { ContentPage } from "../../utils/shared";

export const Menu = () => {
  const [dimensions, setDimensions] = useState({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
  });

  let TileStyle =
    dimensions.width <= 800 || dimensions.height <= 600
      ? TileStyleMin
      : TileStyleMax;

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <MenuPage >
      <PageHeader title="menu"/>
      <MenuContainer>
        <div data-augmented-ui="tl-clip br-clip both">
          <Tables style={TileStyle}>
            <Food>
              <THeader>Food</THeader>
              <TList>
                <TItem>
                  <Info>
                    <Name>Mozzarella Sticks</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Onion Rings</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>French Fries</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Chicken Fingers</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Chicken Quesadilla</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Cheese Quesadilla</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Cheeseburger</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>BBQ Cheeseburger</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Breakfast Burger</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Chicken Burger</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Midnight Burger</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Double Cheeseburger</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
              </TList>
            </Food>
            <Drinks>
              <THeader>Drinks</THeader>
              <TList>
                <TItem>
                  <Info>
                    <Name>Mana Beer</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Potion Beer</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Take Your Heart</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Sheogorath</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Electric Rat</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>117</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Covenant</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Princess</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Frag Grenade</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Protector</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Hunter</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Rainbow Cocktail</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Radiation</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Pandora</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Cosmopolitan</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Mohito</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
              </TList>
            </Drinks>
          </Tables>
        </div>
      </MenuContainer>
    </MenuPage>
  );
};

const MenuPage = styled(ContentPage)``;

const MenuContainer = styled.div`
  width: 75vw;
`;

const Tables = styled.div`
  display: grid;
`;
const Table = styled.div`
  padding: 15px;
`;

const Food = styled(Table)`
  grid-area: food;
`;

const Drinks = styled(Table)`
  grid-area: drinks;
`;

const THeader = styled.div`
  font-size: 2rem;
  font-family: retro_computer_personal_use;
  animation: textShadow 7.6s infinite;
`;
const TList = styled.div``;
const TItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;
const Info = styled.div``;
const Name = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;
const Price = styled.div``;
const Description = styled.div`
  font-size: 0.85rem;
`;

const TileStyleMax = {
  gridTemplateAreas: `'food drinks'`,
  gridTemplateColumns: "1fr 1fr",
};

const TileStyleMin = {
  gridTemplateAreas: `'food' 'drinks'`,
  gridTemplateColumns: "1fr",
};
