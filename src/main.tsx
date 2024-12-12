import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bulma/css/bulma.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 <React.StrictMode>
  <QueryClientProvider client={queryClient}>
   <App />
  </QueryClientProvider>
 </React.StrictMode>
);
