import React, { useState, useEffect } from "react";
import PageHeader from "./pageHeader";
import styled from "@emotion/styled";
import { ContentPage } from "../../utils/shared";

export const About = () => {
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
    <AboutPage style={TileStyle}>
      <PageHeader title="About Us" />

      <AboutContainer data-augmented-ui="tl-clip br-clip both">
        <p>
          XP Gaming Bar is a video game themed bar founded by gamers for gamers.
          Here you can enjoy high quality cocktails and comfort food while
          playing the latest video games and board games with your friends
        </p>
        <p>
          Whether it's taking down the covenant on the Xbox Series X, swinging
          through NYC as Spiderman on the PS5, racing your friends in Mario Cart
          on the Nintendo Switch, or having a quick duel against your friends to
          show them who's the true king of games is, there is something for
          every gamer at XP Gaming Bar! #LevelUp!
        </p>
      </AboutContainer>
    </AboutPage>
  );
};

const AboutPage = styled(ContentPage)``;

const AboutContainer = styled.div`
  padding: 25px;
`;

const TileStyleMax = {
  width: "500px",
};

const TileStyleMin = {
  width: "80%",
};
