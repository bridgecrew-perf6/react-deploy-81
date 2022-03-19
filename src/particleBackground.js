import React from "react";
import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#1e293b",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn:"canvas",
          events: {
            resize:true
          },
        },
        particles: {
          color: {
            value: "#bae6fd",
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            limit:0,
            value: 500,
          },
          opacity: {
            animation: {
              enable:true,
              minimumValue:1,
              speed:2,
              sync:false
            },
            random: {
              enable:true,
              minimumValue:0.05
            },
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: {
              enable:true,
              minimumValue:1
            },
            value: 1,
          },
        },
      }}
    />
  );
}
