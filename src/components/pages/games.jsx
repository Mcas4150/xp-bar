import React, { Component } from "react";
import styled from "@emotion/styled";
import PageHeader from "./pageHeader";
import xboxLogo from "../../imgs/Xbox.png";
import psLogo from "../../imgs/playstation.png";

export default class Games extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <GamesContainer>
          <Xbox>
            <XBLogo />
            <Description>
              Enjoy hundreds of titles provided by Xbox Gamepass and EA Play.
              Whether it's taking down the Covenant again as 117, fighting back
              waves of the horde with your friends, or landing the sweet goal in
              Fifa, the choice is yours!
            </Description>
            <XBButton>View Gamepass Games</XBButton>
          </Xbox>
          <Playstation>
            <PSLogo />
            <Description>
              Fancy yourself more of a PlayStation fan? No Problem! WIth both
              the PlayStation Plus Coollection and PlayStation Now, you will be
              able to play hundreds of games spanning across all generations of
              PlayStation. The choice is yours!
            </Description>
            <PSButton>View PS Now Games</PSButton>
          </Playstation>
          <Switch>
            <Logo></Logo>
            <Description>
              Want to race your friends while dodging red shells in Mario Cart?
              How about testing your Pokemon trainer skills by going up against
              the Elite 4 or helping Link rescue Zelda once again? With our
              in-house Switch, you can do all this and more!
            </Description>
          </Switch>
          <Board>
            <Logo></Logo>
            <Description>
              Want to a more physical gaming experience? Try a hand at
            </Description>
          </Board>
        </GamesContainer>
      </div>
    );
  }
}

const GamesContainer = styled.div`
  display: grid;
  grid-template-areas: "xbox playstation" "switch board";
  grid-template-columns: "1fr 1fr";
`;

const System = styled.div``;
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
const XBLogo = styled(Logo)`
  background-image: url(${xboxLogo});
`;

const PSLogo = styled(Logo)`
  background-image: url(${psLogo});
`;
const Description = styled.div``;
const Playstation = styled(System)``;
const Xbox = styled(System)``;
const Switch = styled(System)``;
const Board = styled(System)``;
