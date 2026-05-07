export type Publication = {
  year: number;
  title: string;
  authors?: string;
  venue?: string;
  doi?: string;
  pdf?: string;
  code?: string;
  bibtex?: string;
};

export const publications: Publication[] = [];

export const publicationPlaceholder =
  "Selected publications will be updated soon.";
