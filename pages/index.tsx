import { css } from "@emotion/react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import useMeasure from "react-use-measure";
import { Container, Image } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function index() {
  const [navRef, navBounds] = useMeasure();
  const { height, width } = useViewportSize();
  return (
    <>
      <Navbar
        ref={navRef}
        css={css`
          z-index: 100;
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
            padding: 0.5rem;
          `}
        >
          <Container>
            <Image src="/demo.png" radius="md" />
          </Container>
        </div>
        <div
          css={css`
            grid-area: content;
          `}
        >
          <Container>Content</Container>
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
