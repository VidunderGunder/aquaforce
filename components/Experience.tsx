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
        Dokumentasjon på papir ble for dumt, så vi flyttet det over på
        duppedingser.
      </EXPCard>
      <EXPCard label="Kurs og fag ved NMBU" image="/images/workshop-tiny.jpg">
        Workshops, kursmateriale, undervisningshjelp o.l. ved Norges Miljø- og
        Biovitenskapelige Universitet.
      </EXPCard>
      <EXPCard
        label="KulturHACK med Ås Kommune"
        image="/images/kulturhack.jpeg"
      >
        Kulturelt undervisningsopplegg i regi av Ås Kommune, for å inspirere
        unge til å engasjere seg i kunst og teknologi.
      </EXPCard>
      <EXPCard label="Sildr" image="/images/sildr.jpg">
        Smarte drikkefontener koblet til skyen. Målet er å oppfordre folk til
        fylle på flaska og spare miljøet for litt plast.
      </EXPCard>
      <EXPCard label="Labutstyr (CRISPR)" image="/images/potato.png">
        Automatisering av prosesser i forbindelse med forskning på
        genredigering.
      </EXPCard>
      <EXPCard label="Simulert AI" image="/images/unity-ai.png">
        Effektiv trening av kunstig intelligens, som kan overføres til
        virkeligheten.
      </EXPCard>
      <EXPCard label="Miljøkalkulator" image="/images/carculator.png">
        Grensesnitt for å simulere konsekvenser av kjøretøyspolitikk for
        kommunene i Østfoldregionen.
      </EXPCard>
      <EXPCard label="Bildegjenkjenning" image="/images/mus.png">
        Bildegjenkjenningsverktøy for forskning på spissmus med krav til høy
        presisjon og brukervennlighet.
      </EXPCard>
      <EXPCard label="Doseringsventil" image="/images/ventil.png">
        Skreddersydd maskinering og kretsdesign til doseringsventil for bruk i
        forskning.
      </EXPCard>
      <EXPCard label="Tørking av kaffebønner" image="/images/sol-torker.jpg">
        Utvikling av prototype for energieffektiv tørking av kaffebønner i
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
