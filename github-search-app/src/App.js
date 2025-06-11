import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchGithub from "./Pages/SearchGithub";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
