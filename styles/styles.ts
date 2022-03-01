import { colors } from "./theme";
import { css } from "@emotion/react";
import { isDesktop, isChrome, isEdge } from "react-device-detect";
import chroma from "chroma-js";
import { SerializedStyles } from "@emotion/utils";

export type ChromaColor = string | number | chroma.Color;

/** Breakpoint in pixel values */
export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

export function getBorderDepthCSS(strength = 0.125) {
  return css`
    border-style: solid;
    border-width: 1px;
    border-left-color: rgba(255, 255, 255, ${strength});
    border-top-color: rgba(255, 255, 255, ${strength});
    border-right-color: rgba(0, 0, 0, calc(${strength} / 6));
    border-bottom-color: rgba(0, 0, 0, calc(${strength} / 6));
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, ${strength});
  `;
}

export function getGradientCSS(
  color: ChromaColor = colors.blue,
  {
    strength = 0.175,
    inverse = false,
    alpha = 1,
    property = "background-image",
    fallbackProperty = "background-color",
    type = "linear",
  }: {
    strength?: number;
    inverse?: boolean;
    alpha?: number;
    property?: string;
    fallbackProperty?: string | null;
    type?: "linear" | "radial";
  } = {}
): SerializedStyles {
  const bright = chroma(color)
    .brighten(strength)
    .saturate(strength)
    .alpha(alpha)
    .set("hsl.h", `*${1 + strength / 5}`)
    .css();
  const dark = chroma(color)
    .darken(strength)
    .desaturate(strength)
    .alpha(alpha)
    .set("hsl.h", `*${1 - strength / 5}`)
    .css();
  return css`
    ${fallbackProperty !== null
      ? `${fallbackProperty}: ${chroma(color).alpha(alpha).css()};`
      : null}
    ${type === "linear"
      ? css`
          ${property}: linear-gradient(
            ${inverse ? 315 : 135}deg,
            ${bright} 0%,
            ${dark} 100%
          );
        `
      : css`
          ${property}: radial-gradient(
            circle,
            ${bright} ${inverse ? 0 : 100}%,
            ${dark} ${inverse ? 100 : 0}%
          );
        `}
  `;
}

export const appBaseCSS = css`
  html,
  body,
  body > div:first-of-type,
  div#__next,
  div#__next > div {
    height: 100%;
  }

  * {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html,
  body {
    background-color: ${colors.white};
    color: ${colors.black};

    /* Firefox */
    scrollbar-width: thin;
  }

  ${isDesktop &&
  (isEdge || isChrome) &&
  css`
    body {
      padding-right: 0 !important;
      overflow: overlay;
    }

    ::-webkit-scrollbar {
      width: 13px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgb(200, 200, 200, 0.75);
      border: 3px solid transparent;
      border-radius: 6.5px;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: rgb(200, 200, 200, 0.85);
    }

    ::-webkit-scrollbar-thumb:active {
      background-color: rgb(200, 200, 200, 0.95);
    }
  `}

  a {
    text-decoration: none;
    color: black;
  }

  * :not(p, ul, li h1, h2, h3, h4, h5, h6) {
    margin: 0;
    padding: 0;
  }

  .not-selectable {
    -webkit-user-drag: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
`;


export const appCSS = css`
  ${appBaseCSS}
  div, span, p {
    font-weight: 400;
  }

  a {
    color: inherit;
  }
  html,
  body,
  body > div:first-of-type,
  div#__next {
    background-color: ${chroma(colors.dark).darken(0.15).css()};
    color: ${colors.light};
  }
  button {
    -webkit-tap-highlight-color: transparent;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-weight: 700;
  }
  h1 {
    font-weight: 800;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.5em;
  }
`;

export const borderRadius = "5px";

export function getBlinkAnimationCSS(
  blink = true,
  duration = "0.5s",
  repeat = 3
) {
  if (!blink) {
    return null;
  }

  return css`
    animation: ${duration} blink ease ${repeat};
    filter: brightness(1);
    @keyframes blink {
      from,
      to {
        filter: brightness(1);
      }

      50% {
        filter: brightness(1.333);
      }
    }
  `;
}
