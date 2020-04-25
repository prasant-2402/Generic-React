import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as AppConfiguration from "./configurations/app-configuration";
import * as RouteConfig from "./configurations/router-config";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

import "./styles/App.scss";
import "./styles/panel.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Header: AppConfiguration.APP_SETTINGS.APP_NAME,
      Footer: AppConfiguration.APP_SETTINGS.APP_FOOTER_NAME,
      PAGE_HEADER: "TEST",
    };
    this.ChangeHeader = this.ChangeHeader.bind(this);
  }

  ChangeHeader(e) {
    console.log(e);
    this.setState({ PAGE_HEADER: e });
  }
  render() {
    return (
      <Router>
        <div className="container">
          <div className="Header">
            <AppHeader HeaderName={this.state.Header}></AppHeader>
          </div>
          <div className="SideBar">
            <ul className="navbar-nav mr-auto">
              {RouteConfig.ROUTE_CONFIG.map((value, index) => {
                return (
                  <li key={index}>
                    <Link to={value.path} className="nav-link">
                      {value.displayName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="MainContent">
            <div className="panel" id="panel">
              <div className="panel-header">{this.state.PAGE_HEADER}</div>
              <div className="panel-body">
                <Switch>
                  {RouteConfig.ROUTE_CONFIG.map((value, index) => {
                    return (
                      <Route
                        key={index}
                        exact
                        path={value.path}
                        render={(props) => (
                          <value.component
                            onMount={() => this.ChangeHeader(value.PageHeader)}
                          />
                        )}
                        // component={value.component}
                      />
                    );
                  })}
                </Switch>
              </div>
            </div>
          </div>
          <div className="Footer">
            <AppFooter FooterName={this.state.Footer}></AppFooter>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
