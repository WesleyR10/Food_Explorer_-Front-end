import { BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
import { useAuth } from "../hooks/auth";
import { api } from "../services/api";
import { USER_ROLE } from '../../utils/roles';
import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes';
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    api.get('/users/validated').catch((err) => {
      if (err.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />

      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />

      default:
        return <CustomerRoutes />
    }
  }

  console.log("User in Routes:", user);

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  )
}