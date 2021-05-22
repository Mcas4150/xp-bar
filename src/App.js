import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Main from "./components/pages/main";
import { About } from "./components/pages/about";
import { Games } from "./components/pages/games";
import Contact from "./components/pages/contact";
import { Menu } from "./components/pages/menu";
import VipRoom from "./components/pages/vip";
import OuterSpace from "./components/outerSpace";

function App() {
  return (
    <Router>
      <Background>
        <OuterSpace />
        <div className="crt"></div>
        <Content>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/games" component={Games} />
            <Route path="/vip-room" component={VipRoom} />
            <Route path="/contact" component={Contact} />
            <Route path="/menu" component={Menu} />
          </Switch>
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
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  align-items: center;
  overflow: auto;
`;
