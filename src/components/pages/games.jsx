import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import PageHeader from "./pageHeader";
import xboxLogo from "../../imgs/Xbox.png";
import psLogo from "../../imgs/playstation.png";
import switchLogo from "../../imgs/switch.png";
import chessLogo from "../../imgs/knight.png";
import { ContentPage } from "../../utils/shared";
import { LanguageContext } from "../../App";

export const Games = () => {
  const [dimensions, setDimensions] = useState({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
  });

  const language = useContext(LanguageContext);

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
    <Justify>
      <GamesPage>
        <PageHeader title={language === "English" ? "Games" : "Lojëra"} />
        {language === "English" ? (
          <GamesContainer style={TileStyle}>
            <Xbox>
              <XBLogo src={xboxLogo} />
              <Border data-augmented-ui="tl-clip br-clip both">
                <Description>
                  Enjoy hundreds of titles provided by Xbox Gamepass and EA
                  Play. Whether it's taking down the Covenant again as 117,
                  fighting back waves of the horde with your friends, or landing
                  the sweet goal in Fifa, the choice is yours!
                </Description>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.xbox.com/en-US/xbox-game-pass/games"
                  style={{
                    textDecoration: "none",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <XBButton>View Gamepass Games</XBButton>
                </a>
              </Border>
            </Xbox>
            <Playstation>
              <PSLogo src={psLogo} />
              <Border data-augmented-ui="tl-clip br-clip both">
                <Description>
                  Fancy yourself more of a PlayStation fan? No Problem! WIth
                  both the PlayStation Plus Collection and PlayStation Now, you
                  will be able to play hundreds of games spanning across all
                  generations of PlayStation. The choice is yours!
                </Description>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.playstation.com/en-us/ps-now/ps-now-games/#all-ps-now-games"
                  style={{
                    textDecoration: "none",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <PSButton>View PS Now Games</PSButton>
                </a>
              </Border>
            </Playstation>
            <Switch>
              <Logo src={switchLogo} />
              <Border data-augmented-ui="tl-clip br-clip both">
                <Description>
                  Want to race your friends while dodging red shells in Mario
                  Cart? How about testing your Pokemon trainer skills by going
                  up against the Elite 4 or helping Link rescue Zelda once
                  again? With our in-house Switch, you can do all this and more!
                </Description>
              </Border>
            </Switch>
            <Board>
              <BoardLogo src={chessLogo} />
              <Border data-augmented-ui="tl-clip br-clip both">
                <Description>
                  Want to a more physical gaming experience? Try a hand at one
                  of our board or card games. Whether its the epics adventures
                  of Dungeons and Dragons, the exhilirating combat of Yu-Gi-Oh,
                  or even the brutal hilarity of Cards Against Humanity, all
                  games are fair game!
                </Description>
              </Border>
            </Board>
          </GamesContainer>
        ) : (
          <GamesContainer style={TileStyle}>
            <Xbox>
              <XBLogo src={xboxLogo} />
              <Border data-augmented-ui="tl-clip br-clip both">
                <Description>
                  hijoni qindra tituj të ofruar nga Xbox Gamepass dhe EA Luaj.
                  Nëse po heq përsëri Besëlidhjen si 117, duke luftuar valët e
                  një luzme me miqtë tuaj, ose ulje goli i ëmbël në FIFA,
                  zgjedhja është e juaja!
                </Description>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.xbox.com/en-US/xbox-game-pass/games"
                  style={{
                    textDecoration: "none",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <XBButton>View Gamepass Games</XBButton>
                </a>
              </Border>
            </Xbox>
            <Playstation>
              <PSLogo src={psLogo} />
              <Border data-augmented-ui="tl-clip br-clip both">
                <Description>
                  Fancy yourself more of a PlayStation fan? No Problem! WIth
                  both the PlayStation Plus Collection and PlayStation Now, you
                  will be able to play hundreds of games spanning across all
                  generations of PlayStation. The choice is yours!
                </Description>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.playstation.com/en-us/ps-now/ps-now-games/#all-ps-now-games"
                  style={{
                    textDecoration: "none",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <PSButton>View PS Now Games</PSButton>
                </a>
              </Border>
            </Playstation>
            <Switch>
              <Logo src={switchLogo} />
              <Border data-augmented-ui="tl-clip br-clip both">
                <Description>
                  Want to race your friends while dodging red shells in Mario
                  Cart? How about testing your Pokemon trainer skills by going
                  up against the Elite 4 or helping Link rescue Zelda once
                  again? With our in-house Switch, you can do all this and more!
                </Description>
              </Border>
            </Switch>
            <Board>
              <BoardLogo src={chessLogo} />
              <Border data-augmented-ui="tl-clip br-clip both">
                <Description>
                  Want to a more physical gaming experience? Try a hand at one
                  of our board or card games. Whether its the epics adventures
                  of Dungeons and Dragons, the exhilirating combat of Yu-Gi-Oh,
                  or even the brutal hilarity of Cards Against Humanity, all
                  games are fair game!
                </Description>
              </Border>
            </Board>
          </GamesContainer>
        )}
      </GamesPage>
    </Justify>
  );
};

const Justify = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Border = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const GamesPage = styled(ContentPage)`
  // width: 75%;
`;

const GamesContainer = styled.div`
  display: grid;
`;

const System = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  max-width: 500px;
`;
const Button = styled.button`
  margin: 15px;
  height: 25px;
`;
const PSButton = styled(Button)`
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;
  color: #ffffff;
`;
const XBButton = styled(Button)`
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;
  color: #ffffff;
`;
const Logo = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;
`;
const XBLogo = styled(Logo)``;

const PSLogo = styled(Logo)``;
const BoardLogo = styled(Logo)`
  object-fit: fill;
  height: 100px;
  width: 100px;
  margin: 30px;
`;
const Description = styled.div``;
const Playstation = styled(System)``;
const Xbox = styled(System)``;
const Switch = styled(System)``;
const Board = styled(System)``;

const TileStyleMax = {
  gridTemplateAreas: `'xbox playstation' 'switch board'`,
  gridTemplateColumns: "1fr 1fr",
};

const TileStyleMin = {
  gridTemplateAreas: `'xbox' 'playstation' 'switch' 'board'`,
  gridTemplateColumns: "1fr",
};
