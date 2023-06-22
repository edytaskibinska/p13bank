import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { purgeStoredState } from "redux-persist";
import { persistDataConf, persistor } from "../StoreSrc/store";

// React component - Logout user
// @return {null}

const Logout = (): null => {
  const navigate = useNavigate();
  document.cookie = "token=; Max-Age=0";
  document.cookie = "isLog=; Max-Age=0";
  // useEffect(() => {
  //   const test = async () => {
  //     await persistor.purge();
  //   };
  //   test();
  // }, []);

  useEffect(() => {
    navigate("/sign-in");
    console.log("EEEEFFFECCCT")
  }, [navigate]);
  return null;
};

export default Logout;