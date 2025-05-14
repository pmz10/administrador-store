import styled from "styled-components";
import { GlobalStyles } from "./index";
import { Device } from "./Styles/breakpoints"

function App() {
  return (
    <Container>
      <GlobalStyles />
      <section className="contentSidebar">contentSidebar</section>
      <section className="contentMenuambur">contentMenuambur</section>
      <section className="contentRouters">contentRouters</section>
    </Container>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  .contentSidebar{
    display: none;
    background-color:rgba(94, 78, 233, 0.5);
  }
  .contentMenuambur{
    position: absolute;
    background-color:rgba(218, 78, 118, 0.5);
  }
  .contentRouters{
    background-color:rgba(80, 233, 138, 0.5);
  }
  @media ${Device.tablet}{
    grid-template-columns: 88px 1fr;
    .contentSidebar{
      display: initial;
    }
    .contentMenuambur{
    display: none;
  }
  }
`;

export default App;

