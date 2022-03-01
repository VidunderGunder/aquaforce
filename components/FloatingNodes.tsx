import { ComponentProps } from "react";
import Particles from "react-tsparticles";

export default function FloatingNodes({
  ...props
}: ComponentProps<typeof Particles>) {
  return (
    <Particles
      id="phoenix-particles"
      options={{
        detectRetina: false,
        fpsLimit: 60,
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: ["bubble", "connect", "light"],
              parallax: {
                enable: true,
                force: 50,
                smooth: 250,
              },
            },
            onClick: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 100,
              links: {
                opacity: 0.1,
              },
              lineLinked: {
                opacity: 0.1,
              },
              radius: 50,
            },
            bubble: {
              distance: 100,
              duration: 1000,
              opacity: 8,
              size: 10,
              mix: true,
            },
            light: {
              area: {
                gradient: {
                  start: "#ffffff",
                  stop: "#ffffff",
                },
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 20,
              sync: true,
            },
          },
          lineLinked: {
            blink: false,
            color: "random",
            consent: false,
            distance: 45,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 0.25,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            limit: 0,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 2,
              sync: false,
            },
            random: false,
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 2,
              speed: 30,
              sync: false,
            },
            random: true,
            value: 7,
          },
        },
      }}
      {...props}
    />
  );
}
