import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import React, { useState } from "react";
import Main from "./components/pages/main";
import { About } from "./components/pages/about";
import { Games } from "./components/pages/games";
// import { Contact } from "./components/pages/contact";
import { Menu } from "./components/pages/menu";
import { VipRoom } from "./components/pages/vip";
import OuterSpace from "./components/outerSpace";

function App() {
  const [language, setLanguage] = useState("English");

  return (
    <Router>
      <Background>
        <OuterSpace />
        {/* <div className="crt"></div> */}
        <Content>
          <LanguageContainer>
            <LanguageText onClick={() => setLanguage("English")}>
              EN
            </LanguageText>{" "}
            /{" "}
            <LanguageText onClick={() => setLanguage("Albanian")}>
              AL
            </LanguageText>
          </LanguageContainer>
          <LanguageContext.Provider value={language}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={About} />
              <Route path="/games" component={Games} />
              <Route path="/vip-room" component={VipRoom} />
              {/* <Route path="/contact" component={Contact} /> */}
              <Route path="/menu" component={Menu} />
            </Switch>
          </LanguageContext.Provider>
        </Content>
      </Background>
    </Router>
  );
}

export default App;

const Background = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  align-items: center;
  overflow: auto;
`;

const LanguageContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 15px;
  padding-right: 40px;
  font-size: 1.25rem;
  color: white;
  grid-area: title;
  font-family: retro_computer_personal_use;
  animation: textShadow 7.6s infinite;
`;

const LanguageText = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const LanguageContext = React.createContext();
