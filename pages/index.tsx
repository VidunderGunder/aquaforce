import { css } from "@emotion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useMeasure from "react-use-measure";
import {
  Box,
  Button,
  Center,
  Container,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useScrollIntoView, useViewportSize } from "@mantine/hooks";
import { colors } from "../styles/theme";
import { breakpoints } from "../styles/styles";
import { useEffect, useLayoutEffect, useState } from "react";

export default function index() {
  const [navRef, navBounds] = useMeasure();
  const { height, width } = useViewportSize();
  const { scrollIntoView: scrollToDemo, targetRef: demoRef } =
    useScrollIntoView({
      // offset: height + navBounds.height,
      duration: 250,
    });
  const { scrollIntoView: scrollToContact, targetRef: contactRef } =
    useScrollIntoView({
      // offset: height + navBounds.height,
      duration: 250,
    });
  const [compactNav, setCompactNav] = useState(false);

  useEffect(() => {
    setCompactNav(width < breakpoints.md);
  }, [width]);

  return (
    <>
      <Navbar
        ref={navRef}
        logo={
          <Title
            css={css`
              color: ${colors.white};
            `}
          >
            Aquaforce
          </Title>
        }
        buttons={
          <>
            <Button
              onClick={() => scrollToDemo({ alignment: "center" })}
              compact={compactNav}
            >
              Demo
            </Button>
            <Button
              onClick={() => scrollToContact({ alignment: "end" })}
              compact={compactNav}
            >
              Contact
            </Button>
          </>
        }
        css={css`
          z-index: 100;
          background-color: ${colors.dark};
        `}
      />
      <div
        css={css`
          padding-top: ${navBounds.height}px;
          height: calc(${height}px - ${navBounds.height}px);
          max-height: calc(${height}px - ${navBounds.height}px);
          display: grid;
          grid-template-rows: auto 1fr auto;
          grid-template-areas:
            "hero"
            "content"
            "footer";
        `}
      >
        <Box
          css={css`
            @media screen and (min-width: ${breakpoints.lg}px) {
              padding: 2rem 0 1rem;
            }
            grid-area: hero;
          `}
        >
          <Box
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              max-height: 300px;
              width: 100%;
              position: relative;
              overflow: hidden;

              /* z-index: 1; */
            `}
          >
            <Container
              css={css`
                @media screen and (max-width: ${breakpoints.lg}px) {
                  padding: 0;
                  margin: 0;
                }
              `}
            >
              <Box
                css={css`
                  @media screen and (min-width: ${breakpoints.lg}px) {
                    border-radius: 0.5rem;
                  }
                  overflow: hidden;
                  position: relative;
                `}
              >
                <Image
                  src="/duck.png"
                  css={css`
                    max-height: 300px;
                    align-items: center;
                    display: flex;
                    object-fit: contain;
                  `}
                />
                <div
                  css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.3);
                    box-shadow: inset 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.5);
                  `}
                />
              </Box>
            </Container>
            <div
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: grid;
                place-items: center;
              `}
            >
              <Box
                css={css`
                  text-align: center;
                  filter: drop-shadow(0 0 0.875rem rgba(0, 0, 0, 0.925));
                `}
              >
                <Title
                  css={css`
                    color: ${colors.white};
                    /* padding-top: 1.25rem; */
                    line-height: 2.25rem;
                    font-size: 2.5rem;
                    text-transform: uppercase;
                    font-weight: 800;
                    @media screen and (min-width: ${breakpoints.sm}px) {
                      font-size: 3.75rem;
                    }
                    @media screen and (min-width: ${breakpoints.md}px) {
                      font-size: 5rem;
                    }
                  `}
                >
                  This is a thief
                </Title>
                {/* <Title
                  css={css`
                    color: ${colors.white};
                    margin-top: 0.175em;
                    font-size: 1.5rem;
                    @media screen and (min-width: ${breakpoints.sm}px) {
                      font-size: 2.25rem;
                    }
                    @media screen and (min-width: ${breakpoints.md}px) {
                      font-size: 3rem;
                    }
                    font-weight: 300;
                  `}
                >
                  a real meanie-beanie
                </Title> */}
              </Box>
            </div>
          </Box>
        </Box>
        <Box
          css={css`
            grid-area: content;
            /* color: ${colors.dark}; */
            /* background-color: ${colors.light}; */
          `}
        >
          <Box>
            <Container
              css={css`
                padding: 1.5rem 0 1rem;
                @media screen and (min-width: ${breakpoints.lg}px) {
                  padding: 1.5rem 0 2rem;
                }
              `}
            >
              <Text align="center" size="xl">
                Ducks are stealing mussels.
              </Text>
              <Text align="center" size="xl">
                Here's how to avoid it:
              </Text>
            </Container>
            <Container>
              <Center
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: start;
                  gap: 2rem;
                  justify-content: center;
                  padding: 0 5rem;
                  @media screen and (max-width: ${breakpoints.sm}px) {
                    padding: 0;
                  }
                  @media screen and (min-width: ${breakpoints.md}px) {
                    gap: 1rem;
                    flex-direction: row;
                    padding: 0;
                  }
                  text-align: center;
                `}
              >
                <Box css={css``}>
                  <Image src="/monitor.svg" />
                  <Box
                    css={css`
                      padding: 0 1rem;
                    `}
                  >
                    <Text
                      size={compactNav ? "md" : "lg"}
                      css={css`
                        padding: 0 1rem;
                      `}
                    >
                      Get real-time alerts so you can be quick to
                      counter-attack!
                    </Text>
                  </Box>
                </Box>
                <Box css={css``}>
                  <Image src="/scare.svg" />
                  <Box
                    css={css`
                      padding: 0 1rem;
                    `}
                  >
                    <Text
                      size={compactNav ? "md" : "lg"}
                      css={css`
                        padding: 0 1rem;
                      `}
                    >
                      Tired of dealing with ducks yourself?
                    </Text>
                    <Text size={compactNav ? "md" : "lg"}>
                      Shoo them away automagically!
                    </Text>
                  </Box>
                </Box>
              </Center>
            </Container>
            <Container
              css={css`
                padding-top: 3rem;
              `}
            >
              <Box
                css={css`
                  border-radius: 0.5rem;
                  position: relative;
                  overflow: hidden;
                  max-height: 400px;
                `}
              >
                <Image
                  src="/demo.png"
                  css={css`
                    z-index: -1;
                  `}
                />
                <Box
                  css={css`
                    box-shadow: inset 0.05rem 0.125rem 0.375rem 0
                        rgba(0, 0, 0, 0.75),
                      inset 0.05rem 0.125rem 5rem 0 rgba(0, 0, 0, 0.5);
                    background-color: rgba(0, 0, 0, 0.375);
                    backdrop-filter: blur(18px);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                  `}
                />
                <Center
                  css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    color: ${colors.gray};
                    flex-direction: column;
                    filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.92));
                  `}
                >
                  <Text
                    // @ts-ignore
                    ref={demoRef}
                    size="xl"
                    weight="bold"
                  >
                    LIVE DEMO
                  </Text>
                  <Text size="md">Comming soon...</Text>
                </Center>
              </Box>
            </Container>
            <Container
              css={css`
                padding-top: 3rem;
                text-align: center;
                opacity: 0.5;
              `}
            >
              <Title>*ABOUT US SECTION*</Title>
              <Text>Comming soon...</Text>
            </Container>
            <Container
              size="xs"
              css={css`
                padding-top: 2rem;
                padding-bottom: 2rem;
                @media screen and (min-width: ${breakpoints.sm}px) {
                  padding-top: 3rem;
                  padding-bottom: 3rem;
                }
              `}
            >
              <Box
                css={css`
                  text-align: center;
                  width: 100%;
                  display: flex;
                  gap: 0.75rem;
                  flex-direction: column;
                `}
              >
                <Text>
                  We want to help you create sustainable and protein-dense food,
                  so get in touch and we'll fix this together.
                </Text>
              </Box>
            </Container>
          </Box>
        </Box>
        <Box
          // @ts-ignore (These types should match, but doesn't :( Emotion + Mantine bug?)
          ref={contactRef}
          css={css`
            grid-area: footer;
          `}
        >
          <Footer />
        </Box>
      </div>
    </>
  );
}
