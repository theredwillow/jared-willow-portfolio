// The subset of the JSON Resume schema (https://jsonresume.org/schema/) this
// site uses. Free-text fields may contain [text](url) links; see format.ts.
export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Basics {
  name: string;
  location: { city: string };
  profiles: Profile[];
}

export interface Work {
  name: string;
  startDate?: string; // YYYY-MM
  endDate?: string; // YYYY-MM, omitted while ongoing
  summary: string;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  // Extension to the schema (JSON Resume allows extra fields)
  learnMoreUrl?: string;
}

export interface Resume {
  basics: Basics;
  work: Work[];
  projects: Project[];
}
