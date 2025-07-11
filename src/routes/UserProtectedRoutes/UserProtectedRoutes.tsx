/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { selectUser } from "../../redux/features/user/uers.Slice";
import { Navigate, useLocation } from "react-router";

const UserProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  let user: any | null = null;

  const localUser: string | null = localStorage.getItem("user");

  const stateUser = useAppSelector(selectUser);

  if (localUser) {
    user = JSON.parse(localUser);
  } else if (stateUser) {
    user = stateUser;
  }

  if (user?.accessToken) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        state={{ pathname: location.pathname || "/" }}
      ></Navigate>
    );
  }
};

export default UserProtectedRoutes;
