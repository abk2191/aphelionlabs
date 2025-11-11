import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Intro from "./Intro";
import Description from "./Description";
import Sidebar from "./Sidebar";
import ParallaxBackground from "./ParallaxBackground";
import MVP from "./MVP";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);
  const sidebarRef = useRef(null);

  function handleSideBar() {
    if (!isSidebarOpen) {
      // Opening
      setShouldRenderSidebar(true);
    } else {
      // Closing - start animation
      if (sidebarRef.current) {
        sidebarRef.current.classList.remove('sidebar--visible');
      }
      // Wait for animation to complete before unmounting
      setTimeout(() => {
        setShouldRenderSidebar(false);
      }, 500);
    }
    setIsSidebarOpen(!isSidebarOpen);
  }

  // Trigger animation after mount when opening
  useEffect(() => {
    if (shouldRenderSidebar && isSidebarOpen && sidebarRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (sidebarRef.current) {
          sidebarRef.current.classList.add('sidebar--visible');
        }
      }, 10);
    }
  }, [shouldRenderSidebar, isSidebarOpen]);

  return (
    <>
      <Navbar
        handleSideBar={handleSideBar}
        isHamMenuClicked={isSidebarOpen}
      />
      
      {shouldRenderSidebar && (
        <Sidebar ref={sidebarRef} />
      )}
      
      <Banner />
      <Intro />
      <Description />
      <ParallaxBackground />
      <MVP />
    </>
  );
}

export default App;