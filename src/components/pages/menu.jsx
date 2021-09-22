import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PageHeader from "./pageHeader";
import { ContentPage } from "../../utils/shared";

export const Menu = () => {
  const [dimensions, setDimensions] = useState({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
  });

  let TileStyle;
  // dimensions.width <= 800 || dimensions.height <= 600
  //   ? TileStyleMin
  //   : TileStyleMax;
  if (dimensions.width > 1300) {
    TileStyle = TileStyleMax;
  } else if (1300 > dimensions.width > 800) {
    TileStyle = TileStyleMid;
  } else {
    TileStyle = TileStyleMin;
  }

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

  // find the number of hours in a year
  const hoursInYear = 365 * 24;

  return (
    <MenuPage>
      <PageHeader title="menu" />
      <MenuContainer>
        <div data-augmented-ui="tl-clip br-clip both">
          <Tables style={TileStyle}>
            <Food>
              <THeader>Side Quests</THeader>
              <TList>
                <TItem>
                  <Info>
                    <Name>Mozzarella Sticks</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Onion Rings</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>French Fries</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Chicken Fingers</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Chicken Quesadilla</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
              </TList>
              <THeader>Main Quests</THeader>
              <TList>
                <TItem>
                  <Info>
                    <Name>Cheeseburger</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>BBQ Cheeseburger</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Breakfast Burger</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Chicken Burger</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Midnight Burger</Name>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Double Cheeseburger</Name>
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
                    <Name>Pikachu</Name>
                    <Description>Vodka, Orange Juice, Galliano</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Potion Beer</Name>
                    <Description>
                      Spicy rum, lime, Strawberry Puree, Coconut Water
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Yakuza</Name>
                    <Description>
                      Rum, spicy rum, Aperol, grapefruit liquor, lime juice,
                      lemon juice, cinnamon syrup
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Zelda</Name>
                    <Description>
                      Gin, green apply syrup, eden flower, pineapple juice,
                      lemon
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Portal</Name>
                    <Description>
                      Gin, grapefruit liquor, lemon, simple syrup, soda
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Princess Peach</Name>
                    <Description>
                      Whiskey, red vermouth, peach puree, lemon juice, ginger
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Fallout</Name>
                    <Description>
                      Vodka, apple juice, grenadine, passion fruit puree, lime
                      juice, mint
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Take Your Heart</Name>
                    <Description>
                      Vodka, gin, triple sec, black pushkini, lime
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>117</Name>
                    <Description>Midori, gin, apple juice, lime</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Covenant</Name>
                    <Description>
                      Blue Curacao, Gin, grenadine, lime, ginger ale
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Empress</Name>
                    <Description>
                      Vodka, bubble gum, lemon juice, grapefruit soda
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
                <TItem>
                  {" "}
                  <Info>
                    <Name>Protector</Name>
                    <Description>
                      Empress gin, lime, cointerau, yellow grapefruit juice
                    </Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
              </TList>
            </Drinks>
            <LegendaryDrinks>
              <THeader>Legendary Drinks</THeader>
              <TList>
                {" "}
                <TItem>
                  <Info>
                    <Name>Pharaoh</Name>
                    <Description>
                      Brancamenta, Kahlua, raspberry cream, black rum
                    </Description>
                  </Info>
                  <Price>1200</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Nord Warrior</Name>
                    <Description>
                      Spicy rum, lime, coconut puree, coconut water
                    </Description>
                  </Info>
                  <Price>1200</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Master Trainer</Name>
                    <Description>
                      Vodka, fresh orange juice, galliano, aquafaba, Angostura
                      bitters
                    </Description>
                  </Info>
                  <Price>1200</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Vacation Juice</Name>
                    <Description>
                      Malibu coconut Rum, pineapple juice, grenadine, passion
                      fruit, lime juice
                    </Description>
                  </Info>
                  <Price>1200</Price>
                </TItem>
                <TItem>
                  <Info>
                    <Name>Radiation</Name>
                    <Description>
                      Midori, Vodka, Rum, Lime, Lemon Soda
                    </Description>
                  </Info>
                  <Price>1200</Price>
                </TItem>
              </TList>
            </LegendaryDrinks>
            <Mocktails>
              <THeader>Mocktails</THeader>
              <TList>
                <TItem>
                  <Info>
                    <Name>Mock1</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>

                <TItem>
                  <Info>
                    <Name>Mock2</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>

                <TItem>
                  <Info>
                    <Name>Mock3</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>

                <TItem>
                  <Info>
                    <Name>Mock4</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>

                <TItem>
                  <Info>
                    <Name>Mock5</Name>
                    <Description>Lorum Ipsum</Description>
                  </Info>
                  <Price>500</Price>
                </TItem>
              </TList>
            </Mocktails>
          </Tables>
        </div>
      </MenuContainer>
    </MenuPage>
  );
};

const MenuPage = styled(ContentPage)``;

const MenuContainer = styled.div`
  // width: 75vw;
`;

const Tables = styled.div`
  display: grid;
`;
const Table = styled.div`
  padding: 15px;
  max-width: 350px;
`;

const Food = styled(Table)`
  grid-area: food;
`;

const Drinks = styled(Table)`
  grid-area: drinks;
`;

const LegendaryDrinks = styled(Table)`
  grid-area: leg-drinks;
`;

const Mocktails = styled(Table)`
  grid-area: mocktails;
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
  maxHeight: "800px",
  maxWidth: "1100px",
  gridTemplateAreas: `'food drinks leg-drinks'
                      'food drinks mocktails'`,
  gridTemplateColumns: "1fr 1fr",
  // gridTemplateColumns: "1fr 1fr 1fr ",
  gridTemplateColumns: `repeat(auto-fill, minmax(350px, 1fr))`,
};

const TileStyleMid = {
  maxHeight: "800px",
  gridTemplateAreas: `'food drinks'`,
  gridTemplateColumns: "1fr 1fr",
};

const TileStyleMin = {
  gridTemplateAreas: `'food' 'drinks' 'leg-drinks'`,
  gridTemplateColumns: "1fr",
};
