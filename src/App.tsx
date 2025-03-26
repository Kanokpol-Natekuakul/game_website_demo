import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { HomePage } from "./pages/home-page";
import { GamesPage } from "./pages/games-page";
import { GameDetailPage } from "./pages/game-detail-page";
import { NotFoundPage } from "./pages/not-found-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="games" element={<GamesPage />} />
      <Route path="games/:id" element={<GameDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
