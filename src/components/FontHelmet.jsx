import { Helmet, HelmetProvider } from "react-helmet-async";

export default function FontsHelmet() {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        />
      </Helmet>
    </HelmetProvider>
  );
}
