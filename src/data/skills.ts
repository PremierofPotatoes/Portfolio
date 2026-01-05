export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "CAD Modelling",
    description: "Designing manufacturable, lightweight drone components with clear interfaces and practical weight–strength trade-offs.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Python Coding",
    description: "Developing Python tools with clear interfaces, predictable behavior, and documented assumptions to support analysis and automation.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: "3D Printing",
    description: "Producing functional 3D-printed parts with print-optimized geometry and practical tolerance control.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
    title: "Data Gathering",
    description: "Capturing real-world measurement data using sensors and instruments, with attention to calibration, noise, and repeatability.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
    title: "Prototyping",
    description: "Prototyping mechanical designs through fast iteration, hands-on testing, and measured feedback to converge on functional solutions.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
    title: "Brainstorming",
    description: "Exploring multiple design approaches through structured brainstorming, informed by data, requirements, and prototyping feedback.",
  },
];

export type Skill = (typeof skills)[number];

