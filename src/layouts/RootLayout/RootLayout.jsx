import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../components/Loader/Loader";

function RootLayout() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}

export default RootLayout;
