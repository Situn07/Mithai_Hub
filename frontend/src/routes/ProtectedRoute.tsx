import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

interface User {
  role: "ADMIN" | "PACKAGING";
}

interface ProtectedRouteProps {
  children: ReactNode;

  role?: "ADMIN" | "PACKAGING";
}

export default function ProtectedRoute({
  children,
  role,
}: ProtectedRouteProps) {
  const storedUser =
    localStorage.getItem("user");

  const user: User | null =
    storedUser
      ? JSON.parse(storedUser)
      : null;

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (
    role &&
    user.role !== role
  ) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <>{children}</>;
}