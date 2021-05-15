import logo from "./logo.svg";
import styled from "@emotion/styled";
import "./App.css";

import Menu from "./components/menu";
import OuterSpace from "./components/outerSpace";

function App() {
  return (
    <div className="background">
      <OuterSpace />
      <div className="crt"></div>
      <Content>
        <Menu />
      </Content>
    </div>
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
