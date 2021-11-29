import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import LandingPage from "./screens/LandingPage";


const customHistory = createBrowserHistory();

const AppRouter = (props) => {
  return (
    <Router history={customHistory}>
        <Routes>
          <Route path="/" exact={true} element={<LandingPage />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
