import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/home/Home";
import NewClient from "./pages/home/NewClient";
import EditClient from "./pages/home/EditClient";

const App = (): JSX.Element => {
  return (
      <Router>
        <Routes>
            <Route path={"/clients"} element={<MainLayout />}>
                <Route index element={<Home />} />

                <Route path={"new"} element={<NewClient />} />
                <Route path={"edit/:id"} element={<EditClient />} />
            </Route>
        </Routes>
      </Router>
  )
}

export default App;