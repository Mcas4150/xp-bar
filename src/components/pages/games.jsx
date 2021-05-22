import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PageHeader from "./pageHeader";
import xboxLogo from "../../imgs/Xbox.png";
import psLogo from "../../imgs/playstation.png";
import switchLogo from "../../imgs/switch.png";
import chessLogo from "../../imgs/chess.png";
import { ContentPage } from "../../utils/shared";

export const Games = () => {
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
    <GamesPage>
      <PageHeader />
      <GamesContainer style={TileStyle}>
        <Xbox>
          <XBLogo src={xboxLogo} />
          <div>
            <Description>
              Enjoy hundreds of titles provided by Xbox Gamepass and EA Play.
              Whether it's taking down the Covenant again as 117, fighting back
              waves of the horde with your friends, or landing the sweet goal in
              Fifa, the choice is yours!
            </Description>
            <XBButton>View Gamepass Games</XBButton>
          </div>
        </Xbox>
        <Playstation>
          <PSLogo src={psLogo} />
          <Description>
            Fancy yourself more of a PlayStation fan? No Problem! WIth both the
            PlayStation Plus Coollection and PlayStation Now, you will be able
            to play hundreds of games spanning across all generations of
            PlayStation. The choice is yours!
          </Description>
          <PSButton>View PS Now Games</PSButton>
        </Playstation>
        <Switch>
          <Logo src={switchLogo} />
          <Description>
            Want to race your friends while dodging red shells in Mario Cart?
            How about testing your Pokemon trainer skills by going up against
            the Elite 4 or helping Link rescue Zelda once again? With our
            in-house Switch, you can do all this and more!
          </Description>
        </Switch>
        <Board>
          <BoardLogo src={chessLogo} />
          <Description>
            Want to a more physical gaming experience? Try a hand at
          </Description>
        </Board>
      </GamesContainer>
    </GamesPage>
  );
};

const GamesPage = styled(ContentPage)``;

const GamesContainer = styled.div`
  width: 75%;
  display: grid;
`;

const System = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;
const Button = styled.button``;
const PSButton = styled(Button)`
  background-color: blue;
`;
const XBButton = styled(Button)`
  background-color: green;
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
