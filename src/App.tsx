import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainLayout from "./layouts/MainLayout";

import {editClientRoute, homeRoute, newClientRoute, viewClientRoute} from './global/route-paths.global';

import Home from "./pages/home/Home";
import NewClient from "./pages/home/NewClient";
import EditClient from "./pages/home/EditClient";
import ViewClient from "./pages/home/ViewClient";

const App = (): JSX.Element => {
  return (
      <Router>
        <Routes>
            <Route path={homeRoute} element={<MainLayout />}>
                <Route index element={<Home />} />

                <Route path={newClientRoute.substring(1)} element={<NewClient />} />
                <Route path={editClientRoute.substring(1) + '/:id'} element={<EditClient />} />
                <Route path={viewClientRoute.substring(1) + '/:id'} element={<ViewClient />} />
            </Route>
        </Routes>
      </Router>
  )
}

export default App;