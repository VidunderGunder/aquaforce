import { css } from "@emotion/react";
import Experience from "./Experience";

export default function About() {
  return (
    <div
      css={css`
        text-align: center;
        padding-bottom: 2em;
        display: grid;
        place-items: center;
      `}
    >
      <div
        css={css`
          padding: 2em 0 1em;
        `}
      >
        <h2
          css={css`
            margin-bottom: 0.33em;
            font-size: 2em;
          `}
        >
          Hvem er Føniks?
        </h2>
      </div>
      <div
        css={css`
          max-width: 500px;
          display: grid;
          grid-gap: 0.25rem;
          margin-bottom: 3.5em;
        `}
      >
        <div>
          Vi er en håndfull utviklere og studenter som jobber med teknologi.
        </div>
        <div>Her er litt av det vi har holdt på med:</div>
      </div>
      <Experience />
    </div>
  );
}
