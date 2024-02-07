import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "../../components/Layout";

export default function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Creamy Sharks - 404 Page Not Found</title>
          <meta
            name="description"
            content="Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."
          />
        </Helmet>
      </HelmetProvider>
      <Container>404 Page Not Found</Container>
    </>
  );
}
