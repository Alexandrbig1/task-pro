import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container } from "../../components/Layout";

function RootLayout() {
  return (
    <Container>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default RootLayout;
