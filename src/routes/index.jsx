import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "routes/Public";
import Home from "components/Home";
import Menu from "components/Menu/Pdf";
import LoadingScreen from "components/LoadingScreen";

const Routes = () => {
  //for dev mode
  return (
    <>
      <Switch>
        {/* guest routes */}
        <GuestRoutes exact path="/menu" component={Menu} />
        <GuestRoutes exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
