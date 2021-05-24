import React, { useState, useEffect } from "react";
import PageHeader from "./pageHeader";
import styled from "@emotion/styled";
import { ContentPage } from "../../utils/shared";

export const VipRoom = () => {
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
    <Justify>
      <VIPPage style={TileStyle}>
        <PageHeader title="VIP Room" />

        <VIPContainer data-augmented-ui="tl-clip br-clip both">
          <p>
            Looking for an out of this world gaming experience? Then book a
            reservation in our VIP Room where you and your friends can immerse
            yourselves in one of the most epic gaming environments there is
            while having exclusive acces to our PS5 console!
          </p>
          <p>
            Want to take down Dr. Nefarious once again as Rachet and Clank? How
            about fighting off a horde of werewolves and vampries in Resident
            Evil? Maybe even swinging through NYC in Spiderman or stealing some
            hearts in Persona 5 Royal? These games and many more are waiting for
            you in our VIP Room! Use the contact form below to make your
            reservation today! #VIPRoom #NextLevelGaming
          </p>
        </VIPContainer>
      </VIPPage>
    </Justify>
  );
};

const Justify = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const VIPPage = styled(ContentPage)``;

const VIPContainer = styled.div`
  padding: 25px;
`;

const TileStyleMax = {
  width: "500px",
};

const TileStyleMin = {
  width: "80%",
};
