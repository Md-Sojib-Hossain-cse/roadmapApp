/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { selectUser } from "../../redux/features/user/uers.Slice";
import { Navigate } from "react-router";

const NoUserProtectedRoutes = ({ children }: { children: ReactNode }) => {
  let user: any | null = null;

  const localUser: string | null = localStorage.getItem("user");

  const stateUser = useAppSelector(selectUser);

  if (localUser) {
    user = JSON.parse(localUser);
  } else if (stateUser) {
    user = stateUser;
  }

  if (!user?.accessToken) {
    return children;
  } else {
    return <Navigate to="/" replace={true}></Navigate>;
  }
};

export default NoUserProtectedRoutes;
