import { ComponentPropsWithRef, ReactNode, forwardRef, Ref } from "react";
import { css } from "@emotion/react";
import { colors } from "../styles/theme";
import { Button, Container } from "@mantine/core";

export type NavbarProps = ComponentPropsWithRef<"nav"> & {
  logo?: ReactNode;
  buttons?: ReactNode[];
};

// const bgColor = chroma(colors.dark).alpha(0.9375).css();
const bgColor = colors.dark;

const Navbar = forwardRef(function Navbar(
  {
    logo = <span>Image</span>,
    buttons = [
      <Button key="button1">Placeholder 1</Button>,
      <Button key="button1">Placeholder 2</Button>,
    ],
    ...props
  }: NavbarProps,
  ref?: Ref<HTMLDivElement>
) {
  return (
    <nav
      ref={ref}
      css={css`
        top: 0;
        position: fixed;
        width: 100%;
        background-color: ${bgColor};
        /** Ice and blur background */
        backdrop-filter: saturate(85%) blur(4px);
        box-shadow: 0 2px 17px -11px rgba(0, 0, 0, 0.5);
        border: 2px solid rgba(0, 0, 0, 0.05);
        border-top: none;
        border-left: none;
        border-right: none;
      `}
      {...props}
    >
      <Container
        css={css`
          display: grid;
          grid-template-columns: auto 1fr;
          grid-template-areas: "logo buttons";
          width: 100%;
          align-items: center;
          box-sizing: border-box;
          padding-top: 0.5em;
          padding-bottom: 0.5em;
        `}
      >
        <div
          css={css`
            ${typeof logo === "string"
              ? css`
                  font-weight: bold;
                  font-size: 1.5em;
                `
              : ""}
            grid-area: logo;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          {logo}
        </div>
        <div
          css={css`
            grid-area: buttons;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0.5em;
          `}
        >
          {buttons.map((button, index) => button)}
        </div>
      </Container>
    </nav>
  );
});

export default Navbar;
