import "./App.css";
import Title from "./component/Title";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Body from "./component/Body";
import Footer from "./component/Footer";

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="flex flex-col">
      <Title />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
