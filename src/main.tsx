import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { SearchProvider } from "./contexts/SearchContext.tsx";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <SearchProvider>
        <DndProvider backend={HTML5Backend}>
    <RouterProvider router={router} />
        </DndProvider>
    </SearchProvider>
  </AuthContextProvider>
);