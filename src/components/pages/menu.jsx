import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import PageHeader from "./pageHeader";
import { ContentPage } from "../../utils/shared";
import { LanguageContext } from "../../App";

export const Menu = () => {
  const [dimensions, setDimensions] = useState({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
  });

  const language = useContext(LanguageContext);

  let TileStyle;
  // dimensions.width <= 800 || dimensions.height <= 600
  //   ? TileStyleMin
  //   : TileStyleMax;
  if (dimensions.width >= 1300) {
    TileStyle = TileStyleMax;
  } else if (800 < dimensions.width && dimensions.width < 1300) {
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

  return (
    <MenuPage>
      <PageHeader title={language === "English" ? "Menu" : "Menu"} />
      <MenuContainer>
        {language === "English" ? (
          <div data-augmented-ui="tl-clip br-clip both">
            <Tables style={TileStyle}>
              <Food>
                <THeader>Side Quests</THeader>
                <TList>
                  <TItem>
                    <Info>
                      <Name>Mozzarella Sticks</Name>
                    </Info>
                    <Price>490</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>Onion Rings</Name>
                    </Info>
                    <Price>390</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>French Fries</Name>
                    </Info>
                    <Price>300</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>Chicken Fingers</Name>
                    </Info>
                    <Price>450</Price>
                  </TItem>
                </TList>
                <MainQuests>
                  <THeader>Main Quests</THeader>
                  <TList>
                    <TItem>
                      <Info>
                        <Name>Cheeseburger</Name>
                      </Info>
                      <Price>580</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>BBQ Cheeseburger</Name>
                      </Info>
                      <Price>680</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Breakfast Burger</Name>
                      </Info>
                      <Price>680</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Chicken Burger</Name>
                      </Info>
                      <Price>580</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Midnight Burger</Name>
                      </Info>
                      <Price>750</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Double Cheeseburger</Name>
                      </Info>
                      <Price>750</Price>
                    </TItem>
                  </TList>
                </MainQuests>
                <Beers>
                  <THeader>Beers</THeader>
                  <TList>
                    <TItem>
                      <Info>
                        <Name>Mana Beer</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Potion Beer</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Coca Cola</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Fanta</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Red Bull</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Soda Water</Name>
                      </Info>
                      <Price>100</Price>
                    </TItem>
                  </TList>
                </Beers>
              </Food>
              <Drinks>
                <THeader>Cocktails</THeader>
                <TList>
                  <TItem>
                    <Info>
                      <Name>Electric Rat</Name>
                      <Description>Vodka, Orange Juice, Galliano</Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Pink Hero</Name>
                      <Description>
                        Spicy rum, lime, Strawberry Puree, Coconut Water
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Warrior</Name>
                      <Description>
                        Gin, green apply syrup, eden flower, pineapple juice,
                        lemon
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Portal</Name>
                      <Description>
                        Gin, grapefruit liquor, lemon, simple syrup, soda
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Princess</Name>
                      <Description>
                        Whiskey, red vermouth, peach puree, lemon juice, ginger
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Wasteland</Name>
                      <Description>
                        Vodka, apple juice, grenadine, passion fruit puree, lime
                        juice, mint
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Take Your Heart</Name>
                      <Description>
                        Vodka, gin, triple sec, black pushkini, lime
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>117</Name>
                      <Description>Midori, gin, apple juice, lime</Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Covenant</Name>
                      <Description>
                        Blue Curacao, Gin, grenadine, lime, ginger ale
                      </Description>
                    </Info>
                    <Price>800</Price>
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
                    <Price>950</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Empress</Name>
                      <Description>
                        Vodka, bubble gum, lemon juice, grapefruit soda
                      </Description>
                    </Info>
                    <Price>950</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Protector</Name>
                      <Description>
                        Empress gin, lime, cointerau, yellow grapefruit juice
                      </Description>
                    </Info>
                    <Price>950</Price>
                  </TItem>
                </TList>
              </Drinks>

              <LegendaryDrinks>
                <THeader>Legendary Cocktails</THeader>
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
                      <Name>Pandora</Name>
                      <Description>
                        Green Apple Juice, Eden Flower Syrup, Pineapple Juice,
                        Lemon Juice
                      </Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>Sunshine</Name>
                      <Description>
                        Orange Juice, Pineapple Juice, Lemon Juice, Ginger Ale
                      </Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>Golden</Name>
                      <Description>
                        Passion Fruit, Pineapple Juice, Lemon Juice, Orange
                        Juice, Almond Syrup
                      </Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>

                  <TItem>
                    <Info>
                      <Name>Sakura</Name>
                      <Description>
                        Passion Fruit Puree, Rose Syrup, Pineapple Juice, Lemon
                        Juice, Orange Juice
                      </Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>

                  <TItem>
                    <Info>
                      <Name>Inquisitor</Name>
                      <Description>
                        Grenadine, Ginger Ale, Lime Juice, Red Bitter
                      </Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>

                  <TItem>
                    <Info>
                      <Name>Siren</Name>
                      <Description>
                        Ginger Beer, Violet Syrup, Lime Juice, Cranberry Juice
                      </Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>
                </TList>
              </Mocktails>
            </Tables>
          </div>
        ) : (
          <div data-augmented-ui="tl-clip br-clip both">
            <Tables style={TileStyle}>
              <Food>
                <THeader>Albanian</THeader>
                <TList>
                  <TItem>
                    <Info>
                      <Name>Mozzarella Sticks</Name>
                    </Info>
                    <Price>490</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>Onion Rings</Name>
                    </Info>
                    <Price>390</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>French Fries</Name>
                    </Info>
                    <Price>300</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>Chicken Fingers</Name>
                    </Info>
                    <Price>450</Price>
                  </TItem>
                </TList>
                <MainQuests>
                  <THeader>Main Quests</THeader>
                  <TList>
                    <TItem>
                      <Info>
                        <Name>Cheeseburger</Name>
                      </Info>
                      <Price>580</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>BBQ Cheeseburger</Name>
                      </Info>
                      <Price>680</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Breakfast Burger</Name>
                      </Info>
                      <Price>680</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Chicken Burger</Name>
                      </Info>
                      <Price>580</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Midnight Burger</Name>
                      </Info>
                      <Price>750</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Double Cheeseburger</Name>
                      </Info>
                      <Price>750</Price>
                    </TItem>
                  </TList>
                </MainQuests>
                <Beers>
                  <THeader>Beers</THeader>
                  <TList>
                    <TItem>
                      <Info>
                        <Name>Mana Beer</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Potion Beer</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Coca Cola</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Fanta</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Red Bull</Name>
                      </Info>
                      <Price>500</Price>
                    </TItem>
                    <TItem>
                      <Info>
                        <Name>Soda Water</Name>
                      </Info>
                      <Price>100</Price>
                    </TItem>
                  </TList>
                </Beers>
              </Food>
              <Drinks>
                <THeader>Cocktails</THeader>
                <TList>
                  <TItem>
                    <Info>
                      <Name>Electric Rat</Name>
                      <Description>Vodka, Orange Juice, Galliano</Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Pink Hero</Name>
                      <Description>
                        Spicy rum, lime, Strawberry Puree, Coconut Water
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Warrior</Name>
                      <Description>
                        Gin, green apply syrup, eden flower, pineapple juice,
                        lemon
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Portal</Name>
                      <Description>
                        Gin, grapefruit liquor, lemon, simple syrup, soda
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Princess</Name>
                      <Description>
                        Whiskey, red vermouth, peach puree, lemon juice, ginger
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Wasteland</Name>
                      <Description>
                        Vodka, apple juice, grenadine, passion fruit puree, lime
                        juice, mint
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Take Your Heart</Name>
                      <Description>
                        Vodka, gin, triple sec, black pushkini, lime
                      </Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>117</Name>
                      <Description>Midori, gin, apple juice, lime</Description>
                    </Info>
                    <Price>800</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Covenant</Name>
                      <Description>
                        Blue Curacao, Gin, grenadine, lime, ginger ale
                      </Description>
                    </Info>
                    <Price>800</Price>
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
                    <Price>950</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Empress</Name>
                      <Description>
                        Vodka, bubble gum, lemon juice, grapefruit soda
                      </Description>
                    </Info>
                    <Price>950</Price>
                  </TItem>
                  <TItem>
                    {" "}
                    <Info>
                      <Name>Protector</Name>
                      <Description>
                        Empress gin, lime, cointerau, yellow grapefruit juice
                      </Description>
                    </Info>
                    <Price>950</Price>
                  </TItem>
                </TList>
              </Drinks>
              <LegendaryDrinks>
                <THeader>Legendary Cocktails</THeader>
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
                      <Name>Pandora</Name>
                      <Description>
                        Pineapple Juice, Orange Juice, Lemon Juice, a dash of
                        almond syrup, and topped with soda.
                      </Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>Sunshine</Name>
                      <Description>Lorum Ipsum</Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>
                  <TItem>
                    <Info>
                      <Name>Golden</Name>
                      <Description>
                        For when you are feeling like a star!{" "}
                      </Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>

                  <TItem>
                    <Info>
                      <Name>Sakura</Name>
                      <Description>Lorum Ipsum</Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>

                  <TItem>
                    <Info>
                      <Name>Inquisitor</Name>
                      <Description>Lorum Ipsum</Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>

                  <TItem>
                    <Info>
                      <Name>Siren</Name>
                      <Description>Lorum Ipsum</Description>
                    </Info>
                    <Price>680</Price>
                  </TItem>
                </TList>
              </Mocktails>
            </Tables>
          </div>
        )}
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
  grid-auto-flow: row;
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

const MainQuests = styled.div`
  grid-area: mainQuests;
  margin-top: 15px;
`;

const Beers = styled.div`
  margin-top: 15px;
  grid-area: beers;
`;

const LegendaryDrinks = styled(Table)`
  grid-area: legdrinks;
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
  gridTemplateAreas: `'food drinks legdrinks'
                      'food drinks mocktails'
                      `,

  gridTemplateColumns: "1fr 1fr 1fr ",
};

const TileStyleMid = {
  // maxWidth: "800px",
  gridTemplateAreas: `'food drinks' 'legdrinks mocktails'`,
  gridTemplateColumns: "1fr 1fr",
};

const TileStyleMin = {
  gridTemplateAreas: `'food' 'drinks' 'legdrinks' 'mocktails'`,
  gridTemplateColumns: "1fr",
};
