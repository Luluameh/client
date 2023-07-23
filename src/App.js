import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from './pages/Login';
import ChatRoom from "./pages/ChatRoom";
import { PrivateRoute } from "./routes/PrivateRoute";

import { AuthProvider } from "./context/AuthContext";
//import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
          <Navbar />
     <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
          {/* <Home/>*/}
            </PrivateRoute>
          }
        />
      
        </Routes>
        
    </AuthProvider>
  );
}

export default App;
