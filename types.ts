
export interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface Experience {
  organization: string;
  role: string;
  period: string;
  project: string;
  description: string[];
}

export interface Publication {
  authors: string;
  title: string;
  journal: string;
  year: string;
  type: 'Journal' | 'Conference' | 'Domestic';
}

export interface SkillGroup {
  category: string;
  items: string[];
}
