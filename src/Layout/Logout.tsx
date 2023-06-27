import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { persistor } from "../StoreSrc/store";

const Logout = (): null => {
  const navigate = useNavigate();
  document.cookie = "token=; Max-Age=0";
  document.cookie = "isLog=; Max-Age=0";
  useEffect(() => {
    async function logoutPurgeState() {
      try {
        await persistor.purge();
      } catch (error) {
        console.log(`The error is: ${error}`);
      }
    }

    logoutPurgeState();
  }, []);
  useEffect(() => {
    navigate("/sign-in");
  }, [navigate]);
  return null;
};

export default Logout;
