import logo from "./logo.svg";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Menu from "./components/menu";
import About from "./components/pages/about"
import OuterSpace from "./components/outerSpace";

function App() {
  return (
    <Router>
      <div className="background">
        <OuterSpace />
        <div className="crt"></div>
        <Content>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/about" component={About} />
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

export default App;

const Content = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;
