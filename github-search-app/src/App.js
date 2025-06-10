import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchGithub from "./Pages/SearchGithub";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchGithub />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
