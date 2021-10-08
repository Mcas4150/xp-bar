import React, { useState, useEffect, useContext } from "react";
import PageHeader from "./pageHeader";
import styled from "@emotion/styled";
import { ContentPage } from "../../utils/shared";
import { LanguageContext } from "../../App";

export const VipRoom = () => {
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
      <VIPPage style={TileStyle}>
        <PageHeader title={language === "English" ? "VIP Room" : "Dhoma VIP"} />
        {language === "English" ? (
          <VIPContainer data-augmented-ui="tl-clip br-clip both">
            <p>
              Looking for an out of this world gaming experience? Then book a
              reservation in our VIP Room where you and your friends can immerse
              yourselves in one of the most epic gaming environments there is
              while having exclusive acces to our PS5 console!
            </p>
            <p>
              Want to take down Dr. Nefarious once again as Rachet and Clank?
              How about fighting off a horde of werewolves and vampries in
              Resident Evil? Maybe even swinging through NYC in Spiderman or
              stealing some hearts in Persona 5 Royal? These games and many more
              are waiting for you in our VIP Room! Use the contact form below to
              make your reservation today! #VIPRoom #NextLevelGaming
            </p>
          </VIPContainer>
        ) : (
          <VIPContainer data-augmented-ui="tl-clip br-clip both">
            <p>
              Po kërkoni një eksperiencë lojrash jashtë kësaj bote? Pastaj
              rezervoni një rezervim në Dhomën tonë VIP ku mund të zhyteni ju
              dhe miqtë tuaj veten në një nga mjediset më epike të lojërave që
              ekziston ndërsa keni qasje ekskluzive në tastierën tonë PS5!
            </p>
            <p>
              Dëshironi të rrëzoni Dr. Nefarious edhe një herë si Rachet and
              Clank? Po sikur të luftosh një turmë ujqërish dhe vampirësh
              Resident Evil? Ndoshta edhe duke kaluar nëpër NYC në Spiderman ose
              duke vjedhur disa zemra në Persona 5 Royal? Këto lojëra dhe shumë
              më tepër ju presim në dhomën tonë VIP! Përdorni formularin e
              kontaktit më poshtë për të bëni rezervimin tuaj sot! #VIPRoom
              #Lojrat e ardhshmeNiveli
            </p>
          </VIPContainer>
        )}
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
