import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Intro from "./Intro";
import Description from "./Description";
import Sidebar from "./Sidebar";
import ParallaxBackground from "./ParallaxBackground";
import MVP from "./MVP";

function App() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);
  const [isHamMenuClicked, setIsHamMenuClicked] = useState(false);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);

  function handleSideBar() {
    if (!sideBarVisibility) {
      // Opening sidebar
      setShouldRenderSidebar(true);
      setSideBarVisibility(true);
      setIsHamMenuClicked(true);
    } else {
      // Closing sidebar - start animation first
      setSideBarVisibility(false);
      setIsHamMenuClicked(false);
    }
  }

  // Handle sidebar unmount after animation completes
  useEffect(() => {
    if (!sideBarVisibility && shouldRenderSidebar) {
      const timer = setTimeout(() => {
        setShouldRenderSidebar(false);
      }, 500); // Match this with your animation duration (0.5s = 500ms)

      return () => clearTimeout(timer);
    }
  }, [sideBarVisibility, shouldRenderSidebar]);

  return (
    <>
      <Navbar
        handleSideBar={handleSideBar}
        isHamMenuClicked={isHamMenuClicked}
      />
      {shouldRenderSidebar && <Sidebar isActive={sideBarVisibility} />}
      <Banner />
      <Intro />
      <Description />
      <ParallaxBackground />
      <MVP />
    </>
  );
}

export default App;
