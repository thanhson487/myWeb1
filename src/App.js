import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./common/Footer";
import Navigation from "./common/Navigation";
import AboutScreen from "./Screen/AboutScreen";
import ConceptScreen from "./Screen/ConceptScreen";
import DetailAlbumScreen from "./Screen/DetailAlbumScreen";
import EventScreen from "./Screen/EventScreen";
import HomeScreen from "./Screen/HomeScreen";
import WeddingPage from "./Screen/WeddingPage";
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/phong-su-cuoi" component={WeddingPage} />
        <Route path = "/su-kien" component = {EventScreen} />
        <Route path = "/concept" component = {ConceptScreen} />
        <Route path="/album-detail" component={DetailAlbumScreen} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
