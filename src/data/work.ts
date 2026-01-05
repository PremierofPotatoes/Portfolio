import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Assistant Researcher",
    company: "SUTD EPD Airlab",
    region: "Singapore",
    description:
      "Designed and produced parts for a waterproof concept X8 drone. Improved on previous propeller guard designs. Assisted in the researching of parts to source online.",
    technologies: [
      "Solidworks",
      "Bambu Studio",
      "Bambu Lab 3D printer",
    ],
  },
  {
    title: "Office Assistant",
    company: "A N S PLUMBING & SANITARY PTE LTD",
    region: "Singapore",
    description:
      "Maintained confidentiality in handling sensitive information while performing administrative tasks. Expedited document processing with accurate data entry and timely filing.",
    technologies: [
      "Microsoft Excel",
      "Microsoft Words",
    ],
  },
  {
    title: "Workshop Assistant",
    company: "A N S PLUMBING & SANITARY PTE LTD",
    region: "Singapore",
    description:
      "Assisted equipment operators in the alignment, movement and adjustment of equipment and materials. Loaded, unloaded and identified building materials, machinery and tools to distribute tools to appropriate locations.",
    technologies: [
      "Jib Crane",
    ],
  },
  {
    title: "Server",
    company: "Saizeriya",
    region: "Singapore",
    description:
      "Served food and beverages promptly with focused attention to customer needs. Maintained a clean and orderly dining area for an enjoyable guest experience.",
    technologies: [
      "Dishwasher",
    ],
  },
];

export type WorkItem = (typeof work)[number];

