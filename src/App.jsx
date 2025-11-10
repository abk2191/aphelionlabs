import { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Intro from "./Intro";
import Description from "./Description";
import Sidebar from "./Sidebar";
import ParallaxBackground from "./ParallaxBackground";

function App() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);
  const [isHamMenuClicked, setIsHamMenuClicked] = useState(false);
  function handleSideBar() {
    setSideBarVisibility((prev) => !prev);
    setIsHamMenuClicked((prev) => !prev);
  }
  return (
    <>
      <Navbar
        handleSideBar={handleSideBar}
        isHamMenuClicked={isHamMenuClicked}
      />
      {sideBarVisibility && <Sidebar />}
      <Banner />
      <Intro />
      <Description />
      <ParallaxBackground />
    </>
  );
}

export default App;
