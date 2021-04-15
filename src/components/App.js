import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/layout";

import Home from "../pages/Home";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import NotFound from "../pages/NotFound";
import BadgeDetails from "../pages/BadgeDetailsContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={BadgeNew}></Route>
          <Route exact path="/badges/:badgeId" component={BadgeDetails}></Route>
          <Route
            exact
            path="/badges/:badgeId/edit"
            component={BadgeEdit}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
