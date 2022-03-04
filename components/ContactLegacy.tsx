import { Button } from "@mantine/core";
import { breakpoints } from "../styles/styles";
import { css } from "@emotion/react";
import { colors } from "../styles/theme";
import { AiOutlinePhone } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ComponentProps, ReactNode, useState } from "react";

export default function Contact() {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 1.5em 0.25em;
        grid-template-areas:
          "header"
          "gunder"
          "anders"
          "attribution";
        @media screen and (min-width: ${breakpoints.sm}px) {
          grid-template-areas:
            "header header"
            "gunder anders"
            "attribution attribution";
        }
      `}
    >
      <div
        css={css`
          grid-area: header;
          text-align: center;
        `}
      >
        <h2>Kontakt</h2>
      </div>
      {/* <div
        css={css`
          grid-area: line;
        `}
      >
        <hr
          css={css`
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.125);
          `}
        />
      </div> */}
      <div
        css={css`
          grid-area: gunder;
          text-align: center;
        `}
      >
        <h3
          css={css`
            margin-bottom: 0.5em;
          `}
        >
          Kristian
        </h3>
        <div
          css={css`
            display: grid;
            grid-gap: 0.25em;
            justify-content: stretch;
            grid-template-columns: 1fr;
            /* @media screen and (min-width: ${breakpoints.xl}px) {
              grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            } */
            place-items: center;

            a {
              width: 200px;
              max-width: 100%;
              text-align: center;
            }
          `}
        >
          <div>
            <Button
              fullWidth
              component={"a"}
              color={colors.blue}
              rel="noopener norefferer"
              target="_blank"
              href="tel:95157097"
              leftIcon={<AiOutlinePhone size={20} />}
            >
              951 57 097
            </Button>
          </div>
          <div>
            <Button
              fullWidth
              color={colors.pink}
              component={"a"}
              rel="noopener norefferer"
              target="_blank"
              href="mailto:kristiankramas@outlook.com?subject=Aquaforce"
              leftIcon={<FiMail size={20} />}
            >
              Mail
            </Button>
          </div>
          <div>
            <Button
              fullWidth
              color={colors.pink}
              component={"a"}
              rel="noopener norefferer"
              target="_blank"
              href="https://www.linkedin.com/in/kristian-kram%C3%A5s/"
              leftIcon={<BsLinkedin size={20} />}
            >
              LinkedIn
            </Button>
          </div>
          <div>
            <Button
              fullWidth
              color={colors.pink}
              component={"a"}
              rel="noopener norefferer"
              target="_blank"
              href="https://www.facebook.com/kristian.kramas/"
              leftIcon={<BsFacebook size={20} />}
            >
              Facebook
            </Button>
          </div>
          <div>
            <Button
              fullWidth
              color={colors.pink}
              component={"a"}
              rel="noopener norefferer"
              target="_blank"
              href="https://github.com/VidunderGunder"
              leftIcon={<BsGithub size={20} />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
      <div
        css={css`
          grid-area: anders;
          text-align: center;
        `}
      >
        <h3
          css={css`
            margin-bottom: 0.5em;
          `}
        >
          Anders
        </h3>
        <div
          css={css`
            display: grid;
            grid-gap: 0.25em;
            justify-content: stretch;
            grid-template-columns: 1fr;
            /* @media screen and (min-width: ${breakpoints.xl}px) {
              grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            } */
            place-items: center;

            a {
              width: 200px;
              max-width: 100%;
              text-align: center;
            }
          `}
        >
          <div>
            <Button
              fullWidth
              component={"a"}
              color={colors.blue}
              rel="noopener norefferer"
              target="_blank"
              href="tel:96042477"
              leftIcon={<AiOutlinePhone size={20} />}
            >
              960 42 477
            </Button>
          </div>
          <div>
            <Button
              fullWidth
              color={colors.blue}
              component={"a"}
              rel="noopener norefferer"
              target="_blank"
              href="mailto:anders.foniks.ikt@gmail.com?subject=Aquaforce"
              leftIcon={<FiMail size={20} />}
            >
              Mail
            </Button>
          </div>
          <div>
            <Button
              fullWidth
              color={colors.blue}
              component={"a"}
              rel="noopener norefferer"
              target="_blank"
              href="https://www.linkedin.com/in/anders-mathiesen-656912186/"
              leftIcon={<BsLinkedin size={20} />}
            >
              LinkedIn
            </Button>
          </div>
          <div>
            <Button
              fullWidth
              color={colors.blue}
              component={"a"}
              rel="noopener norefferer"
              target="_blank"
              href="https://www.facebook.com/anders.mathiesen.129"
              leftIcon={<BsFacebook size={20} />}
            >
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
