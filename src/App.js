import {BrowserRouter, Routes, Route} from "react-router-dom";
import Slide1 from "./Components/Slide1";
import Slide2 from "./Components/Slide2";
import Slide3 from "./Components/Slide3";
import Slide4 from "./Components/Slide4";
import "./App.css"
import slide1png from "./accessories/slide1.png"
import slide2png from "./accessories/slide2.png"
import slide3png from "./accessories/slide3.png"
import slide4png from "./accessories/slide4.png"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Slide1 image={slide1png} />} />
          <Route path="/slide2" element={<Slide2 image={slide2png} />} />
          <Route path="/slide3" element={<Slide3 image={slide3png} />} />
          <Route path="/slide4" element={<Slide4 image={slide4png} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;