import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (): null => {
  const navigate = useNavigate();
  document.cookie = "token=; Max-Age=0";
  document.cookie = "isLog=; Max-Age=0";
  useEffect(() => {
    navigate("/sign-in");
    localStorage.delete()
  }, [navigate]);
  return null;
};

export default Logout;
