import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const RequiresAuth = ({children}) => {
    const { authState } = useAuth();
    return authState.isLoggedIn ? children : <Navigate to="/signup" replace/>
}