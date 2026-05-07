export type Project = {
  title: string;
  description: string;
  data: string[];
  methods: string[];
  status: string;
  codeUrl: string;
};

export const projects: Project[] = [
  {
    title: "Antarctic sea ice freeboard retrieval using SWOT and ICESat-2",
    description:
      "Exploring the potential of combining wide-swath SWOT observations with ICESat-2 laser altimetry for Antarctic sea ice freeboard estimation.",
    data: ["SWOT", "ICESat-2", "sea ice concentration products"],
    methods: ["cross-sensor comparison", "height anomaly analysis", "uncertainty assessment"],
    status: "Ongoing",
    codeUrl: "#",
  },
  {
    title: "CryoSat-2 waveform classification, retracking, and freeboard retrieval",
    description:
      "Developing a workflow for radar-altimeter waveform analysis over sea ice, including surface-type classification and freeboard retrieval.",
    data: ["CryoSat-2 SAR/SARIn", "auxiliary sea ice and snow products"],
    methods: ["waveform classification", "retracking", "freeboard estimation"],
    status: "In development",
    codeUrl: "#",
  },
  {
    title: "Tibetan Plateau lake water level monitoring using satellite altimetry",
    description:
      "Monitoring lake water-level variations across the Tibetan Plateau using multi-mission satellite altimetry observations.",
    data: ["ICESat-2", "CryoSat-2", "multi-mission altimetry"],
    methods: ["time-series analysis", "quality control", "hydrological remote sensing"],
    status: "Concept and data preparation",
    codeUrl: "#",
  },
];
