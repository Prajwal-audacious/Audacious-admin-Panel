import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../Pages/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
// cms pages
const Home = lazy(() => import("./CMS/Home/index"));
const About = lazy(() => import("./CMS/About/index"));
const Services = lazy(() => import("./CMS/Services/index"));
const Projects = lazy(() => import("./CMS/Projects/index"));
// form element
const BasicElements = lazy(() => import("./form-elements/BasicElements"));
// table
const BasicTable = lazy(() => import("./tables/BasicTable"));
// errorpage
const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));
// login/signup
const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />

        <Route path="/cms/home" component={Home} />
        <Route path="/cms/about" component={About} />
        <Route path="/cms/services" component={Services} />
        <Route path="/cms/projects" component={Projects} />

        <Route path="/form-Elements/basic-elements" component={BasicElements} />

        <Route path="/tables/basic-table" component={BasicTable} />

        <Route path="/user-pages/login-1" component={Login} />
        <Route path="/user-pages/register-1" component={Register1} />

        <Route path="/error-pages/error-404" component={Error404} />
        <Route path="/error-pages/error-500" component={Error500} />

        <Redirect to="/dashboard" />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
