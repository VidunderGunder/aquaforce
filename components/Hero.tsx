import { css } from "@emotion/react";
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";
import Typewriter from "typewriter-effect";
import FloatingNodes from "../components/FloatingNodes";
import { breakpoints } from "../styles/styles";
import { colors } from "../styles/theme";

export type HeroProps = {
  showHeroContent?: boolean;
} & ComponentPropsWithoutRef<"div">;
const Hero = forwardRef(function Hero(
  { showHeroContent = true, ...props }: HeroProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      css={css`
        color: ${colors.light};
        h1 {
          font-weight: 800;
        }
      `}
      {...props}
    >
      <div
        css={css`
          position: fixed;
          z-index: 1;
        `}
      >
        <FloatingNodes />
      </div>
      <div
        css={css`
          height: inherit;
          width: 100%;
          position: fixed;
          text-align: center;
          display: grid;
          place-items: center;
          z-index: 2;
          h1 {
            font-size: 2.25em;
            @media screen and (min-width: ${breakpoints.sm}px) {
              font-size: 3.25em;
            }
          }
          transition: 250ms;
          opacity: ${showHeroContent ? 1 : 0};
        `}
      >
        <div>
          <h1 className="not-selectable">Lær deg</h1>
          <h1
            className="not-selectable"
            css={css`
              * {
                font-weight: 800;
              }
            `}
          >
            <Typewriter
              options={{
                strings: [
                  "Programmering",
                  "Apper",
                  "Web-Utvikling",
                  "Prototyping",
                  "Elektronikk",
                  "Sensorikk",
                  "IoT",
                  "Kunstig Intelligens",
                  "Software",
                  "Deep Learning",
                  "Klassifisering",
                  "Hardware",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 70,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
});
export default Hero;
