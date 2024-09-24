import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "navigation/NotFound";
import HomePage from "pages/Home/HomePage";
import AcademyCBA from "pages/AcademyCBA/AcademyCBA";
import { ROOT, ROUTE_ABOUT_US, ROUTE_COMPETITIONS, ROUTE_FACILITIES, ROUTE_REPRESENTATIVE, ROUTE_ACADEMY, ROUTE_LOGIN, ROUTE_SIGNUP } from "constants/navigation_constants";

export const RouterConfig = () => {
  
  return (
    <div>
      <Switch>
        <Route exact path={ROOT} component={HomePage} />
        <Route exact path="/academy-cba" component={AcademyCBA} />

        <Route path="*" component={NotFound} />

      </Switch>

    </div>
  );
};




// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
