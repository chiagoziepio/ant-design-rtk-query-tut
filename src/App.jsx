import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Office from "./components/Office";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Layout from "./components/Layout";
import UserTableList from "./components/UserTableList";
import Products from "./components/Products";
import SpecificProducts from "./components/SpecificProducts";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
          <Route path="/office" element={<Office />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userdisplaylist" element={<UserTableList/>}/>
          <Route path ="/products" element ={<Products/>}/>
          <Route path="/products/:id" element={<SpecificProducts/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;
