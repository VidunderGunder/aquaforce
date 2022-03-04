import Contact from "./Contact";
import { css } from "@emotion/react";
import { colors } from "../styles/theme";
import { Container } from "@mantine/core";
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";

const Footer = forwardRef(function Footer(
  props: ComponentPropsWithoutRef<"div">,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      css={css`
        background-color: ${colors.dark};
      `}
      ref={ref}
      {...props}
    >
      <Container
        css={css`
          padding-top: 1.5em;
          padding-bottom: 1.5em;
        `}
      >
        <Contact />
      </Container>
    </div>
  );
});

export default Footer;
