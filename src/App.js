import ReactImageMagnify from "react-image-magnify";
import "./App.css";

import small from "./img/small.jpg";
import big from "./img/big.jpg";

function App() {
  return (
    <div className="App">
      <br />
      <div style={{ width: "342px", height: "513px" }}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: small,
            },
            largeImage: {
              src: big,
              width: 1200,
              height: 1900,
            },
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "100%",
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
