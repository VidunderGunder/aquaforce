import { css } from "@emotion/react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import useMeasure from "react-use-measure";
import { Box, Button, Container, Image, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { colors } from "../styles/theme";
import { breakpoints } from "../styles/styles";

export default function index() {
  const [navRef, navBounds] = useMeasure();
  const { height, width } = useViewportSize();
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
        buttons={[<Button>Contact</Button>]}
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
              height: 300px;
              width: 100%;
              position: relative;
              overflow: hidden;
              /* z-index: 1; */
            `}
          >
            <Image
              src="/duck.png"
              css={css`
                object-fit: cover;
              `}
            />
            <div
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.375);
              `}
            />
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
                  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.75));
                `}
              >
                <Title
                  css={css`
                    color: ${colors.white};
                    font-size: 5rem;
                  `}
                >
                  This duck sucks
                </Title>
                <Title
                  css={css`
                    margin-top: -1rem;
                    color: ${colors.white};
                    font-size: 3rem;
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
          `}
        >
          <Box
            css={css`
              padding-top: 2rem;
            `}
          >
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
          </Box>
        </div>
        <div
          css={css`
            grid-area: footer;
          `}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}
