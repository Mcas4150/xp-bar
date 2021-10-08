import React, { useState, useEffect, useContext } from "react";
import PageHeader from "./pageHeader";
import styled from "@emotion/styled";
import ted from "../../imgs/ted.png";
import ester from "../../imgs/ester.png";
import { ContentPage } from "../../utils/shared";
import { LanguageContext } from "../../App";

export const About = () => {
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
      <AboutPage style={TileStyle}>
        <PageHeader
          title={language === "English" ? "About Us" : "Rreth Nesh"}
        />
        <AvatarContainer>
          <Avatar>
            <Image src={ted}></Image>
            <Name></Name>
            <Class></Class>
          </Avatar>
          <Avatar>
            <Image src={ester}></Image>
            <Name></Name>
            <Class></Class>
          </Avatar>
        </AvatarContainer>
        {language === "English" ? (
          <AboutContainer data-augmented-ui="tl-clip br-clip both">
            <p>
              XP Gaming Bar is a video game themed bar founded by gamers for
              gamers. Here you can enjoy high quality cocktails and comfort food
              while playing the latest video games and board games with your
              friends
            </p>
            <p>
              Whether it's taking down the covenant on the Xbox Series X,
              swinging through NYC as Spiderman on the PS5, racing your friends
              in Mario Cart on the Nintendo Switch, or having a quick duel
              against your friends to show them who's the true king of games is,
              there is something for every gamer at XP Gaming Bar! #LevelUp!
            </p>
          </AboutContainer>
        ) : (
          <AboutContainer data-augmented-ui="tl-clip br-clip both">
            <p>
              XP Gaming Bar është një bar me temë lojërash video i themeluar nga
              lojtarët për lojtarë Këtu mund të shijoni kokteje me cilësi të
              lartë dhe ushqim komod ndërsa luani lojërat më të fundit video dhe
              lojërat në bord me tuajin miq
            </p>
            <p>
              Nëse po heq besëlidhjen në Xbox Series X, duke kaluar nëpër NYC si
              Spiderman në PS5, duke garuar me miqtë tuaj në Mario Cart në
              Nintendo Switch, ose të kesh një duel të shpejtë kundër miqve tuaj
              për t'u treguar atyre se kush është mbreti i vërtetë i lojërave,
              ka diçka për çdo lojtar në XP Gaming Bar! #NiveliUp!
            </p>
          </AboutContainer>
        )}
      </AboutPage>
    </Justify>
  );
};

const Justify = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Avatar = styled.div``;

const Name = styled.div``;

const Image = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;
  margin: 15px;
`;

const Class = styled.div``;
