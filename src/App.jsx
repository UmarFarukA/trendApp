// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Home from "./ui/Home";
import Register from "./pages/Register";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import ProtectRoute from "./ui/ProtectRoute";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            element={
              <ProtectRoute>
                <AppLayout />
              </ProtectRoute>
            }
          >
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />
          </Route>
          <Route path="login" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </QueryClientProvider>
      <Toaster
        gutter={10}
        toastOptions={{
          success: {
            style: {
              background: "bg-green-600",
              color: "text-stone-50",
            },
          },

          error: {
            style: {
              backgroundColor: "red",
              color: "white",
            },
          },

          warning: {
            style: {
              backgroundColor: "yellow",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}

export default App;
