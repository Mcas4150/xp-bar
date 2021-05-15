import React, { Component } from "react";
import styled from "@emotion/styled";
import PageHeader from "./pageHeader";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <MenuContainer>
          <MenuBorder>
            <Tables>
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
          </MenuBorder>
        </MenuContainer>
      </div>
    );
  }
}

const MenuContainer = styled.div`
  width: 75vw;
`;

const MenuBorder = styled.div`
  border: 3px dotted white;
  padding: 25px;
`;

const Tables = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-areas: "food drinks";
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
  font-size: 1rem;
`;
const Price = styled.div``;
const Description = styled.div`
  font-size: 0.85rem;
`;
