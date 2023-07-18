import {Footer} from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const SharedComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedComponent;