/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { useUser } from "../features/Auth/useUser";
import { useEffect } from "react";
import Loading from "./Loading";

function ProtectRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && (!user || !user.isAuthenticated)) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) return <Loading message="Loading" />;

  if (user && user.isAuthenticated) return children;
}

export default ProtectRoute;
