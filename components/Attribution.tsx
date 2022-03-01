import { css } from "@emotion/react";
import { ComponentProps } from "react";
import { colors } from "../styles/theme";

export default function Attribution(props: ComponentProps<"div">) {
  return (
    <div
      css={css`
        text-align: center;
        font-weight: 300;
        font-size: 0.875em;
        color: rgba(255, 255, 255, 0.375);
        a {
          color: ${colors.green};
        }
      `}
      {...props}
    >
      <div>
        Ikoner laget av{" "}
        <a
          href="https://www.flaticon.com/authors/vectors-market"
          title="Vectors Market"
        >
          Vectors Market
        </a>
        {", "}
        <a href="https://www.flaticon.com/authors/wanicon" title="wanicon">
          wanicon
        </a>
        {" og "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        fra{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
