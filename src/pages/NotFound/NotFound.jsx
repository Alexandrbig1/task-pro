import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundWrapper,
  NotFoundText,
} from "./NotFound.styled";
import Logo from "../../components/Logo/Logo";

const size = {
  width: "24px",
  height: "24px",
};

const text = {
  color: "#161616",
  font: "2.4rem",
};

const icon = {
  bgColor: "#161616",
  iconColor: "#fff",
};

export default function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Creamy Sharks - 404 Page Not Found</title>
          <meta
            name="description"
            content="Oops! It seems like you've ventured into uncharted waters. Dive back into Creamy Sharks and explore our world of efficient task management. Don't worry; tasks are always in progress, and nothing is impossible!"
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta
            property="og:title"
            content="Creamy Sharks - 404 Page Not Found"
          />
          <meta
            property="og:url"
            content="https://alexandrbig1.github.io/task-pro/404"
          />
        </Helmet>
      </HelmetProvider>
      <NotFoundContainer>
        <Logo size={size} text={text} icon={icon} />
        <NotFoundWrapper>
          <NotFoundTitle>404 - Oops! The Task Hides</NotFoundTitle>
          <NotFoundText>
            Oh dear! It seems you've stumbled upon a missing task. Don't worry,
            though; we're masters of finding things, especially tasks that
            refuse to be found!
            <br />
            <br />
            In the vast landscape of Task Pro, occasional detours happen. But
            hey, here's a little secret: In our world, nothing is impossible,
            and tasks are always in progress. So, while you search for the
            elusive page, take a breath, click the logo, and enjoy the
            adventure. Your tasks await you, and so does the magic of endless
            possibilities!
            <br />
            <br />
            Happy Hunting, Creamy Sharks Team 🚀
          </NotFoundText>
        </NotFoundWrapper>
      </NotFoundContainer>
    </>
  );
}
