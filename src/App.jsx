import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Office from "./components/Office";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Layout from "./components/Layout";
import UserTableList from "./components/UserTableList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
          <Route path="/office" element={<Office />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdisplaylist" element={<UserTableList/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;
