import Layout from "../Layout/Layout";

import PageNotFound from "../Pages/PageNotFound";
import IndexPage from "../Pages/IndexPage";
import SignInPage from "../Pages/SignInPage";
import UserPage from "../Pages/UserPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { routerArray } from "./routerArray";
import { Outlet } from "react-router-dom";

const Root = () => {
  return <Layout menu={routerArray} content={<Outlet />} />;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* <Route path="accueil" element={<Page404 />} /> */}
      <Route path="" element={<IndexPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="user" element={<UserPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Root;

//DOING
