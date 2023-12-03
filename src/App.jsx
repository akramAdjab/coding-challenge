import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Homepage from "./pages/Homepage";
import GlobaStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import DetailsPage from "./pages/DetailsPage";

import { CurrentUserProvider } from "./context/CurrentUserProvider";
import { EditDetailsProvider } from "./context/EditDetailsProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <CurrentUserProvider>
      <EditDetailsProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <GlobaStyles />

          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/details" element={<DetailsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                color: "var(--color-primary-50)",
                maxWidth: "50rem",
                padding: "var(--space-5) var(--space-7)",
                backgroundColor: "var(--color-primary-950)",
              },
            }}
          />
        </QueryClientProvider>
      </EditDetailsProvider>
    </CurrentUserProvider>
  );
}

export default App;
