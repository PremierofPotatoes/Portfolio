export const skills = [
  {
    icon: `autocad`,
    title: "CAD Modelling",
    description: "Designing manufacturable, lightweight drone components with clear interfaces and practical weight–strength trade-offs.",
  },
  {
    icon: `python`,
    title: "Python Coding",
    description: "Developing Python tools with clear interfaces, predictable behavior, and documented assumptions to support analysis and automation.",
  },
  {
    icon: `dassaultsystemes`,
    title: "3D Printing",
    description: "Producing functional 3D-printed parts with print-optimized geometry and practical tolerance control.",
  },
  {
    icon: `dassaultsystemes`,
    title: "Prototyping",
    description: "Prototyping mechanical designs through fast iteration, hands-on testing, and measured feedback to converge on functional solutions.",
  },
  {
    icon: `ruler`,
    title: "Data Gathering",
    description: "Capturing real-world measurement data using sensors and instruments, with attention to calibration, noise, and repeatability.",
  },
  {
    icon: `brain`,
    title: "Brainstorming",
    description: "Exploring multiple design approaches through structured brainstorming, informed by data, requirements, and prototyping feedback.",
  },
];

export type Skill = (typeof skills)[number];

