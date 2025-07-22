import React from "react";
import Home from "./Home/Home";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Collections from "./Collections/Collections";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";


const App = () => {
  const [authUser, setAuthUser] = useAuth();

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!authUser) {
      return <Navigate to="/signup" replace />;
    }
    return children;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/collection" 
          element={
            <ProtectedRoute>
              <Collections />
            </ProtectedRoute>
          } 
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
