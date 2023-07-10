import "./App.css";
import { Throggling } from "./DebouncingAndThroggtling/Throggling";
import { CssFlex3 } from "./CSSFlexAndGrid/CssFlex3";
import { CssFlex1 } from "./CSSFlexAndGrid/CssFlex1";
import { CssFlex2 } from "./CSSFlexAndGrid/CssFlex2";
import { Debouncing } from "./DebouncingAndThroggtling/Debouncing";
import { GridCSS } from "./Grid/Grid";
import { RegistrationNormal } from "./RegistrationPage/RegistrationNormal";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import { PromiseAll } from "./PromiseAll";
import { Transform } from "./Css/Transform";
import { MediaQueryCss } from "./Css/MediaQueryCss";

const App = () => {
  return (
    <>
      {/* <div className="container">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
      </div>
      <CssFlex1 />
      <CssFlex2 />
      <CssFlex3 />
      <Debouncing />
      <RegistrationPage />
      <RegistrationNormal />
      <GridCSS /> */}
      {/* <Throggling />
      <Debouncing />
      <PromiseAll /> */}
      <Transform />
      <MediaQueryCss />
    </>
  );
};

export default App;
