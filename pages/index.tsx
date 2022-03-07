import { css } from "@emotion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useMeasure from "react-use-measure";
import { Box, Button, Container, Image, Text, Title } from "@mantine/core";
import { useScrollIntoView, useViewportSize } from "@mantine/hooks";
import { colors } from "../styles/theme";
import { breakpoints } from "../styles/styles";

export default function index() {
  const [navRef, navBounds] = useMeasure();
  const { height } = useViewportSize();
  const { scrollIntoView, targetRef } = useScrollIntoView({
    // offset: height + navBounds.height,
  });

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
        buttons={[
          <Button onClick={() => scrollIntoView({ alignment: "end" })}>
            Contact
          </Button>,
        ]}
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
        <div
          css={css`
            grid-area: hero;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              max-height: 300px;
              width: 100%;
              position: relative;
              overflow: hidden;
              @media screen and (min-width: ${breakpoints.lg}px) {
                padding: 1rem 0 0;
              }
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
                    background-color: rgba(0, 0, 0, 0.225);
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
                  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.875));
                `}
              >
                <Title
                  css={css`
                    color: ${colors.white};
                    padding-top: 1rem;
                    line-height: 2.25rem;
                    font-size: 2.5rem;
                    @media screen and (min-width: ${breakpoints.sm}px) {
                      font-size: 3.75rem;
                    }
                    @media screen and (min-width: ${breakpoints.md}px) {
                      font-size: 5rem;
                    }
                  `}
                >
                  This duck sucks
                </Title>
                <Title
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
                    font-weight: 400;
                  `}
                >
                  We do something about it
                </Title>
              </Box>
            </div>
          </div>
        </div>
        <div
          css={css`
            grid-area: content;
            color: ${colors.light};
          `}
        >
          <Box>
            <Container
              css={css`
                padding: 2rem 0 1rem;
              `}
            >
              <Text align="center" size="xl">
                Monitor and deter ducks stealing your harvest
              </Text>
            </Container>
            <Container>
              <Box
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  @media screen and (min-width: ${breakpoints.sm}px) {
                    flex-direction: row;
                  }
                `}
              >
                <Image src="/monitor.svg" radius="md" />
                <Image src="/scare.svg" radius="md" />
              </Box>
            </Container>
            <Container
              css={css`
                padding: 2rem 0 1rem;
              `}
            ></Container>
          </Box>
        </div>
        <Box
          // @ts-ignore (These types should match, but doesn't :( Emotion + Mantine bug?)
          ref={targetRef}
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
