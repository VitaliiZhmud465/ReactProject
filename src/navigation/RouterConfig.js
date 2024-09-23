import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "navigation/NotFound";
import HomePage from "pages/Home/HomePage";
import { ROOT, ROUTE_ABOUT_US, ROUTE_COMPETITIONS, ROUTE_FACILITIES, ROUTE_REPRESENTATIVE, ROUTE_ACADEMY, ROUTE_LOGIN, ROUTE_SIGNUP } from "constants/navigation_constants";
import AboutPage from "pages/About/AboutPage";
import AdvertisePage from "pages/Advertise/Advertise";
import LegalPage from "pages/Legal/Legal";
import ContactPage from "pages/Contact/Contact";
import LoginPage from "pages/Login/LoginPage";
import SignupPage from "pages/Signup/SignupPage";
import OtpPage from "pages/Otp/OtpPage";
import AdvertiseCPCPage from "pages/AdvertiseCPC/AdvertiseCPC";
import AdvertiseCPIPage from "pages/AdvertiseCPI/AdvertiseCPI";
import AdvertiseCPLPage from "pages/AdvertiseCPL/AdvertiseCPL";
import ShopPage from "pages/Shop/ShopPage";
export const RouterConfig = () => {
  
  return (
    <div>
      <Switch>
        <Route exact path={ROOT} component={HomePage} />
        <Route exact path={ROUTE_ABOUT_US} component={AboutPage} />
        <Route exact path={ROUTE_COMPETITIONS} component={AdvertisePage} />
        <Route exact path={ROUTE_FACILITIES} component={AdvertiseCPCPage} />
        <Route exact path={ROUTE_REPRESENTATIVE} component={AdvertiseCPIPage} />
        <Route exact path={ROUTE_ACADEMY} component={AdvertiseCPLPage} />
        <Route exact path={ROUTE_LOGIN} component={LoginPage} />
        <Route exact path={ROUTE_SIGNUP} component={SignupPage} />
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
