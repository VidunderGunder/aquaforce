import { ReactNode } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { colors } from "../styles/theme";
import { Card } from "@mantine/core";

function EXPCard({
  label,
  image,
  children,
}: {
  label: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <Card
      // cardColor={"rgba(0, 0, 0, 0.75)"}
      css={css`
        height: 25vw;
        width: 100%;
        min-height: 200px;
        max-height: 200px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        padding: 0;
        margin: 0;
        display: grid;
        place-items: center;
        text-align: left;
      `}
    >
      <div
        css={css`
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: 1;
          /* background-color: rgba(30, 30, 37.5, 0.25); */
          display: grid;
          place-items: center;
          color: ${colors.light};
        `}
      >
        <div
          css={css`
            padding: 2.5% 10%;
            background-color: rgba(0, 0, 0, 0.42);
            width: 100%;
            backdrop-filter: blur(2px);
            box-shadow: 0 1px 0.25em rgba(0, 0, 0, 0.5);
            /* filter: drop-shadow(0 0.075em 3em rgba(0, 0, 0, 1)); */
          `}
        >
          <div
            css={css`
              padding: 0.5em 2em;
            `}
          >
            <h3
              css={css`
                font-weight: 600;
                margin-bottom: 0.5em;
              `}
            >
              {label}
            </h3>
            <div css={css``}>{children}</div>
          </div>
        </div>
      </div>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt={label}
        quality={25}
        lazyBoundary="500px"
      />
    </Card>
  );
}

export default function Experience() {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 2em;
        box-sizing: border-box;
        width: 100%;
        grid-auto-flow: row;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      `}
    >
      <EXPCard label="Trelleborg, Vipo og Profilteam" image="/images/boys.png">
        Dokumentasjon p?? papir ble for dumt, s?? vi flyttet det over p??
        duppedingser.
      </EXPCard>
      <EXPCard label="Kurs og fag ved NMBU" image="/images/workshop-tiny.jpg">
        Workshops, kursmateriale, undervisningshjelp o.l. ved Norges Milj??- og
        Biovitenskapelige Universitet.
      </EXPCard>
      <EXPCard
        label="KulturHACK med ??s Kommune"
        image="/images/kulturhack.jpeg"
      >
        Kulturelt undervisningsopplegg i regi av ??s Kommune, for ?? inspirere
        unge til ?? engasjere seg i kunst og teknologi.
      </EXPCard>
      <EXPCard label="Sildr" image="/images/sildr.jpg">
        Smarte drikkefontener koblet til skyen. M??let er ?? oppfordre folk til
        fylle p?? flaska og spare milj??et for litt plast.
      </EXPCard>
      <EXPCard label="Labutstyr (CRISPR)" image="/images/potato.png">
        Automatisering av prosesser i forbindelse med forskning p??
        genredigering.
      </EXPCard>
      <EXPCard label="Simulert AI" image="/images/unity-ai.png">
        Effektiv trening av kunstig intelligens, som kan overf??res til
        virkeligheten.
      </EXPCard>
      <EXPCard label="Milj??kalkulator" image="/images/carculator.png">
        Grensesnitt for ?? simulere konsekvenser av kj??ret??yspolitikk for
        kommunene i ??stfoldregionen.
      </EXPCard>
      <EXPCard label="Bildegjenkjenning" image="/images/mus.png">
        Bildegjenkjenningsverkt??y for forskning p?? spissmus med krav til h??y
        presisjon og brukervennlighet.
      </EXPCard>
      <EXPCard label="Doseringsventil" image="/images/ventil.png">
        Skreddersydd maskinering og kretsdesign til doseringsventil for bruk i
        forskning.
      </EXPCard>
      <EXPCard label="T??rking av kaffeb??nner" image="/images/sol-torker.jpg">
        Utvikling av prototype for energieffektiv t??rking av kaffeb??nner i
        u-land.
      </EXPCard>
      <EXPCard label="Sensorikkpanel" image="/images/sensor-map.png">
        Kartvisning i 3D av sensordata.
        <div>
          <small>
            <i>Videre info er dessverre underlagt NDA.</i>
          </small>
        </div>
      </EXPCard>
    </div>
  );
}
