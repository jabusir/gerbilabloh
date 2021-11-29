import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import LandingPage from "./screens/LandingPage";
import Projects from "./screens/Projects";
import Navbar from "./components/Navbar";

const customHistory = createBrowserHistory();

const AppRouter = (props) => {
  return (
    <Router history={customHistory}>
      <Routes>
        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Navbar />
    </Router>
  );
};

export default AppRouter;
