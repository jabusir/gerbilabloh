import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import LandingPage from "./screens/LandingPage";
import Projects from "./screens/Projects";
import PSIntro from "./screens/PSIntro";

const customHistory = createBrowserHistory();

const AppRouter = (props) => {
  return (
    <Router history={customHistory}>
      <Routes>
        <Route path="/" exact={true} element={<PSIntro />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<LandingPage />} />
      </Routes>
      {/* <Navbar /> */}
    </Router>
  );
};

export default AppRouter;
