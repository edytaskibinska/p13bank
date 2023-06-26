import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { persistor } from "../StoreSrc/store";

// React component - Logout user
// @return {null}

const Logout = (): null => {
  const navigate = useNavigate();
  document.cookie = "token=; Max-Age=0";
  document.cookie = "isLog=; Max-Age=0";
  useEffect(() => {
    const logoutPurgeState = async () => {
      await persistor.purge();
    };
    logoutPurgeState();
  }, []);

  useEffect(() => {
    navigate("/sign-in");
  }, [navigate]);
  return null;
};

export default Logout;
