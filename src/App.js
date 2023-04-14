import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              height={3}
              color="#f11946"
              progress={this.state.progress}
            />

            <Routes>
              <Route
                exact
                path="/general"
                element={
                  <News
                    apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="health"
                    pageSize={this.pageSize}
                    country="in"
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={this.pageSize}
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/economic"
                element={
                  <News
                    apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="economic"
                    pageSize={this.pageSize}
                    country="in"
                    category="economic"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="technology"
                    pageSize={this.pageSize}
                    country="in"
                    category="technology"
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={this.pageSize}
                    country="in"
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={this.pageSize}
                    country="in"
                    category="science"
                  />
                }
              />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
