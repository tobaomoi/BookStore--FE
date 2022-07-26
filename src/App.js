import "./App.css";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import Layout from "./Layout";
import PageNotFound from "./Components/PageNotFound";
const renderLayout = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((route, index) => {
      return (
        <Layout
          key={index}
          path={route.path}
          exact={route.exact}
          Component={route.component}
        />
      );
    });
  }
};

function App() {
  return (
        <Switch>
          {/* <Route
            path="/login"
            exact={true}
            render={(routeProps) => <LoginPage {...routeProps} />}
          />
          <Route
            path="/signup"
            exact={true}
            render={(routeProps) => <SignUpPage {...routeProps} />}
          /> */}
          {renderLayout(Routes)}
          <Route
            path="*"
            render={(routeProps) => <PageNotFound {...routeProps} />}
          />
        </Switch>
  );
}

export default App;
