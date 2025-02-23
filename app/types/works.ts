export interface WorkItem {
    title: string;
    description: string;
    technologies: string[];
    period: string;
}

export interface Works {
    items: WorkItem[];
}