export interface Skill {
    label: string;
    value: number;
    description: string;
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
}

export interface Skills {
    categories: SkillCategory[];
}