import React from "react";
import "./styles/App.scss";
import * as AppConfiguration from './configurations/app-configuration';
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Header: AppConfiguration.APP_SETTINGS.APP_NAME,
      Footer: AppConfiguration.APP_SETTINGS.APP_FOOTER_NAME
    };
  }
  render() {
    return (
      <div className="container">
        <div className="Header">
          <AppHeader HeaderName={this.state.Header}></AppHeader>
        </div>
        <div className="SideBar">Application Side Bar</div>
        <div className="MainContent">Application Main Content</div>
        <div className="Footer">
          <AppFooter FooterName={this.state.Footer}></AppFooter>
        </div>
      </div>
    );
  }
}

export default App;
