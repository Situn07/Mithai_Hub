import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/counter/Home";

import Packing from "@/pages/packing/Packing";

import AdminDashboard from "@/pages/admin/AdminDashboard";

import Login from "@/pages/auth/Login";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/packing"
        element={
          <ProtectedRoute role="PACKAGING">
            <Packing />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>
  );
}