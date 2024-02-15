import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  SharksBtn,
  SharksText,
  SharksTextWrapper,
  SharksTitle,
  SharksWrapper,
  SharksTextContainer,
  SharksBtnWrapper,
  SharksBtnIcon,
  SharksTeamTitle,
  SharksTeamWrapper,
  SharksTeamContainer,
  ImgCardsContainer,
  Images,
  ImgCardsMenu,
  ImgCardsItems,
  ImgTitle,
  ImgSubTitle,
  ImgWrapper,
  GithubIcon,
  LinkedInIcon,
  SocialWrapper,
  ImgCardItemsWrapper,
  SharksTitleSpan,
  SharksTextSpan,
} from "./CreamySharks.styled";

export default function CreamySharks() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Creamy Sharks - Task Pro</title>
          <meta
            name="description"
            content="Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."
          />
        </Helmet>
      </HelmetProvider>
      <SharksWrapper>
        <SharksTextContainer>
          <SharksBtnWrapper onClick={goBack}>
            <SharksBtnIcon />
            <SharksBtn>return</SharksBtn>
          </SharksBtnWrapper>
          <SharksTeamContainer>
            <SharksTextWrapper>
              <SharksTitle>
                Journey to Fullstack Mastery:{" "}
                <SharksTitleSpan>
                  Task Pro - Our Graduation Project
                </SharksTitleSpan>
              </SharksTitle>

              <SharksText>
                Welcome to Task Pro, the culmination of our 10-month journey
                into the world of full-stack development at{" "}
                <a
                  href="https://goit.global/us/courses/fullstack/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SharksTextSpan>GoIT</SharksTextSpan>
                </a>
                . As passionate learners and aspiring developers, we proudly
                present our final project that showcases the skills and
                knowledge acquired during this intensive program.
              </SharksText>
            </SharksTextWrapper>
            <SharksTeamWrapper>
              <SharksTeamTitle>Team Members:</SharksTeamTitle>
              <SharksText>
                Meet the talented individuals who brought Task Pro to life! Our
                dedicated team of full-stack developers poured their passion and
                expertise into every line of code, creating a collaborative and
                efficient task management solution.
              </SharksText>
            </SharksTeamWrapper>
          </SharksTeamContainer>
          <ImgCardsContainer>
            <ImgCardsMenu>
              <ImgCardsItems>
                <Images src="./images/team/alex.jpg" alt="Alex Smagin" />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Alex Smagin</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/alex-smagin29/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/Alexandrbig1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images src="./images/team/den.jpg" alt="Denys Shchypt" />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Denys Shchypt</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/denys-shchyptsov/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/DenysShchypt"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images src="./images/team/kira.jpg" alt="Batalova Kira" />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Batalova Kira</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/kira-batalova"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/batalova-kira"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images src="./images/team/dmytro.jpg" alt="Dmytro Mukolyuk" />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Dmytro Mukolyuk</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a href="#">
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/KRB-U"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images src="./images/team/nata.jpg" alt="Natalia Spivak" />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Natalia Spivak</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/natalia-spivak/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/Nataly-Naf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images
                  src="./images/team/olena.jpg"
                  alt="Olena Nechyporenko"
                />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Olena Nechyporenko</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/olena-nechyporenko/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/Olena-Nechyporenko"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images
                  src="./images/team/vlad-p.jpg"
                  alt="Vlad Parkhomovych"
                />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Vlad Parkhomovych</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/vladyslav-parkhomovych/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/Parkhomovych"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images src="./images/team/yurii.jpg" alt="Yuriy Krasnobokiy" />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Yuriy Krasnobokiy</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/yurii-krasnobokyi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/YuriyKrasnobokiy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images src="./images/team/yuliia.jpg" alt="Yulia Tsarenko" />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Yulia Tsarenko</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/yuliia-tsarenko/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/Yullia90"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images src="./images/team/oleg.jpg" alt="Oleg Baranov" />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Oleg Baranov</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/oleg-baranov977"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/Olegmkv"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images src="./images/team/vlad.jpg" alt="Vialov Vlad" />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Vialov Vlad</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a
                        href="https://www.linkedin.com/in/vialovvlad"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/igrok1803444"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
              <ImgCardsItems>
                <Images
                  src="./images/team/svitlana.jpg"
                  alt="Svitlana Yurikova"
                />
                <ImgCardItemsWrapper>
                  <ImgWrapper>
                    <div>
                      <ImgTitle>Svitlana Yurikova</ImgTitle>
                      <ImgSubTitle>fullstack developer</ImgSubTitle>
                    </div>
                    <SocialWrapper>
                      <a href="#">
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/SvitUriko"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </SocialWrapper>
                  </ImgWrapper>
                </ImgCardItemsWrapper>
              </ImgCardsItems>
            </ImgCardsMenu>
          </ImgCardsContainer>
        </SharksTextContainer>
      </SharksWrapper>
    </>
  );
}
