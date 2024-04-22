import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import Schedules from "./pages/Schedules";
import ScoreCard from "./components/ScoreCard";

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schedules" element={<Schedules />}></Route>
          <Route path="/get-scorecard/:matchId" element={<ScoreCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
