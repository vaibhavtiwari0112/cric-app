import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Score from "./pages/Live-scores";
import Layout from "./layouts/Layout";
import Header from "./layouts/Header";
import Series from "./pages/Series";
import Leagues from "./pages/Leagues";
import Teams from "./pages/teams";
import International from "./pages/international";
import Domestic from "./pages/Domestic";
import Women from "./pages/Women";
import ScoreCard from "./components/ScoreCard";

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="international" element={<International />} />
            <Route path="domestic" element={<Domestic />} />
            <Route path="leagues" element={<Leagues />} />
            <Route path="women" element={<Women />} />
          </Route>
          <Route path="/live-scores" element={<Score />} />
          <Route path="/series" element={<Series />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/get-scorecard/:matchId" element={<ScoreCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
