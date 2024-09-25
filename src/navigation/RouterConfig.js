import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "navigation/NotFound";
import HomePage from "pages/Home/HomePage";
import AcademyCBA from "pages/AcademyCBA/AcademyCBA";
import { ROOT, ROUTE_ABOUT_US, ROUTE_COMPETITIONS, ROUTE_PARTICIPATIONS, ROUTE_FACILITIES, TEMPLATE_ROUTE_REGISTER1, TEMPLATE_ROUTE_REGISTER2, TEMPLATE_ROUTE_COMPETITION1, ROUTE_REPRESENTATIVE, ROUTE_ACADEMY, ROUTE_LOGIN, ROUTE_SIGNUP } from "constants/navigation_constants";

import Facilities from "pages/Facilities/Facilities";
import Representative from "pages/Representative/Representative";
import Competition from "pages/Competition/Competition";
import Participations from "pages/Participation/Participation";

import Competition1Page from "pages/Competitionv/Competition1Page";

import Register1Page from "pages/Register/Register1Page";
import Register2Page from "pages/Register/Register2Page";
export const RouterConfig = () => {

  return (
    <div>
      <Switch>
        <Route exact path={ROOT} component={HomePage} />
        <Route exact path={ROUTE_ACADEMY} component={AcademyCBA} />
        <Route exact path={ROUTE_REPRESENTATIVE} component={Representative} />
        <Route exact path={ROUTE_COMPETITIONS} component={Competition} />
        <Route exact path={ROUTE_PARTICIPATIONS} component={Participations} />

        <Route exact path={ROUTE_FACILITIES} component={Facilities}/>
        <Route exact path={TEMPLATE_ROUTE_COMPETITION1} component={Competition1Page}/>

        <Route exact path={TEMPLATE_ROUTE_REGISTER1} component={Register1Page}/>
        <Route exact path={TEMPLATE_ROUTE_REGISTER2} component={Register2Page}/>
        <Route path="*" component={NotFound} />

      </Switch>

    </div>
  );
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
