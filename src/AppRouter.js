import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import LandingPage from "./screens/LandingPage";
import Projects from "./screens/Projects";

const customHistory = createBrowserHistory();

const AppRouter = (props) => {
  return (
    <Router history={customHistory}>
      <Routes>
        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/featured" element={<Projects />} />
      </Routes>
      {/* <Navbar /> */}
    </Router>
  );
};

export default AppRouter;
