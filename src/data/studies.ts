export const studies = [
  {
    title: "Diploma in Robotics and Mechatronics",
    institution: "Local Polytechnic",
    description:
      "Built foundations for: CAD Modelling, coding, networking, Automation systems, Physics and Math, and Entrepreneurship.",
    tags: [
      "CAD Modelling",
      "Data Structures",
      "Automation Systems",
      "Networking",
      "Mechanism Design",
      "Entrepreneurship",
    ],
  },
  {
    title: "O-level Graduate",
    institution: "Secondary School",
    description:
      "Built foundations for Math, Science and learnt basic skills.",
    tags: [
      "Basics",
      "67",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

